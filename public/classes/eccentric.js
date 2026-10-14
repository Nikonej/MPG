function eccfeatures(data){
    document.getElementById("weavetable").style.display = "none"
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("focusTable").style.display = "none"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("seasontable").style.display = "none"
    document.getElementById("claritytable").style.display = "none"
    document.getElementById("manifesttable").style.display = "table"
    let mastery = parseInt((parseInt(document.getElementById("lvl").value)+1)/2)
    document.getElementById("OM1").childNodes[0].textContent = "every 2 DOTs consumed reduce damage by 1d4+" + mastery
    document.getElementById("OM2").childNodes[0].textContent = "Consume 3 DOTs to reduce saving throw by " + mastery
    document.getElementById("OM3").childNodes[0].textContent = "Once a turn, consume up to " + mastery + " DOTs to move by that much"

    //husk at fjerne alle andre subclass features
    let lvl = document.getElementById("lvl")
}

function sanguine(data){
    data.basicname.textContent = "Lacerate"
    data.tohit.textContent = "+" + tohitf("", true,"", basic=true)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false,data.masteryStat, true)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "On hit, inflict bleeding on the target instead of dealing normal damage.";
    data.effect.querySelector(".tooltiptext").textContent = "When you hit a target, you inflict 1d4 + Mastery bleeding instead of dealing normal damage.";
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

function plague(data){
    data.basicname.textContent = "Toxicity"
    data.tohit.textContent = "+" + tohitf("", true,"", basic=true)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false,data.masteryStat, true)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "On hit, inflict Poisoned on the target instead of dealing normal damage.";
    data.effect.querySelector(".tooltiptext").textContent = "When you hit a target, you inflict 1d4 + Mastery Poisoned instead of dealing normal damage.";
    eccskills(skill1sel, 1)
    eccskills(data.skill2sel, 1)
    eccskills(data.skill3sel, 1)
    eccskills(data.skill4sel, 2)
    eccskills(data.skill5sel, 2)
    eccskills(data.skill6sel, 2)
    plagueskills(skill1sel, 1)
    plagueskills(data.skill2sel, 1)
    plagueskills(data.skill3sel, 1)
    plagueskills(data.skill4sel, 2)
    plagueskills(data.skill5sel, 2)
    plagueskills(data.skill6sel, 2)
    eccpassives(passive1sel,1)
}

function eccskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Befuddling Blast (I)', 'befuddlingblast');
    skillid.options[skillid.options.length] = new Option('Curse of Frailty (I)', 'cursefrailty');
    skillid.options[skillid.options.length] = new Option('Beguile (I)', 'beguile');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Feinting Strike (II)', 'feintingstrike');
        skillid.options[skillid.options.length] = new Option('Envenom (II)', 'envenom');
        skillid.options[skillid.options.length] = new Option('Treachery (II)', 'treachery');
    }
}

function sanguineskills(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Hemokinesis (I)', 'hemokinesis');
    skillid.options[skillid.options.length] = new Option('Curse of Hemorrhaging (I)', 'cursehemo');
}

function plagueskills(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Elixir of Vitality (I)', 'elixirvit');
    skillid.options[skillid.options.length] = new Option('Curse of Contagion (I)', 'cursecontagion');
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
