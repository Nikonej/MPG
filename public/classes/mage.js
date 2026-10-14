function magefeatures(data){
    document.getElementById("weavetable").style.display = "table"
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("focusTable").style.display = "none"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("manifesttable").style.display = "none"
    document.getElementById("seasontable").style.display = "none"
    document.getElementById("claritytable").style.display = "none"
    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
}

function chrono(data){
    data.basicname.textContent = "Deceleration"
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true, 0, 1)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false, "", 1)
    data.range.textContent = "6 squares"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "Shoot up to 3 rays of slowing energy. Each ray must target a unique enemy. On each hit, the targets evasion is reduced by 1 until the end of their next turn.";
    data.effect.querySelector(".tooltiptext").textContent = "Your basic attack deals force damage. \n \n Shoot up to 2 rays of slowing energy. Each ray must target a unique enemy. \n \n On each hit, the targets evasion is reduced by 1 until the end of their next turn.";
    mageskills(skill1sel, 1)
    mageskills(data.skill2sel, 1)
    mageskills(data.skill3sel, 1)
    mageskills(data.skill4sel, 2)
    mageskills(data.skill5sel, 2)
    mageskills(data.skill6sel, 2)
    chronoskills(skill1sel, 1)
    chronoskills(data.skill2sel, 1)
    chronoskills(data.skill3sel, 1)
    chronoskills(data.skill4sel, 2)
    chronoskills(data.skill5sel, 2)
    chronoskills(data.skill6sel, 2)
    magepassives(passive1sel,1)

}

function mageskills(skillid, tier){
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

function chronoskills(skillid, tier){

}

function magepassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Stand Behind Me!(I)', 'standbehindme');
    skillid.options[skillid.options.length] = new Option('Whirling Defender (I)', 'whirlingdefender');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}
