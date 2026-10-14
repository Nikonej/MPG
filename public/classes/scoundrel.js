function scoundrelfeatures(data){
    document.getElementById("cunningtable").style.display = "table"
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("focusTable").style.display = "none"
    document.getElementById("weavetable").style.display = "none"
    document.getElementById("manifesttable").style.display = "none"

    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
    
}

function spendres(amount, res){
    if (res.value - parseInt(amount) >= 0){
        res.value -= parseInt(amount)
    } else {
        alert("not enough")
    }
    sendData()
    
}

function pirate(data){
    data.basicname.textContent = "Pirate strike"
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true,0,1)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false,0,1)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently 0 damage.";
    data.effect.querySelector(".tooltiptext").textContent = "Your basic attack deals bludgeoning damage. If you hit an enemy, you may attack again without using AP. \n \n When you would reset focus from taking damage while at 0 focus or less, instead lose one focus. Focus can become negative. You deal extra damage the more negative focus you have, up to your mastery.\n \n Some Pugilist skills and passives are changed for the Rager:\n \n Skills:\n Flurry of Blows+ \n Adrenaline rush -> Frenzy Rush \n \n passives: \n Momentum -> Raging Momentum \n Absolute Focus -> Absolute Rage \n Unwavering -> Unwavering Anger";
    scoundrelskills(skill1sel, 1)
    scoundrelskills(data.skill2sel, 1)
    scoundrelskills(data.skill3sel, 1)
    scoundrelskills(data.skill4sel, 2)
    scoundrelskills(data.skill5sel, 2)
    scoundrelskills(data.skill6sel, 2)
    pirateskills(skill1sel, 1)
    pirateskills(data.skill2sel, 1)
    pirateskills(data.skill3sel, 1)
    pirateskills(data.skill4sel, 2)
    pirateskills(data.skill5sel, 2)
    pirateskills(data.skill6sel, 2)
    scoundrelpassives(passive1sel,1)

}

function scoundrelskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Backstab (I)', 'backstab');
    skillid.options[skillid.options.length] = new Option('Blade Flurry (I)', 'bladeflurry');
    skillid.options[skillid.options.length] = new Option('Preparation (I)', 'preparation');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Feinting Strike (II)', 'feintingstrike');
        skillid.options[skillid.options.length] = new Option('Envenom (II)', 'envenom');
        skillid.options[skillid.options.length] = new Option('Treachery (II)', 'treachery');
    }
}

function pirateskills(skillid, tier){
    
}

function scoundrelpassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Poisoned Blades (I)', 'poisonblades');
    skillid.options[skillid.options.length] = new Option('Emergency Stash (I)', 'emergencystash');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}
