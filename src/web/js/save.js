var saveableVars = {'x':0,'y':1,'z':2,'facing':3,'scenario':4,'objectives':5,'inactiveProps':6,'inventory':7,'triggers':8};
var triggerTypes = ['disabled', 'pool', 'waitingForSignal', 'deferredByMoves', 'deferredByTime', 'deferredByObjectives'];
function saveGame() {
    if (gameState == GAME_STATE_OVER) {
        document.cookie = 'emergencySave=; expires=Sat, 1-Jan-2000 00:00:00 GMT'; // expire in the past to delete
        return;
    }
    var inactList = [];
    for (var i in scenario.inactiveProps) 
        if (scenario.inactiveProps.hasOwnProperty(i))
            inactList[inactList.length] = i;
    var saveable = [
        /*"x":*/ player.x, /*"y":*/ player.y, /*"z":*/ player.z, /*"facing":*/ player.facing,
        /*"scenario":*/ currentScenario,
        /*"objectives":*/ scenario.objectives,
        /*"inactiveProps":*/ inactList,
        /*"inventory":*/ player.inventory.items
    ];
    for (var j = 0; j < triggerTypes.length; j++) {
        var name = triggerTypes[j];
        var input = scenario.triggers[name];
        var result = {};
        for (var i in input) {
            result[i] = [input[i].lives];
            if (!Number.isFinite(result[i].lives))
                result[i][0] = -1; // JSON doesn't have Infinity
            if (input[i].timeLeft != null && name == 'deferredByTime')
                result[i][1] = input[i].timeLeft;
        }
        saveable[saveableVars.triggers+j] = result;
    }
    var str = escape(JSON.stringify(saveable));
    console.log(JSON.stringify(saveable));
    // TODO expire
    document.cookie = "emergencySave="+str+"";
}

function canLoadGame() {
    return document.cookie.match(/emergencySave=([^;]+)/);
}

function loadGame() {
    document.cookie.match(/emergencySave=([^;]+)/);
    var str = unescape(RegExp.$1);
    var saveable = jQuery.parseJSON(str);
    currentScenario = saveable[saveableVars.scenario];
    loadScenario(window[currentScenario]);
    
    var allTriggers = jQuery.extend(true, {}, window[currentScenario]._triggers);
    
    player.x = saveable[saveableVars.x];
    player.y = saveable[saveableVars.y];
    player.z = saveable[saveableVars.z];
    player.facing = saveable[saveableVars.facing];
    player.inventory.items = saveable[saveableVars.inventory];
    scenario.objectives = saveable[saveableVars.objectives];
    clearAllTriggers();
    for (var j = 0; j < triggerTypes.length; j++) {
        var name = triggerTypes[j];
        var input = saveable[saveableVars.triggers+j];
        var result = {};
        for (var i in input) {
            result[i] = allTriggers[i];
            result[i][0] = input[i].lives;
            if (input[i][1] != null)
                result[i][1] = input[i].timeLeft;
        }
        scenario.triggers[name] = result;
    }
    scenario.inactiveProps = {};
    for (var i = 0; i < saveable[saveableVars.inactiveProps].length; i++)
        scenario.inactiveProps[saveable[saveableVars.inactiveProps][i]] = true;
    renderScene();
    updateMap();
    jQuery('#objective ul').empty();
    for (var name in scenario.objectives.inProgress) {
        console.log(name);
        if(scenario.objectives.inProgress.hasOwnProperty(name))
            jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
    }
}
