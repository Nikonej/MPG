function verdantfeatures(data){
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("focusTable").style.display = "none"
    document.getElementById("weavetable").style.display = "none"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("manifesttable").style.display = "none"
    document.getElementById("seasontable").style.display = "table"

    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
}

function shapeshifter(data){
    data.basicname.textContent = "Pounce"
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true, "",1)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false,"",1)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "If you're in a different form granted by a Shapeshifter skill, damage increased to 1d12";
    data.effect.querySelector(".tooltiptext").textContent = "Your basic attack deals slashing damage.\n \n If you're in a different form granted by a Shapeshifter skill, your basic attack damage is increased to 1d12";
    verdantskills(skill1sel, 1)
    verdantskills(data.skill2sel, 1)
    verdantskills(data.skill3sel, 1)
    verdantskills(data.skill4sel, 2)
    verdantskills(data.skill5sel, 2)
    verdantskills(data.skill6sel, 2)
    shapeshifterskills(skill1sel, 1)
    shapeshifterskills(data.skill2sel, 1)
    shapeshifterskills(data.skill3sel, 1)
    shapeshifterskills(data.skill4sel, 2)
    shapeshifterskills(data.skill5sel, 2)
    shapeshifterskills(data.skill6sel, 2)
    verdantpassives(passive1sel,1)

}

function verdantskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Nature\'s Grasp (I)', 'naturegrasp');
    skillid.options[skillid.options.length] = new Option('Bloom (I)', 'bloom');
    skillid.options[skillid.options.length] = new Option('Wild Growth (I)', 'wildgrowth');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Feinting Strike (II)', 'feintingstrike');
        skillid.options[skillid.options.length] = new Option('Envenom (II)', 'envenom');
        skillid.options[skillid.options.length] = new Option('Treachery (II)', 'treachery');
    }
}

function shapeshifterskills(skillid, tier){

}

function verdantpassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Stand Behind Me!(I)', 'standbehindme');
    skillid.options[skillid.options.length] = new Option('Whirling Defender (I)', 'whirlingdefender');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Lucky Strike (II)', 'luckystrike');
        skillid.options[skillid.options.length] = new Option('Evasive (II)', 'evasive');
    }
}
