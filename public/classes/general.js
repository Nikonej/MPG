function showskills(){
for (let i = 0; i < skillsel.length; i++){
    skillsel[i].addEventListener('change', (e) => {
    e.preventDefault();
    switch(skillsel[i].id){
        case("skill1sel"):
            skilldesc(skill1sel, skill1desc, skill1mana, skill1uses, skill1ap)
        break;
        case("skill2sel"):
            skilldesc(skill2sel, skill2desc, skill2mana, skill2uses, skill2ap)
        break;
            case("skill3sel"):
            skilldesc(skill3sel, skill3desc, skill3mana, skill3uses, skill3ap)
        break;
        case("skill4sel"):
            skilldesc(skill4sel, skill4desc, skill4mana, skill4uses, skill4ap)
        break;
        case("skill5sel"):
            skilldesc(skill5sel, skill5desc, skill5mana, skill5uses, skill5ap)
        break;
        case("skill6sel"):
            skilldesc(skill6sel, skill6desc, skill6mana, skill6uses, skill6ap)
        break;
        case("passive1sel"):
            skilldesc(passive1sel, passive1desc,"","","")
        break;
    }
    sendData();
});}
}

function itemtype(item){
    switch(item){
        case("Wand"):
            console.log("works")
            return(["Magic", "Once per rest, you may target an additional target within range when using your basic attack", "Once per rest, you can use your basic attack twice before gaining disadvantage.", ""])
        break;
        case("Staff"):
            return(["Magic", "Once per rest, you may reroll a missed attack roll.", "Once per rest, you may double the range of one skill or basic attack.", ""])
        break;
        case("Rod"):
            return(["Magic", "Passive: You have +1 armor while holding this weapon", "Passive: You have +1 armor slot while holding this weapon.	", ""])
        break;
        case("Orb"):
            return(["Magic", "Once per rest, you may gain twice your normal mana regeneration at the start of your turn.", "Once per rest, you may use your mana regen instead of your armor when using an armor slot.", ""])
        break;
        case("Tome"):
            return(["Magic", "Once per rest, you may use a skill you have learned but not equipped", "Once per rest, you may use an unupgraded skill as an upgraded skill, with the original Mana and AP cost.", ""])
        break;
        case("Crystal"):
            return(["Magic", "Once per rest, you may regain 1 AP.", "You can go into negative mana once, up to 3 (level+mana regen). You regain the ability to do so every time you get max mana	", ""])
        break;
        case("Scepter"):
            return(["Magic", "Once per rest, you may make an enemy reroll a saving throw on one of your attacks or skills.","Once per rest, you may reroll the damage of one skill or basic attack.", ""])
        break;
        case("Dagger"):
            return(["Light", "Passive: Basic attacks can be thrown with a range of 4 squares when using the dagger", "Once per rest, you can make a free basic attack after you use a skill or basic attack",""])
        break;
        case("Handaxe"):
            return(["Light", "Passive: Basic attacks can be thrown with a range of 4 squares when using the handaxe","Once per rest, you can use your basic attack twice before gaining disadvantage.",""])
        break;
        case("Mace"):
            return(["Light", "Once per rest on hit, reduce the target’s movement by half until the end of their next turn.","Once per rest on hit, you can inflict 1d4 turns of dazed",""])
        break;
        case("Sickle"):
            return(["Light", "Once per rest, you may target 2 creatures within range with your basic attack", "Once per rest, you may deal turns of bleeding instead of a basic attacks normal damage type.", ""])
        break;
        case("Scimitar"):
            return(["Light", "Once per rest, you can use your basic attack twice before gaining disadvantage.", "Once per rest on hit, you can inflict 1d6 weak.", ""])
        break;
        case("Shortsword"):
            return(["Light", "Once per turn when a creature leaves your basic attack range, you may attack them with a free basic attack		Once per rest when a creature misses you with an attack, you may attack them with a free basic attack. On a hit, they can't attack you again until the end of their turn.", ""])
        break;
        case("Whip"):
            return(["Light","Once per turn on a hit, you may move your target up two 2 squares.", "Passive: Your attack range is increased by 1 square", ""])
        break;
        case("Quarterstaff"):
            return(["Balanced", "Once per rest on hit, you may attempt to topple the target prone (DC " + tohitf("",true,"",1) + ")", "Once per rest on hit, you can inflict 1d4 turns of dazed",""])
        break;
        case("Spear"):
            return(["Balanced", "Passive: Basic attacks can be thrown with a range of 6 squares when using the spear", "Passive: Your attack range is increased by 1 square", ""])
        break;
        case("Flail"):
            return(["Balanced", "Once per rest on hit, you may attempt to disarm the target (DC " + tohitf("",true,"",1) + ")", "Passive: If you miss with a basic attack, you still deal 4 damage	", ""])
        break;
        case("Longsword"):
            return(["Balanced","Once per turn when a creature leaves your basic attack range, you may attack them with a free basic attack","Once per rest on hit, the target becomes exposed until the end of their next turn.", ""])
        break;
        case("Rapier"):
            return(["Balanced","Once per rest on hit, you can inflict 1d6 weak.","Once per rest, you may gain advantage on your attack.",""])
        break;
        case("Trident"):
            return(["Balanced", "Once per rest, your attack range is increased by 1 square, and you may target up to two targets in a straight line with a basic attack.", "Once per rest on hit, you may attempt to disarm the target (DC " + tohitf("",true,"",1) + ")", ""])
        break;
        case("Waraxe"):
            return(["Balanced", "Once per rest on hit, you can inflict 1d6 bleeding", "Once per rest, you may target 3 creatures within range with your basic attack",""])
        break;
        case("Warhammer"):
            return(["Balanced", "Once per round on hit, you may push the target 2 squares away from you","Once per rest on hit, you can inflict 1d4 frail",""])
        break;
        case("Glaive"):
            return(["Heavy", "Passive: Your attack range is increased by 1 square","Once per rest, you may target 3 creatures within range with your basic attack",""])
        break;
        case("Greataxe"):
            return(["Heavy", "Once per rest on hit, you can inflict 2d4 bleeding", "Once per rest, you may target 4 creatures within range with your basic attack",""])
        break;
        case("Greatsword"):
            return(["Heavy", "Once per turn when a creature leaves your basic attack range, you may attack them with a free basic attack", "Once per rest, you may target 4 creatures within range with your basic attack",""])
        break;
        case("Greathammer"):
            return(["Heavy", "Once per rest on hit, you can inflict 1d6 turns of dazed", "Once per rest on hit, the target becomes crippled until the end of their next turn.", ""])
        break;
        case("Lance"):
            return(["Heavy", "Once per rest, you deal double damage on a basic attack if you move at least 4 squares in a straight line immediately before attacking.","Passive: Your attack range is increased by 1 square, and once per rest you may target up to two targets in a straight line with a basic attack.", ""])
        break;
        case("Greatclub"):
            return(["Heavy", "Once per rest on hit, the target becomes exposed until the end of their next turn.","Passive: If you miss with a basic attack, you still deal 4 damage", ""])
        break;
        case("Page Burner"):
            return(["Magic", "Once per rest, you may use a skill you have learned but not equipped","Once per rest, you may use an unupgraded skill as an upgraded skill, with the original Mana and AP cost.", "Once per round when you deal fire damage with a skill, refund half the mana spent on the skill."])
        break;
        case("Heart of the Titans"):
            return(["Magic", "Once per rest, you may gain twice your normal mana regeneration at the start of your turn.","Once per rest, you may use your mana regen instead of your armor when using an armor slot.", "You can use the Judgment of the Titans skill once per rest. You can use this skill even if it is unequipped"])
        break;
        case("Dagger of Venom"):
            return(["Light", "Passive: Basic attacks can be thrown with a range of 4 squares when using the dagger","Once per rest, you can make a free basic attack after you use a skill or basic attack", "Once per turn, deal +1d4 poison damage \nOnce per rest, deal poison DOT instead of normal damage on a hit"])
        break;
        case("Staff of the Serpent"):
            return(["Magic", "Once per rest, you may reroll a missed attack roll.","Once per rest, you may double the range of one skill or basic attack.", "Once per rest, for 1 AP, you may charm a snake or Naga within 1 square. The target must make a DC " + parseint(8 + tohitf("", true, "", 1)) + " Mind saving throw or become charmed by you until you attack it or after 1 hour"])
        break;
        case("Coilbinder"):
            return(["Balanced", "Once per turn on a hit, you may move your target up two 2 squares.","Passive: Your attack range is increased by 1 square", "Once per turn, you may grapple the target on a hit. While grappling someone with the whip, you can’t use it again until the grapple ends."])
        break;
        case("The Axe"):
            return(["Balanced", "Once per rest on hit, you can inflict 1d6 bleeding	","Once per rest, you may target 3 creatures within range with your basic attack", ""])
        break;
        case("Sanctity"):
            return(["Heavy", "Once per turn when a creature leaves your basic attack range, you may attack them with a free basic attack","Once per rest, you may target 4 creatures within range with your basic attack", "+3 to attack and damage rolls. Once per turn when you kill a creature, you may move the creature up to its own movement and make it make one attack or skill it would be able to use."])
        break;
        case("Moonblade"):
            return(["Balanced", "Once per turn when a creature leaves your basic attack range, you may attack them with a free basic attack","Once per rest on hit, the target becomes exposed until the end of their next turn.", "This weapon gains effects as its wielder becomes more powerful (every other level)."])
        break;
        case("Stonehowl"):
            return(["Magic", "Once per rest when you use a skill, you may fill all remaining Wordsmith slots with one note (Harmonarch)","Once per rest, you may gain twice your normal mana regeneration at the start of your turn.", "You can use the Echo of Command skill once per rest. You can use this skill even if it is unequipped."])
        break;
        case("Musket"):
            return(["Heavy", "Passive: While prone, you dont suffer disadvantage from using your basic attack multiple times","Once per rest on hit, the target becomes exposed until the end of their next turn.", ""])
        break;
        case("Blunderbuss"):
            return(["Heavy", "Once per rest, you may target enemies in a 3 square cone with a basic attack","Once per rest on hit, inflict 1d4 dazed. If within 1 square, inflict 2d4 instead", ""])
        break;
        case("Flintlock"):
            return(["Light", "Each turn, you can use your basic attack twice before gaining disadvantage.","Once per rest, you can use a basic attack after you use a skill or basic attack at no cost.", ""])
        break;
        case("Leather Armor"):
            armorscorebonus += 1;
            armorcountbonus += 1;
            movementbonus += 0;
            return(["Light Armor", "","", ""])
        break;
        case("Elven Armor"):
            armorscorebonus += 1;
            armorcountbonus += 2;
            movementbonus += 0;
            return(["Medium Armor", "","", ""])
        break;
        case("Chain Shirt"):
            armorscorebonus += 2;
            armorcountbonus += 2;
            movementbonus -= 1;
            return(["Medium Armor", "-1 movement","", ""])
        break;
        case("Scale Mail"):
            armorscorebonus += 2;
            armorcountbonus += 3;
            movementbonus -= 2;
            return(["Heavy Armor", "-2 movement","", ""])
        break;
        case("Plate Armor"):
            armorscorebonus += 3;
            armorcountbonus += 3;
            movementbonus -= 3;
            return(["Heavy Armor", "-3 movement","", ""])
        break;
        case("Bloody Binds"):
            armorscorebonus += 1;
            armorcountbonus += 2;
            movementbonus += 0;
            return(["Unarmored", "+1 armor and +2 armor slots","", ""])
        break;
        case("Lord Kahlazatl's Crown"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Light Helmet", "Gain the Hemokinesis skill","", ""])
        break;
        case("Brood Matron's Circlet"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Unarmored Helmet", "Gain advantage on saving throws against poison damage","", ""])
        break;
        case("Skull of Terror"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Unarmored Helmet", "When you get a critical hit with an attack roll, all enemies within 1 square of you become frightened by you until the end of their next turn","", ""])
        break;
        case("Cloak of Protection"):
            armorscorebonus += 1;
            armorcountbonus += 1;
            movementbonus += 0;
            return(["Cape", "+1 armor and armor slot","", ""])
        break;
        case("Cape of Cunning Flame"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Cape", "+1 Evasion. ","The first creature that damages you each turn gains 1d4 burning", ""])
        break;
        case("Molted Cloak"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Cape", "Once per rest when you take damage, you can shed this cloak to reduce damage by 1d12 + Your Level, leaving it behind. It regenerates after a rest.","", ""])
        break;
        case("Cloak of Billowing"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Cape", "While wearing this cloak, you can make it billow dramatically, gaining advantage to intimidate or inspire","", ""])
        break;
        case("Frostborne Gauntlets"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Light Gloves", "Whenever you reduce the movement of an enemy, also deal that much cold damage, +1 armor","", ""])
        break;
        case("Chain Gauntlets"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Light Gloves", "Once per round, give a melee attack +2 range","", ""])
        break;
        case("Serpent’s Whisper"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Amulet", "You can speak to snakes and Nagas.","Once per rest when you would take poison damage, take no damage and restore that many hit points instead", ""])
        break;
        case("Amulet of the Stag"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Amulet", "Your next crit has +2 crit damage. To recharge the effect after its used, you must have an equal amount of Hit Points and Mana during one of your turns","", ""])
        break;
        case("Quicksilver Ampule"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Amulet", "When you rest, you may restore 2 Armor Slots to an ally or yourself","", ""])
        break;
        case("Sszindaleth’s Eye"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Ring", "You can hold your breath for 30 minutes, and gain no movement penalty underwater","", ""])
        break;
        case("Nullifying Ring"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Ring", "Once per combat, turn a friendly critical hit into a regular hit. Until the end of your turn, none of your attacks can miss.","", ""])
        break;
        case("Ring of Omoglesh"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Ring", "You have +1 Evasion.","Cursed: A powerful fiend has become your nemesis and knows your location at all times. Until they are killed, you cannot remove the ring", ""])
        break;
        case("Molten Belt"):
            armorscorebonus += 1;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Medium Belt", "Resistance to fire damage.","First time you take fire damage each combat, gain +1 AP at the start of turn", "+1 armor"])
        break;
        case("Scales of Sszindaleth"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Light Belt", "1 AP action to gain Immunity to acid, poison, psychic or necrotic damage (your choice) until the start of your next turn. Afterwards, immediately take 1d6 damage of that damage type","", ""])
        break;
        case("Boots of Speed"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Light Boots", "Once per rest, double your speed","", ""])
        break;
        case("Boots of Gripping"):
            armorscorebonus += 0;
            armorcountbonus += 0;
            movementbonus += 0;
            return(["Unarmored Boots", "You can walk on walls and ceilings","", ""])
        break;


    }
}
function useSkill(skillmana, skillap){
    if (mp.value >= parseInt(skillmana)){
        let freeap = 0;
        if (ap1.checked == false){
            freeap +=1;
        }
        if (ap2.checked == false){
            freeap +=1;
        }
        if (ap3.checked == false){
            freeap +=1;
        }
        if (freeap >= parseInt(skillap)){
            mp.value -= parseInt(skillmana)
            let apused = parseInt(skillap)
            if (ap1.checked == false && apused > 0){
                ap1.checked = true;
                apused--;
            }
            if (ap2.checked == false && apused > 0){
                ap2.checked = true;
                apused--;
            }
            if (ap3.checked == false && apused > 0){
                ap3.checked = true;
                apused--;
            }
        } else {
            alert("Not enough AP to use this skill")
        }
    } else {
        alert("Not enough MP to use this skill")
    }
    sendData()
}

function tohitf(ms, atk, ms2, basic=false){
    let hit=0;
    switch(ms){
        case("body"):
            hit = body
            if (bodyMastery.checked && atk){
                hit += parseInt((parseInt(lvl.value)+1)/2)
            }
        break;
        case("senses"):
            hit = senses
            if (sensesMastery.checked && atk){
                hit += parseInt((parseInt(lvl.value)+1)/2)
            }
        break;
        case("mind"):
            hit = mind
            if (mindMastery.checked && atk){
                hit += parseInt((parseInt(lvl.value)+1)/2)
            }
        break;
        case("fortune"):
            hit = fortune
            if (fortuneMastery.checked && atk){
                hit += parseInt((parseInt(lvl.value)+1)/2)
            }
        break;
        case(""):
            hit = 0
        break;
    }
    if (basic){
        hit = -1
        if (body > hit){hit = body}
        if (mind > hit){hit = mind}
        if (senses > hit){hit = senses}
        if (fortune > hit){hit = fortune}
        if (atk){hit += parseInt((parseInt(lvl.value)+1)/2)}
    }
    if (ms2 != undefined && ms2 != "stat"){
        hit2 = tohitf(ms2, atk, "stat", basic)
        hit = parseInt((hit + hit2 + 1)/2)
    }
    if (classs.value == "pug" && atk && ms2!="stat" && subclass != "rager"){
        hit += parseInt(focusbonus.textContent)
    }
    if (subclass == "rager" && !atk && ms2!="stat"){
        hit += parseInt(focusbonus.textContent)
        //hit += parseInt(focus.value<0?(focus.value<-1*parseInt((parseInt(lvl.value)+1)/2)?-1*parseInt((parseInt(lvl.value)+1)/2):focus.value):0)
    }
    return(hit)
}


function endTurn(){
    ap1.checked = false;
    ap2.checked = false;
    ap3.checked = false;
    mp.value = parseInt(mp.value) + parseInt(mpregen.textContent);
    if (mp.value > parseInt(mpmaxtxt.textContent)){
        mp.value = parseInt(mpmaxtxt.textContent)
    }
    sendData();
}

function updateskilltables(lvl){
    for (let i = 0; i < skilltable.length;i++){
       skilltable[i].style.display="none";
    }
    skillsels=[skill1sel, skill2sel, skill3sel, skill4sel, skill5sel, skill6sel]
   // passivesels=[passive1sel]
    freeupgrades = (lvl - 1);
    /*for (let i = 0; i < skill2sel.value.length; i++){
        if (skill2sel.value[i]=="+"){
            freeupgrades--;
        }
    }
    for (let i = 0; i < skill3sel.value.length; i++){
        if (skill3sel.value[i]=="+"){
            freeupgrades--;
        }
    }
    for (let i = 0; i < skill4sel.value.length; i++){
        if (skill4sel.value[i]=="+"){
            freeupgrades--;
        }
    }
    for (let i = 0; i < skill4sel.value.length; i++){
        if (skill4sel.value[i]=="+"){
            freeupgrades--;
        }
    }
    for (let i = 0; i < skill4sel.value.length; i++){
        if (skill4sel.value[i]=="+"){
            freeupgrades--;
        }
    }*/
    if (lvl>0){
        skilltable[0].style.display="block";
        skilltable[1].style.display="block";
    }
    if (lvl>=3 && freeupgrades > 0){
        skilltable[2].style.display="block";
    }
    if (lvl>=5 && freeupgrades > 0){
        skilltable[3].style.display="block";
    }
    if (lvl>=7 && freeupgrades > 0){
        skilltable[4].style.display="block";
    }
    if (lvl>=9 && freeupgrades > 0){
        skilltable[5].style.display="block";
    }
    if (lvl>=2){
        skilltable[6].style.display="block";
    }
    for (let i = 0; i < skillsels.length; i++){
        if (skilltable[i].style.display!="none"){
            for (let j = 0; j < skillsels[i].value.length; j++){
                if (skillsels[i].value[j]=="+"  ){
                    freeupgrades--;
                }
            }
        }
    }
    if (skill3sel.value!="" && skilltable[2].style.display!="none"){
        freeupgrades--; 
    }
    if (skill4sel.value!="" && skilltable[3].style.display!="none"){
        freeupgrades--;
    }
    if (skill5sel.value!="" && skilltable[4].style.display!="none"){
        freeupgrades--;
    }
    if (skill6sel.value!="" && skilltable[5].style.display!="none"){
        freeupgrades--;
    }
    if(freeupgrades>0){
        for (let i = 0; i < upgradebutton.length; i++){
            let notupgraded = true
            for (let j = 0; j < skillsels[i].value.length; j++){
                if (skillsels[i].value[j]=="+"){
                    notupgraded = false;
                }
            }
            if (skillsels[i].value!="" && notupgraded){
                upgradebutton[i].style.display ="inline"
            } else {
                upgradebutton[i].style.display ="none"
            }
        }
    } else {
        for (let i = 0; i < upgradebutton.length; i++){
            upgradebutton[i].style.display ="none"; 
            if (skillsels[i].value=="" && i > 1){
                skilltable[i].style.display="none";
            }
        }
    }
    //skilltable[0].style.display="block";
    //skilltable[1].style.display="block";
}
