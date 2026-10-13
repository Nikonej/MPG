function eccfeatures(data){
    hideCF()
    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
    maxfor = parseInt(lvl.value*2.5+0.99);
    maxfortitude.textContent = maxfor;
    fortitude1.textContent = parseInt((maxfor+3)/4);
    fortitude2.textContent = parseInt((maxfor+1)/2);
    fortitude3.textContent = parseInt(maxfor);
}

function sanguine(data){
    data.basicname.textContent = "Big boy blade"
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "On hit, gain +1 crit chance \n Resets on crit";
    data.effect.querySelector(".tooltiptext").textContent = "on hit with a non crit basic attack, gain extra crit chance on all your attacks equal to your mastery. \n \n This bonus crit chance is reset upon getting a critical hit on an attack roll";
    eccskills(skill1sel, 1)
    eccskills(data.skill2sel, 1)
    eccskills(data.skill3sel, 1)
    eccskills(data.skill4sel, 2)
    eccskills(data.skill5sel, 2)
    eccskills(data.skill6sel, 2)
    sanguineskills(skill1sel, 1)
    sanguineskills(data.skill2sel, 1)
    sanguineskills(data.skill3sel, 1)
    sanguineskills(data.skill4sel, 2)
    sanguineskills(data.skill5sel, 2)
    sanguineskills(data.skill6sel, 2)
    eccpassives(passive1sel,1)

}

function eccskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Whirlwind Slash (I)', 'whirlwindslash');
    skillid.options[skillid.options.length] = new Option('Crippling Blow (I)', 'cripplingblow');
    skillid.options[skillid.options.length] = new Option('Armor Up (I)', 'armorup');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Feinting Strike (II)', 'feintingstrike');
        skillid.options[skillid.options.length] = new Option('Envenom (II)', 'envenom');
        skillid.options[skillid.options.length] = new Option('Treachery (II)', 'treachery');
    }
}

function sanguineskills(skillid, tier){

}

function eccpassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Stand Behind Me!(I)', 'standbehindme');
    skillid.options[skillid.options.length] = new Option('Whirling Defender (I)', 'whirlingdefender');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}
