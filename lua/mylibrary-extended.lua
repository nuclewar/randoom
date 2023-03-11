--spawn groups
--param: group prefix
--function will random spawn groups that begins with the same prefix
--place groups in ME with late activation checked, then name them with same prefix: TEST_1, TEST_2, etc
spawnGroups = function(px)
    local prefixes = px
    for groupName, data in pairs(mist.DBs.groupsByName) do
        if string.find(groupName, prefixes) then
            if (Group.getByName(groupName)) then
                local rdd = math.random(1, 2)
                if rdd == 1 then
                   trigger.action.activateGroup(Group.getByName(groupName))
               end
           end
       end
   end
end


--delay a flight activation
--param: group name (not prefix)
--function created in order to be delayed/re called with scheduleFunction
--timer.scheduleFunction(delayFlight, 'Delayed', timer.getTime() + 30)
delayFlight = function(grName)
    trigger.action.activateGroup(Group.getByName(grName))
end


--delay a message
--param: mesage (string)
--function created in order to be delayed/re called with scheduleFunction
-- timer.scheduleFunction(delayMessage, 'VIPER, engage targets!', timer.getTime() + 60)
delayMessage = function (msg)
    trigger.action.outText(msg, 60)
end


--build WP and activate the group
--TurningPoint Landing
randomPath = function(groupName,destinationZoneName,wpType)
    local randomZonePoint = mist.utils.zoneToVec3(destinationZoneName)
    local buildedWp = mist.utils.makeVec3(randomZonePoint)

    trigger.action.activateGroup(Group.getByName(groupName))
    
    local params = {}
    params['group_name'] = groupName
    params['wp'] = buildedWp
    params['wpType'] = wpType
    timer.scheduleFunction(delayedPath, params, timer.getTime() + 5)
end

--attach the new path to group
delayedPath = function(params)

 local randomAltitude = math.random(3500, 7000)
 local randomSpeed = math.random(300, 500)

 local path = {}
 path[#path + 1] = mist.fixedWing.buildWP(params['wp'], params['wpType'], randomSpeed, randomAltitude, 'asl')
 mist.goRoute(Group.getByName(params['group_name']), path)
end

--event usage example - trigger message each time an unit is taking off
local Event_Handler = {}
function Event_Handler:onEvent(event)
   if (world.event.S_EVENT_TAKEOFF  == event.id) then
       trigger.action.outText("New takeoff of unit " .. event.initiator:getName(), 10)
   end
end
world.addEventHandler(Event_Handler)


--trigger AI ground unit on/off - false value set it off - true value set it on
--punem MISSION START > no condition > radio item add flag 1
--in primul fisier initializam variabila si functia, cu ONCE > time more 6 sec > do script
do
local toggleAi = true --daca grupul incepe cu AI on, punem true, daca incepe cu AI off, punem flase
function AIOff(groupName)
	if toggleAi == false then
	  toggleAi = true
	  elseif toggleAi == true then
	  toggleAi = false
	end

   Group.getByName(groupName):getController():setOnOff(toggleAi)	
 end
end


--ROE START ***************************************************************
--WEAPON_FREE            = 0
--OPEN_FIRE_WEAPON_FREE  = 1
--OPEN_FIRE              = 2
--RETURN_FIRE            = 3
--WEAPON_HOLD            = 4
local sett = math.random(0, 4)
function setRoe(chk)

    local con = Group.getByName('somegroupname_1'):getController()
	
	--ROE is set manually
    if chk <= 4 then
        con:setOption(0, chk)
    else
	--ROE is set random
        con:setOption(0, sett)
    end
end

do
 timer.scheduleFunction(setRoe, 0, timer.getTime() + 10)--ROE is set manually - in this case to 0 - WEAPON_FREE
 timer.scheduleFunction(setRoe, 9999, timer.getTime() + 10) --random roe
end
--ROE END ***************************************************************

--in al doilea fisier apelam doar functia, cu SWITCHED CONDITION > flag 1 is true > scoatem RADIO item si il punem la loc, si punem flag 1 false
do 
	AIOff('Ground-1')
end