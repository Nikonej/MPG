function psionfeatures(data){
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("focusTable").style.display = "none"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("weavetable").style.display = "none"
    document.getElementById("manifesttable").style.display = "none"
    document.getElementById("seasontable").style.display = "none"
    document.getElementById("claritytable").style.display = "table"

    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
}

function diviner(data){
    data.basicname.textContent = "True Strike"
    data.tohit.textContent = "DC " + parseInt(8 + tohitf(data.masteryStat, true,"", 1)) + " fortune"
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false)
    data.range.textContent = "6 squares"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "The target has a reduction in their evasion equal to your current Clarity. This effect lasts until they are hit by an attack, and cannot stack";
    data.effect.querySelector(".tooltiptext").textContent = "Your basic attack deals psychic damage. \n \nThe target must make a Fortune saving throw. On a failure, they take damage they have a reduction in their evasion equal to your current Clarity. This effect lasts until they are hit by an attack, and cannot stack";
    psionskills(skill1sel, 1)
    psionskills(data.skill2sel, 1)
    psionskills(data.skill3sel, 1)
    psionskills(data.skill4sel, 2)
    psionskills(data.skill5sel, 2)
    psionskills(data.skill6sel, 2)
    divinerskills(skill1sel, 1)
    divinerskills(data.skill2sel, 1)
    divinerskills(data.skill3sel, 1)
    divinerskills(data.skill4sel, 2)
    divinerskills(data.skill5sel, 2)
    divinerskills(data.skill6sel, 2)
    psionpassives(passive1sel,1)
    divinerpassives(passive1sel,1)

}

function psionskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Telekinesis (I)', 'telekinesis');
    skillid.options[skillid.options.length] = new Option('Paralyzing Static (I)', 'parastatic');
    skillid.options[skillid.options.length] = new Option('Psionic Paroxysm (I)', 'psiparoxysm');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Feinting Strike (II)', 'feintingstrike');
        skillid.options[skillid.options.length] = new Option('Envenom (II)', 'envenom');
        skillid.options[skillid.options.length] = new Option('Treachery (II)', 'treachery');
    }
}

function divinerskills(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Vengeful Fate (I)', 'vengefulfate');
    skillid.options[skillid.options.length] = new Option('Cut Through Fate (I)', 'cutfate');

}

function psionpassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Potent Mind (I)', 'potentmind');
    skillid.options[skillid.options.length] = new Option('Expanded Consciousness (I)', 'expcon');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}

function divinerpassives(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Augury (I)', 'augury');
    skillid.options[skillid.options.length] = new Option('Clairvoyance (I)', 'clairvoyance');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}
