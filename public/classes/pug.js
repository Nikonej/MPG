function pugfeatures(data){
    document.getElementById("focusTable").style.display = "table"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("weavetable").style.display = "none"
    document.getElementById("fortitudetable").style.display = "none"
    document.getElementById("manifesttable").style.display = "none"
    //husk at fjerne alle andre subclass features
    let focus = document.getElementById("focusval")
    let lvl = document.getElementById("lvl")
    if (focus.value>0){
        document.getElementById("focusbonus").textContent = focus.value>parseInt((parseInt(lvl.value)+1)/2)?parseInt((parseInt(lvl.value)+1)/2):focus.value
    } else{
        document.getElementById("focusbonus").textContent = "0"
    }
}

function rager(data){
    let ragebonus = parseInt(focus.value<0?focus.value<-1*parseInt((parseInt(lvl.value)+1)/2)?-1*parseInt((parseInt(lvl.value)+1)/2):focus.value:0)
    data.basicname.textContent = "Retaliation"
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true,"",true)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false,"",true)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently +" + focusbonus.textContent + " damage.";
    data.effect.querySelector(".tooltiptext").textContent = "Your basic attack deals bludgeoning damage. If you hit an enemy, you may attack again without using AP. \n \n When you would reset focus from taking damage while at 0 focus or less, instead lose one focus. Focus can become negative. You deal extra damage the more negative focus you have, up to your mastery.\n \n Some Pugilist skills and passives are changed for the Rager:\n \n Skills:\n Flurry of Blows+ \n Adrenaline rush -> Frenzy Rush \n \n passives: \n Momentum -> Raging Momentum \n Absolute Focus -> Absolute Rage \n Unwavering -> Unwavering Anger";
    pugskills(skill1sel, 2)
    ragerskills(skill1sel, 2)
    pugskills(data.skill2sel, 1)
    ragerskills(data.skill2sel, 1)
    pugskills(data.skill3sel, 1)
    ragerskills(data.skill3sel, 1)
    pugskills(data.skill4sel, 2)
    ragerskills(data.skill4sel, 2)
    pugskills(data.skill5sel, 2)
    ragerskills(data.skill5sel, 2)
    pugskills(data.skill6sel, 2)
    ragerskills(data.skill6sel, 2)
    pugpassives(data.passive1sel, 1)
    ragerpassives(data.passive1sel, 1)
}

function pugskills(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Flurry of Blows (I)', 'flurry');
    skillid.options[skillid.options.length] = new Option('Crushing Palm (I)', 'crush');
    skillid.options[skillid.options.length] = new Option('Second Wind (I)', 'secondwind');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('Bullet Punch (II)', 'bulletpunch');
        skillid.options[skillid.options.length] = new Option('Counter Strike (II)', 'counter');
        skillid.options[skillid.options.length] = new Option('Frenzy Rush (II)', 'frenzy');
    }
}
function ragerskills(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Rage (I)', 'rage');
    skillid.options[skillid.options.length] = new Option('Unleash Anger (I)', 'unleash');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('dfs (II)', 'dfs');
    }
}

function pugpassives(skillid, tier){
    skillid.options.length = 1;
    skillid.options[skillid.options.length] = new Option('', '');
    skillid.options[skillid.options.length] = new Option('Momentum (I)', 'momentum');
    skillid.options[skillid.options.length] = new Option('Deflect Attacks (I)', 'deflect');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('dfs (II)', 'dfs');
    }
}

function ragerpassives(skillid, tier){
    skillid.options[skillid.options.length] = new Option('Reckless Abandon (I)', 'recklessabandon');
    skillid.options[skillid.options.length] = new Option('Bloodied Frenzy (I)', 'bloodiedfrenzy');
    if (tier >= 2){
        skillid.options[skillid.options.length] = new Option('dfs (II)', 'dfs');
    }
}


function skilldesc(skillid, skilldesc, skillmana, skilluses, skillap, skillsel){
    switch(skillid){
        case(""):
            skilldesc.childNodes[0].textContent="";
            skilldesc.querySelector(".tooltiptext").textContent = "";
            skillmana.textContent = "";
            skillap.textContent = "";
            skilluses.textContent = "";
        break;
        case("flurry"):
            skilldesc.childNodes[0].textContent = "You unleash three attacks with +" + tohitf("senses", true) + " to hit. On a hit, each attack deals 1d4 + " + tohitf("senses", false) + " damage";
            skilldesc.querySelector(".tooltiptext").textContent = "Flurry of Blows \n Cost: 3 Mana, 2 AP \n Range: 1 Square \n You unleash a flurry of rapid strikes, making three attacks against a single target. On a hit, each attack deals 1d4 + Senses damage.";
            skillmana.textContent = "3 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("flurry+"):
            skillsel.options[skillsel.options.length] = new Option('Flurry of Blows+ (I)', 'flurry+')
            //skillid.value="flurryuprager"
            skilldesc.childNodes[0].textContent = "Three attacks with +" + tohitf("senses", true) + " to hit. On a hit, each attack deals 1d6 + " + tohitf("senses", false) + " damage. Grants additional Focus";
            skilldesc.querySelector(".tooltiptext").textContent = "Flurry of Blows+ \nCost: 9 Mana, 2 AP \nRange: 1 Square \n \nYou unleash a flurry of rapid strikes, making three attacks against a single target. On a hit, each attack deals 1d6 + Senses damage. Each hit grants 1 additional Focus on hit";
            skillmana.textContent = "9 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("crush"):
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses", true, "body") + " to hit. On hit, they take 2d12 + " + tohitf("senses", false, "body") + " damage. If they, Weak or Dazed, also Cripple.";
            skilldesc.querySelector(".tooltiptext").textContent = "Crushing palm \n Cost: 4 Mana, 2 AP \n Range: 1 square \n A devastating palm strike aimed to break defenceless foes. The target takes 2d10 + Body/Senses damage. If they are Frail, Weak or Dazed, they become Crippled until the end of their next turn.";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("crush+"):
            skillsel.options[skillsel.options.length] = new Option('Crushing palm+ (I)', 'crush+')
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses", true, "body") + " to hit. On hit, they take 3d12 + " + tohitf("senses", false, "body") + " damage. If they are debuffed, stun, otherwise, cripple.";
            skilldesc.querySelector(".tooltiptext").textContent = "Crushing Blow+ \n Cost: 15 Mana, 2 AP \n Range: 1 square \n \n A devastating palm strike aimed to break defenceless foes. The target takes 3d10 + Body/Senses damage. If they have a negative condition (DOTs not included), they become stunned until the end of their next turn, otherwise they become crippled for the same amount of time.";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("secondwind"):
            skilldesc.childNodes[0].textContent = "Cleanse 1 debuff and restore "+ (parseInt(focus.value)>0?parseInt(body+parseInt(focus.value)):body) +" hit points, or "+ (parseInt(focus.value)>0?parseInt((body+parseInt(focus.value))*2):parseInt(body*2)) +" if you are below half hit points ("+ (parseInt(hpmaxtxt.textContent)+1)/2 +")";
            skilldesc.querySelector(".tooltiptext").textContent = "Second Wind \n Cost: 2 Mana, 1 AP \n Range: Self \n Choose 1 debuff on you, and remove all stacks of it \n Restore Body + Focus hit points. If you have half your maximum hit points or less, you restore twice that amount.";
            skillmana.textContent = "2 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "2 uses"
        break;
        case("secondwind+"):
            skillsel.options[skillsel.options.length] = new Option('Second Wind+ (I)', 'secondwind+')
            skilldesc.childNodes[0].textContent = "Cleanse 3 debuffs and restore "+ (parseInt(focus.value)>0?parseInt(body+2*parseInt(focus.value)):body) +" hit points, or "+ (parseInt(focus.value)>0?parseInt((body+2*parseInt(focus.value))*2):parseInt(body*2)) +" if you are below half hit points ("+ (parseInt(hpmaxtxt.textContent)+1)/2 +")";
            skilldesc.querySelector(".tooltiptext").textContent = "Second Wind \n Cost: 2 Mana, 1 AP \n Range: Self \n Choose up to 3 debuffs on you, and remove all stacks of each \n Restore Body + 2x Focus hit points. If you have half your maximum hit points or less, you restore twice that amount.";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "4 uses"
        break;
        case("bulletpunch"):
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses", true, "fortune") + " to hit. On a hit, deal 1d4 per square moved + " + tohitf("senses", false, "fortune") + " damage. Use focus for extra move, may daze 1d4";
            skilldesc.querySelector(".tooltiptext").textContent = "Bullet Punch \n Cost: 9 Mana, 1 AP \n Range: 1 Square \n Use your movement to move in a straight line, then immediately attack an enemy within range that is in front of you. \n You may expend any amount of focus to increase the distance you move with this skill. You keep the to hit bonus of focus until after this skill is used.";
            skillmana.textContent = "9 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("bulletpunch+"):
            skillsel.options[skillsel.options.length] = new Option('Bullets Punch+ (II)', 'bulletpunch+')
            skilldesc.childNodes[0].textContent = "3 attacks, +" + tohitf("senses", true, "fortune") + " to hit. On a hit, deal 1d6 per move + " + tohitf("senses", false, "fortune") + " damage. Use focus for extra move, may daze 1d4";
            skilldesc.querySelector(".tooltiptext").textContent = "Bullet Punch+ \n Cost: 15 Mana, 1 AP \n Range: 1 Square \n \n Use your movement to move in a straight line, then immediately attack enemies within range \n \n You may expend any amount of focus to increase the distance you move with this skill. You keep the to hit bonus of focus until after this skill is used. \n \n up to 3 times during this skill, you may stop and attack an enemy within range. On hit, deal 1d6 damage for each square moved during this skill, plus Senses/Fortune damage. \n \n If you have more movement, you may continue moving. Each time you attack an enemy, you may change your direction before continuing to move \n \n Additionally, any attack inflicts 1d4 dazed on hit \n \n You cannot target the same enemy more than once with this skill";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("counter"):
            skilldesc.childNodes[0].textContent = "You have +"+ body +" Evasion during the next attack that targets you. Next time youre attacked, attack back";
            skilldesc.querySelector(".tooltiptext").textContent = "Counter Strike \n Cost: 8 Mana, 1 AP \n Range: Self \n During the next attack that targets you, you gain a bonus to Evasion equal to your Body. Next time youre attacked, you may target the attacker with one free use of your basic attack";
            skillmana.textContent = "8 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("counter+"):
            skillsel.options[skillsel.options.length] = new Option('Counter+ (II)', 'counter+')
            skilldesc.childNodes[0].textContent = "You have +"+ body +" Evasion during the next 3 attacks that target you. Attack back x3";
            skilldesc.querySelector(".tooltiptext").textContent = "Counter Strike \n Cost: 20 Mana, 2 AP \n \n During the next 3 attacks that target you, you gain a bonus to Evasion equal to your Body. Next 3 times youre attacked, you may target the attacker with one free use of your basic attack";
            skillmana.textContent = "20 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("frenzy"):
            skilldesc.childNodes[0].textContent = "Gain +3 extra movement this turn. Your next skill has +"+ tohitf(0,false) +" to hit and reduces Focus on hit";
            skilldesc.querySelector(".tooltiptext").textContent = "Frenzy Rush \n Cost: 8 Mana, 1 AP \n Range: Self \n Gain +3 extra movement this turn. \n Your next skill this turn has a bonus to hit equal to your negative Focus damage bonus on all attacks, and it reduces your focus by 1 instead of increasing focus on hit";
            skillmana.textContent = "8 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("frenzy+"):
            skillsel.options[skillsel.options.length] = new Option('Frenzy rush+ (II)', 'frenzy+')
            skilldesc.childNodes[0].textContent = "Gain +5 extra movement this turn. Your next two skills have +"+ tohitf(0, false) +" to hit and reduces Focus on hit";
            skilldesc.querySelector(".tooltiptext").textContent = "Adrenaline Rush+ \n Cost: 15 Mana, 1 AP \n Range: Self \n \n Gain +5 extra movement this turn. \n \n Your next two skills this turn have a bonus to hit equal to your negative Focus damage bonus on all attacks, and they reduce your focus by 1 instead of increasing focus on hit";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("rage"):
            skilldesc.childNodes[0].textContent = "Reduce Focus to zero, gain resistance to martial damage. Is active as long as you take damage.";
            skilldesc.querySelector(".tooltiptext").textContent = "Rage Minotaur\n Cost: 4 Mana, 1 AP \n Range: Self \n You enter a deep rage. You gain resistance to slashing, piercing and bludgeoning damage. If your Focus is above 0 when you use this skill, its reduced to 0 \n At the start of your next turn, you may use 1 AP to keep this effect, if you choose not to, the rage ends. If you took any damage between turns, the cost is reduced to 0 AP. When extending the rage in this way, you don't reduce your Focus";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("rage+"):
            skillsel.options[skillsel.options.length] = new Option('Rage+ (I)', 'rage+')
            skilldesc.childNodes[0].textContent = "Reduce Focus to zero, gain resistance to martial damage. For every focus lost heal "+ parseInt((parseInt(lvl.value)+1)/2) + " hp.";
            skilldesc.querySelector(".tooltiptext").textContent = "Rage \n Cost: 12 Mana, 1 AP \n Range: Self \n You enter a deep rage. You enter a deep rage. You gain resistance to slashing, piercing and bludgeoning damage. If your Focus is above 0 when you use this skill, its reduced to 0 \n \n Whenever you lose Focus while this skill is active, restore Hit Points equal to your mastery for each point of Focus lost \n \n At the start of your next turn, you may use 1 AP to keep this effect, if you choose not to, the rage ends. If you took any damage between turns, the cost is reduced to 0 AP. When extending the rage in this way, you don't reduce your Focus";
            skillmana.textContent = "12 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("unleash"):
            skillsel.classList.remove("upgraded")
            skilldesc.childNodes[0].textContent = parseInt(1+tohitf(0,false)) + " attack(s) with +" + tohitf("body", true, "senses") + " to hit. On hit, deal 1d6+" + tohitf("body", false, "senses") + " damage. Make more attacks with less Focus	";
            skilldesc.querySelector(".tooltiptext").textContent = "Unleash Anger \n Cost: 5 Mana, 1 AP \n Range: 1 Square \n You unleash a brutal series of attacks against a target, fueled by your anger. \n You can make a number of attacks equal to your negative Focus damage bonus + 1. You can choose a new target within range for each attack.\n On hit, the target takes 1d6 + Body/Senses damage.";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("unleash+"):
            skillsel.options[skillsel.options.length] = new Option('Unleash anger+ (I)', 'unleash+')
            skilldesc.childNodes[0].textContent = parseInt(2+tohitf(0, false))  + " attack(s) with +" + tohitf("body", true, "senses") + " to hit. On hit, deal 1d6+" + tohitf("body", false, "senses") + " damage. Cripple target if hit multiple times";
            skilldesc.querySelector(".tooltiptext").textContent = "Unleash Anger \n Cost: 5 Mana, 1 AP \n Range: 1 Square \n You unleash a brutal series of attacks against a target, fueled by your anger. \n \n You can make a number of attacks equal to your negative Focus damage bonus + 2. You can choose a new target within range for each attack. \n \n On hit, the target takes 1d6 + Body/Senses damage. \n If a target is successfully hit 2 or more times by this skill, they become Crippled until the end of their next turn.";
            skillmana.textContent = "14 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("backstab"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses",true) + " to hit. On a hit, deal 4d4 +" + tohitf("senses",true) + " damage. If you have advantage, deal 1d12 additional damage"		
            skilldesc.querySelector(".tooltiptext").textContent = "Backstab \n Cost: 3 Mana, 2 AP \n Range: 1 square \n \n You strike your opponent when they are at their weakest. On a hit, you deal 4d4 + Senses damage. If you have advantage on the attack against the target, you deal an additional 1d12 damage";
            skillmana.textContent = "3 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("backstab+"):
            skillsel.options[skillsel.options.length] = new Option('Backstab+ (I)', 'backstab+')
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses",true) + " to hit. On a hit, deal 6d4 +" + tohitf("senses",true) + " damage. If advantage, deal 1d12 additional damage and 1d12 weak"		
            skilldesc.querySelector(".tooltiptext").textContent = "Backstab \n Cost: 3 Mana, 2 AP \n Range: 1 square \n \n You strike your opponent when they are at their weakest. On a hit, you deal 4d4 + Senses damage. If you have advantage on the attack against the target, you deal an additional 1d12 damage and apply 1d12 Weak";
            skillmana.textContent = "9 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("bladeflurry"):
            //skillsel.options[skillsel.options.length] = new Option('Blade Flurry (I)', 'bladeflurry')
            skilldesc.childNodes[0].textContent = "Two attacks with +" + tohitf("senses", true, "fortune") +" to hit. On hit, deal 2d6 +" + tohitf("senses", false, "fortune") +" damage. On a crit, use a weapon property for free"
            skilldesc.querySelector(".tooltiptext").textContent = "Blade Flurry \n Cost: 5 Mana, 2 AP \n \n Attack twice with your weapon, dealing 2d6 + Fortune/Senses damage on each hit. If one of the attacks crit, use one of your weapon properties for free"
            skillmana.textContent = "5 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("bladeflurry+"):
            skillsel.options[skillsel.options.length] = new Option('Blade Flurry+ (I)', 'bladeflurry+')
            skilldesc.childNodes[0].textContent = "Three attacks with +" + tohitf("senses", true, "fortune") +" to hit. On hit, deal 2d8 +" + tohitf("senses", false, "fortune") +" damage. On a crit, use a weapon property for free"
            skilldesc.querySelector(".tooltiptext").textContent = "Blade Flurry \n Cost: 5 Mana, 2 AP \n \n Attack three times with your weapon, dealing 2d8 + Fortune/Senses damage on each hit. For each of the attacks that crit, use one of your weapon properties for free"
            skillmana.textContent = "12 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("preparation"):
            //skillsel.options[skillsel.options.length] = new Option('Preparation (I)', 'preparation')
            skilldesc.childNodes[0].textContent = "Advantage your first attack next turn and 2d4+" + mind +" Mana. This Mana can exceed your maximum"
            skilldesc.querySelector(".tooltiptext").textContent = "Preparation \n Cost: 4 Mana, 1 AP \n \n You prepare to go all out. At the start of your next turn, gain 2d4 + Mind additional mana right after your mana regen. This mana can exceed your maximum mana. \n \n At the end of your turn, all mana above your maximum is removed. Additionally, your first attack next turn has advantage"
            skillmana.textContent = "4 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("preparation+"):
            skillsel.options[skillsel.options.length] = new Option('Preparation+ (I)', 'preparation+')
            skilldesc.childNodes[0].textContent = "Advantage your first attack next turn, gain +1 AP and 2d8+" + mind +" Mana. You cant use this skill next turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Preparation+ \n Cost: 15 Mana, 1 AP \n \n You prepare to go all out. At the start of your next turn, gain 2d8 + Mind additional mana right after your mana regen. This mana can exceed your maximum mana. \n \n At the end of your turn, all mana above your maximum is removed. Additionally, your first attack next turn has advantage and you gain +1 AP"
            skillmana.textContent = "15 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("feintingstrike"):
            //skillsel.options[skillsel.options.length] = new Option('Feinting Strike (II)', 'feintingstrike')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("senses",true) +" to hit with advantage. On a hit, deal 3d10 + " + tohitf("senses",false) + " damage. Target has disadv on their next roll"
            skilldesc.querySelector(".tooltiptext").textContent = "Feinting strike \n Cost: 7 Mana, 1 AP \n \n You mislead your opponent before striking. With advantage, you make an attack with your weapon. On a hit, you deal 3d10 + Senses damage. Regardless of if you hit or miss, the enemy has disadvantage on their next roll"
            skillmana.textContent = "7 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("feintingstrike+"):
            skillsel.options[skillsel.options.length] = new Option('Feinting Strike+ (II)', 'feintingstrike+')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("senses",true) +" to hit with 2x advantage. On a hit, deal 4d10 + " + tohitf("senses",false) + " damage. Target has disadv on their next roll"
            skilldesc.querySelector(".tooltiptext").textContent = "Feinting strike \n Cost: 16 Mana, 1 AP \n \n You mislead your opponent before striking. With double advantage, you make an attack with your weapon. On a hit, you deal 3d10 + Senses damage. Regardless of if you hit or miss, the enemy has disadvantage on their next roll"
            skillmana.textContent = "16 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("envenom"):
            //skillsel.options[skillsel.options.length] = new Option('Envenom (II)', 'envenom')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("senses",true,"mind") +" to hit. On hit, deal 3d8 + "+tohitf("senses",false,"mind")+" damage, inflict 1d6 poison, then advance targets poison 1 turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Envenom \n Cost: 9 Mana, 2 AP \n Range: 1 square \n \n Attack with a deadly poisoned blade, dealing 3d8 + Mind/Senses damage on hit, inflict 1d6 poison, and then advance the targets poison by 1 turn"
            skillmana.textContent = "9 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("envenom+"):
            skillsel.options[skillsel.options.length] = new Option('Envenom+ (II)', 'envenom+')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("senses",true,"mind") +" to hit. On hit, deal 5d8 + "+tohitf("senses",false,"mind")+" damage, double poison, then advance targets poison 1 turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Envenom \n Cost: 20 Mana, 2 AP \n Range: 1 square \n \n Attack with a deadly poisoned blade, dealing 5d8 + Mind/Senses damage on hit, doubling the targets current poison, and then advance the targets poison by 1 turn"
            skillmana.textContent = "20 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("treachery"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("fortune",true,"mind") +" to hit. On hit, deal 3d12 + "+ tohitf("fortune",false,"mind") +" damage and steal buffs until the start of your next turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Envenom \n Cost: 9 Mana, 2 AP \n Range: 1 square \n \n With a swift strike, you attempt to steal the targets advantages in combat for yourself \n \n On a hit, deal 3d12 + Fortune/Mind and remove all magical shield, advantage or other temporary boons the target has. Until the start of your next turn, you gain all boons removed from the enemy. \n \n You may choose one resistance the enemy has to steal. You gain the resistance until the start of your next turn, when the enemy regains the resistance."
            skillmana.textContent = "10 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case("treachery+"):
            skillsel.options[skillsel.options.length] = new Option('Treachery+ (II)', 'treachery+')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("fortune",true,"mind") +" to hit. On hit, deal 4d12 + "+ tohitf("fortune",false,"mind") +" damage and steal buffs until the end of combat"
            skilldesc.querySelector(".tooltiptext").textContent = "Envenom \n Cost: 9 Mana, 2 AP \n Range: 1 square \n \n With a swift strike, you attempt to steal the targets advantages in combat for yourself \n \n On a hit, deal 4d12 + Fortune/Mind and remove all magical shield, advantage or other temporary boons the target has. You gain all boons removed from the enemy until the end of combat, where the benefits are removed. If the boon would be removed after using it, it is removed when you use it. \n \n You may choose one resistance the enemy has to steal. You gain the resistance until the start of your next turn, when the enemy regains the resistance."
            skillmana.textContent = "19 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";        
        break;
        case('poisonblades'):
            skilldesc.childNodes[0].textContent = "+"+ tohitf("fortune",true,"mind") +" to hit. On hit, deal 4d12 + "+ tohitf("fortune",false,"mind") +" damage and steal buffs until the end of combat"
        break;
        case("whirlwindslash"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "Strike all foes surrounding you with +"+ tohitf("body",true) +" to hit. On a hit, deal 2d6 + "+ tohitf("body",false) +" damage"
            skilldesc.querySelector(".tooltiptext").textContent = "Whirlwind Slash \n Cost: 7 Mana, 1 AP \n Range: 8 squares surrounding you \n \n Strike all foes surrounding you with your weapon. On a hit, deal 2d6 + body damage. Damage type depends on your weapon"
            skillmana.textContent = "7 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";      
        break;
        case("whirlwindslash+"):
            skillsel.options[skillsel.options.length] = new Option('Whirlwind Slash+ (I)', 'whirlwindslash+')
            skilldesc.childNodes[0].textContent = "Strike all foes surrounding you twice with +"+ tohitf("body",true) +" to hit. On a hit, deal 2d6 + "+ tohitf("body",false) +" damage"
            skilldesc.querySelector(".tooltiptext").textContent = "Whirlwind Slash \n Cost: 12 Mana, 2 AP \n Range: 8 squares surrounding you \n \n Strike all foes surrounding you twice with your weapon. On each hit, deal 2d6 + body damage. Damage type depends on your weapon"
            skillmana.textContent = "12 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("cripplingblow"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("body",true) +" to hit. On a hit, deal 3d6 + "+ tohitf("body",false) +" damage and inflict crippled until the start of your next turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Crippling Blow \n Cost: 5 Mana, 2 AP \n Range: 1 square \n \n Strike an enemy with your weapon, dealing 3d6 + body damage, damage type depending on your weapon. On a hit, inflict cripple on the target until the start of your next turn."
            skillmana.textContent = "5 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("cripplingblow+"):
            skillsel.options[skillsel.options.length] = new Option('Crippling Blow+ (I)', 'cripplingblow+')
            skilldesc.childNodes[0].textContent = "+"+ tohitf("body",true) +" to hit. On a hit, deal 3d8 + "+ tohitf("body",false) +" damage, inflict crippled and exposed until the start of your next turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Crippling Blow \n Cost: 14 Mana, 2 AP \n Range: 1 square \n \n Strike an enemy with your weapon, dealing 3d8 + body damage, damage type depending on your weapon. On a hit, inflict cripple and exposed on the target until the start of your next turn."
            skillmana.textContent = "14 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";        
        break;
        case("armorup"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "gain 2 fortitude and regain 1 armor slot"
            skilldesc.querySelector(".tooltiptext").textContent = "Armor Up \nCost: 2 Mana, 1 AP \n Range: self \n \n gain fortitude equal to half your armor score, rounded up and regain 1 lost armor slot."
            skillmana.textContent = "2 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "3";        
        break;
        case("armorup+"):
            skillsel.options[skillsel.options.length] = new Option('Armor Up+ (I)', 'armorup+')
            skilldesc.childNodes[0].textContent = "gain 2 fortitude and regain 1 armor slot"
            skilldesc.querySelector(".tooltiptext").textContent = "Armor Up \nCost: 2 Mana, 1 AP \n Range: self \n \n gain fortitude equal to half your armor score, rounded up and regain 1 lost armor slot."
            skillmana.textContent = "2 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "3";        
        break;
        case("befuddlingblast"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "+" + tohitf("mind", true, "fortune") + " to hit. Deal 4d4 damage and they must make a DC " + 8 + tohitf("mind", true, "fortune") + " Mind saving throw or become confused."
            skilldesc.querySelector(".tooltiptext").textContent = "Befuddling Blast \n Cost: 6 Mana, 1 AP \n Range: 10 squares \n \n You hurl a ball of chaotic energy towards an enemy, targeting their mind. On a hit, you deal 4d4 arcane damage and the target must succeed a Mind saving throw or become confused until the end of their next turn."
            skillmana.textContent = "6 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("befuddlingblast+"):
            skillsel.options[skillsel.options.length] = new Option('Befuddling blast+ (I)', 'befuddlingblast+')
            skilldesc.childNodes[0].textContent = "+" + tohitf("fortune", true, "mind") + " to hit. On a hit, deal 4d8 damage and confuse the target until the end of their next turn."
            skilldesc.querySelector(".tooltiptext").textContent = "Befuddling Blast \n Cost: 12 Mana, 2 AP \n Range: 10 squares \n \n You hurl a ball of chaotic energy towards an enemy, targeting their mind. On a hit, you deal 4d8 arcane damage and they become confused until the end of their next turn."
            skillmana.textContent = "12 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("cursefrailty"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("mind", true)) + " Mind saving throw or take 1d6 damage and 1 frail the first time an ally damages them."
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Frailty \n Cost: 7 Mana, 3 AP \n Range: 6 squares \n \n You curse a target with weakness. They must succeed on a Mind saving throw or become cursed with frailty.\n \n While cursed, the target takes an extra 1d6 necrotic damage and gains 1 frail the first time you and each ally damages them each turn. "
            skillmana.textContent = "7 Mana";
            skillap.textContent = "3 AP";
            skilluses.textContent = "";
        break;
        case("cursefrailty+"):
            skillsel.options[skillsel.options.length] = new Option('Curse of frailty+ (I)', 'cursefrailty+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("mind", true)) + " Mind saving throw or take 1d8 damage and 1 frail the first time an ally damages them."
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Frailty+ \n Cost: 16 Mana, 2 AP \n Range: 6 squares \n \n You curse a target with weakness. They must succeed on a Mind saving throw or become cursed with frailty.\n \n While cursed, the target takes an extra 1d8 necrotic damage and gains 1 frail the first time you and each ally damages them each turn. "
            skillmana.textContent = "16 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("beguile"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("fortune", true)) + " Mind saving throw or charm. Use again to control the target, ending the charm"
            skilldesc.querySelector(".tooltiptext").textContent = "Beguile \n Cost: 5 Mana, 1 AP \n Range: 4 squares \n \n You use dark chants that turn into whispers of lies in the ear of the target. The target must make a Mind saving throw or become charmed for 1 hour or until you use this skill again. \n \n Instead of charming a target when you use this skill, you may control a creature that is charmed by your or a willing ally. The charmed creature may move up to their movement or and make a basic attack, or another basic action. After you use this skill in this way, the charmed condition is removed from the target"
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("beguile+"):
            skillsel.options[skillsel.options.length] = new Option('Beguile+ (I)', 'beguile+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("fortune", true)) +" Mind saving throw or charm. Use again to make the target attack with +" + tohitf("",true) + " to hit and damage"
            skilldesc.querySelector(".tooltiptext").textContent = "Beguile+ \n Cost: 13 Mana, 1 AP \n Range: 10 squares \n \n You use dark chants that turn into whispers of lies in the ear of the target. The target must make a Mind saving throw or become charmed for 1 hour or until you use this skill again. \n \n Instead of charming a target when you use this skill, you may control a creature that is already charmed by you or a willing ally. The charmed creature may move up to their movement and make a basic attack with an extra bonus to hit and damage equal to your Fortune, or another basic action. After you use this skill in this way, the charmed condition is removed from the target"
            skillmana.textContent = "13 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("hemokinesis"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("body", true, "mind")) + " Body saving throw. On fail, take 3d6 force damage and advance bleeding 1 turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Hemokinesis \n Cost: 6 Mana, 2 AP \n Range: 3 squares \n \n You manipulate the blood of a creature within range, wrenching it with invisible force. The target must make a Body saving throw, taking 3d6 force damage on a failure, or half on a success. \n \n On a failed save, also advance the targets bleeding one turn"
            skillmana.textContent = "6 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("hemokinesis+"):
            skillsel.options[skillsel.options.length] = new Option('Hemokinesis+ (I)', 'hemokineses+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("body", true, "mind")) + " Body saving throw. On fail, take 5d6 force damage and advance bleeding 1 turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Hemokinesis \n Cost: 12 Mana, 1 AP \n Range: 6 squares \n \n You manipulate the blood of a creature within range, wrenching it with invisible force. The target must make a Body saving throw, taking 5d6 force damage on a failure, or half on a success. \n \n On a failed save, also advance the targets bleeding one turn"
            skillmana.textContent = "12 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("cursehemo"):
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("mind", true)) + " Body saving throw or gain 1d6+1 bleed at the start of their turn, deal damage on success		"
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Hemorrhaging \n Cost: 5 Mana, 2 AP \n Range: 6 squares \n \n You choose one target within range worsen their bleeding from within. \n \n The target must make a body saving throw or gain 1d6 + Mastery turns of bleed now and at the start of each of their turns. \n \n At the end of each of the target's turns, they can remake the saving throw, ending the effect on a success. When they succeed on the saving throw, they take necrotic damage equal to their turns of bleed remaining."
            skillmana.textContent = "5 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("cursehemo+"):
            skillsel.options[skillsel.options.length] = new Option('Curse of Hemorrhaging+ (I)', 'cursehemo+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8 + tohitf("mind", true)) + "Body saving throw or inflict crippled and 1d10+" + tohitf("", true) + " bleed, deal damage on success"
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Hemorrhaging+ \n Cost: 15 Mana, 2 AP \n Range: 6 squares \n \n You choose one target within range worsen their bleeding from within. \n \n The target must make a body saving throw or become crippled and gain 1d10 + Mastery turns of bleed now and at the start of each of their turns. \n \n At the end of each of the target's turns, they can remake the saving throw, ending the effect on a success. When they succeed on the saving throw, they take necrotic damage equal to their turns of bleed remaining."
            skillmana.textContent = "15 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("naturegrasp"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("senses",true, "body")) + " Body saving throw or target becomes restrained. Exposes in Autumn. Change to Winter"
            skilldesc.querySelector(".tooltiptext").textContent = "Nature's Grasp \n Cost: 5 Mana, 1 AP \n Range: 4 squares \n \n Grasping roots grow underneath a creature within range. They must make a Body saving throw, becoming restrained until the end of their next turn on a failure. \n \n If your Perennial Might is in autumn, the target also becomes exposed until the end of their next turn on a failed save";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("naturegrasp+"):
            skillsel.options[skillsel.options.length] = new Option('Nature\'s Grasp+ (I)', 'naturegrasp+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("body",true, "senses")) + " Body save or restrain, 1d4 Volatile and Weak. Exposes in Autumn. Change to Winter"
            skilldesc.querySelector(".tooltiptext").textContent = "Nature's Grasp+ \n Cost: 11 Mana, 1 AP \n Range: 8 squares \n \n Grasping roots grow underneath a creature within range. They must make a Body saving throw, becoming restrained until the end of their next turn on a failure and gain 1d4 times Mastery Volatile and Weak and move the target up to 6 squares. \n \n If your Perennial Might is in autumn, the target also becomes exposed until the end of their next turn on a failed save \n \n After this skill is used, change your Perennial Might to Winter";
            skillmana.textContent = "11 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("bloom"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Target restores 2d8 + " + mind + " hit points. Spring heals 1d8 in a 1 square radius. Change to Summer"
            skilldesc.querySelector(".tooltiptext").textContent = "Bloom \n Cost: 7 Mana, 2 AP \n Range: 8 squares \n \nNature blooms around a target within range, restoring 2d8 + Mind hit points. \n \nIf your Perennial Might is in Spring, creatures of your choice within 1 square of the target also restore 1d8 Hit Points \n \n After this skill is used, change your Perennial Might to Spring";
            skillmana.textContent = "7 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "3";
        break;
        case("bloom+"):
            skillsel.options[skillsel.options.length] = new Option('Bloom+ (I)', 'bloom+')
            skilldesc.childNodes[0].textContent = "3d8 + " + mind +" HP, overflowing into shield. Spring heals 2d8 in a 1 square radius. Change to Summer"
            skilldesc.querySelector(".tooltiptext").textContent = "Bloom+ \nCost: 15 Mana, 2 AP \nRange: 8 squares \n \nNature blooms around a target within range, restoring 3d8 + Mind hit points. All healing from this skill above a targets maximum health becomes a magical shield that lasts until the end of combat \n \nIf your Perennial Might is in Spring, creatures of your choice within 1 square of the target also restore 1d12 Hit Points \n \n After this skill is used, change your Perennial Might to Spring";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
            break;
        case("wildgrowth"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Roll 1d4 to gain a random Perennial Might season, then activate a unique effect based on season"
            skilldesc.querySelector(".tooltiptext").textContent = "Wild Growth \nCost: 5 Mana, 1 AP \nRange: 8 squares \n \nRoll 1d4 to determine a new Perennial Might season and change to that season. Based on the new season, activate a unique effect: \n \n1, Summer: Summon a small ball of solar light in an unoccupied space within range. Until the start of your next turn, creatures starting their turn inside or who move within a 1 square radius of the ball take 2d4 burning DOT and Frail.\n \n2, Autumn: All creatures within a 3x3 square in front of you are pushed back 3 squares. If they collide with something, they fall prone \n \n3, Winter: Grant yourself or an ally a 1d10 Magical shield that reflects damage back to the attacker (up to the max health of the shield) if the attack is within 1 square. The shield lasts until the end of combat \n \n 4, Spring: An ally within range gains 2d6 Potential: The next time this ally restores Hit Points, they restore additional Hit Points equal to their Potential, they then loose all stacks of Potential.";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("wildgrowth+"):
            skillsel.options[skillsel.options.length] = new Option('Wild Growth+ (I)', 'wildgrowth+')
            skilldesc.childNodes[0].textContent = "Roll 1d4 to gain a random Perennial Might season, then activate a unique effect based on season"
            skilldesc.querySelector(".tooltiptext").textContent = "Wild Growth \nCost: 10 Mana, 1 AP \nRange: 8 squares \n \nRoll 1d4 to determine a new Perennial Might season and change to that season. Based on the new season, activate a unique effect: \n \n1, Summer: Summon a small ball of solar light in an unoccupied space within range. Until the start of your next turn, creatures starting their turn inside or who move within a 1 square radius of the ball take 2d6 burning DOT and Frail. \n \n2, Autumn: All creatures within a 3x3 square in front of you are pushed back 5 squares and fall prone. If they collide with something, they also gain 1 dazed \n \n3, Winter: Grant yourself or an ally a 2d8 Magical shield that reflects damage back to the attacker (up to the max health of the shield) if the attack is within 1 square. The shield lasts until the end of combat. Creatures of your choice within 3 squares of the target have half Movement until the end of their next turn \n \n4, Spring: Remove all stacks of one debuff on an ally, they then gain 3d6 Potential: The next time this ally restores Hit Points, they restore additional Hit Points equal to their Potential, they then loose all stacks of Potential.";
            skillmana.textContent = "10 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("wildshape"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Change into a beastial form, changing your stats and season, and gaining new Skills and Passives"
            skilldesc.querySelector(".tooltiptext").textContent = "Wildshape \nCost: 6 Mana, 2 AP \nRange: Self \n \nChoose a form from the list of Wildshape forms available to you (Wing, Fang, Titan and Swarm forms), and transform into it, changing your stats and gaining unique features and skills based on the chosen form. \n \nThe form you choose also changes your Perennial Might season: \n \nWing = Summer, Fang = Autumn, Titan = Winter and Swarm = Spring \n \nYou cannot use most skills while you have changed form, unless stated otherwise by the individual skills. You still benefit from all your passives while in a changed form \n \nYou're able to use Wildshape while in a changed form \n \n You can stay in this form until the end of combat, you drop to 0 hit points, or until you choose to change back into your true form during your turn for no AP cost. \n \n While most of your stats change while in a Wildshape form, not all your stats do. Only stats on the Wildshape stat block override your old stats, your maximum Hit Points, maximum Mana and other stats not on the Wildshape stat block stay the same.";
            skillmana.textContent = "6 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("wildshape+"):
            skillsel.options[skillsel.options.length] = new Option('Wild Shape (I)', 'wildshape+')
            skilldesc.childNodes[0].textContent = "Change into a beastial form, changing your stats and season, and gaining new Skills and Passives"
            skilldesc.querySelector(".tooltiptext").textContent = "Wildshape \nCost: 18 Mana, 2 AP \nRange: Self \n \nChoose a form from the list of Wildshape forms available to you (Wing+, Fang+, Titan+ and Swarm+ forms), and transform into it, changing your stats and gaining unique features and skills based on the chosen form. \n \nThe form you choose also changes your Perennial Might season: \n \nWing+ = Summer, Fang+ = Autumn, Titan+ = Winter and Swarm+ = Spring \n \nYou cannot use most skills while you have changed form, unless stated otherwise by the individual skills. You still benefit from all your passives while in a changed form \n \nYou're able to use Wildshape while in a changed form \n \nYou can stay in this form until the end of combat, you drop to 0 hit points, or until you choose to change back into your true form during your turn for no AP cost. \n \nWhile most of your stats change while in a Wildshape form, not all your stats do. Only stats on the Wildshape stat block override your old stats, your maximum Hit Points, maximum Mana and other stats not on the Wildshape stat block stay the same.";
            skillmana.textContent = "18 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("beastrend"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "+" + tohitf("body", true, "senses") + " to hit. On hit, deal 2d12+" + tohitf("body", false, "senses") + " damage. If youre in a beastial form, choose a bonus effect"
            skilldesc.querySelector(".tooltiptext").textContent = "Beastial Rend \nCost: 6 Mana, 2 AP \nRange: 1 Square \n \nYou can use this skill while in a changed form \n \nYou make a wild attack against a creature within range. On hit, you deal 2d12 + Body/Senses bludgeoning, piercing or slashing damage (your choice). If you're in a changed form from the Wildshape skill or other skills, you may choose one bonus effect: \n \nReduce AP cost of this skill by 1 \n \nChoose another target within range, on hit (using the same attack roll) they take 1d12 + Body/Senses damage \n \nInflict Frail equal to half the damage dealt \n \nChange your Perennial Might season to any season of your choice";
            skillmana.textContent = "7 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("beastrend+"):
            skillsel.options[skillsel.options.length] = new Option('Beastial Rend+ (I)', 'beastrend+')
            skilldesc.childNodes[0].textContent = "+" + tohitf("body", true, "senses") + " to hit. On hit, deal 2d12+" + tohitf("body", false, "senses") + " damage. If youre in a beastial form, choose a bonus effect"
            skilldesc.querySelector(".tooltiptext").textContent = "Beastial Rend+ \nCost: 16 Mana, 1 AP \nRange: 1 Square \n \nYou can use this skill while in a changed form \n \nYou make a wild attack against a creature within range. On hit, you deal 2d12 + Body/Senses bludgeoning, piercing or slashing damage (your choice). If you're in a changed form from the Wildshape skill or other skills, you may choose one bonus effect: \n \nChoose two additional targets within range, on hit (using the same attack roll) they take 1d12 + Body/Senses damage \n \nInflict Frail and equal to the damage dealt \n \nChange your Perennial Might season to any season of your choice";
            skillmana.textContent = "16 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("telekinesis"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "mind")) + " Body saving throw or deal 2d8 damage, restrain and move target."
            skilldesc.querySelector(".tooltiptext").textContent = "Telekinesis \nCost: 4 Mana, 1 AP \nRange: 8 squares \n \nYou seize a creature with invisible force \n \nThe target must make a body saving throw. On a failure, the target takes 2d8 Bludgeoning damage, becomes restrained until the end of their next turn. On a success, the target takes half damage, and you may move the target 2 squares to an unoccupied space \n \nOnce on your turn, you may move the target up to 4 squares to an unoccupied space";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("telekinesis+"):
            skillsel.options[skillsel.options.length] = new Option('Telekinesis+ (I)', 'telekinesis+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "mind")) + " Body saving throw or deal 2d12 damage, restrain and move target. Reroll save each turn"
            skilldesc.querySelector(".tooltiptext").textContent = "Telekinesis+ \nCost: 15 Mana, 1 AP\nRange: 8 squares\n \nYou seize a creature with invisible force \n \nThe target must make a body saving throw. On a failure, the target takes 2d12 Bludgeoning damage and becomes restrained. On a success, the target takes half damage, and you may move the target 2 squares \n \nAt the end of each of the creatures turns, they may remake the saving throw, ending the effect on a success. \n \nOnce on each of your turns, you may move the target up to 4 squares to an unoccupied space, and for 1 AP, you may force the target to make another Body saving throw, or take another 2d12 damage on a failure, or half on a success";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("parastatic"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "mind")) + " Fortune saving throw in a 3 square cone or deal 5d4 damage and inflict 1d4 dazed"
            skilldesc.querySelector(".tooltiptext").textContent = "Paralyzing Static\nCost: 6 Mana, 2 AP\nRange: 3 square cone\n \nPsychic lightning springs from your fingertips to zap the nervous systems of your enemies. \n \nAll creatures in a 3 square cone originating from you must make a Fortune saving throw or take 5d4 lightning damage and 1d4 dazed on a failure, or half damage only on a success";
            skillmana.textContent = "6 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("parastatic+"):
            skillsel.options[skillsel.options.length] = new Option('Paralying Static+ (I)', 'parastatic+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "mind")) + " Fortune saving throw in a 3 square cone or deal 8d4 damage and stun, daze on success"
            skilldesc.querySelector(".tooltiptext").textContent = "Paralyzing Static+ \nCost: 18 Mana, 2 AP \nRange: 3 square cone \n \nPsychic lightning springs from your fingertips to zap the nervous systems of your enemies. \n \nAll creatures in a 3 square cone originating from you must make a Fortune saving throw or take 8d4 lightning damage and become stunned until the end of their next turn on a failure, or half damage only on a success";
            skillmana.textContent = "18 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("psiparoxysm"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Gain +1 Clarity, afterwards an effect occurs depending on your new total Clarity"
            skilldesc.querySelector(".tooltiptext").textContent = "Psionic Paroxysm \nCost: 7 Mana, 2 AP \nRange: self \n \nYou force your mind into a violent state of psychic overactivity.\n \nYou gain +1 Clarity. Depending on your new total clarity, a unique effect occurs: \n \n1 Clarity, Stall: Inflict 1 dazed to all creatures within 1 square of yourself \n \n2 Clarity, Rupture: Inflict 2 dazed and deal 2d4 Arcane damage to all creatures within 1 square of yourself \n \n3 Clarity, Detonation: Inflict 3 dazed and deal 2d6 Arcane damage to all creatures within 1 square of yourself. All targets then gain Weak, Frail and Volatile equal to half the damage dealt \n \nIf you were already at 3 Clarity when using this skill, you must spend 3 Clarity (applying the 3 Clarity bonus to the skill from your level 1 Class Feature). Then apply the effects of the \"3 Clarity, Detonation\" effect with double the range";
            skillmana.textContent = "7 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("psiparoxysm+"):
            skillsel.options[skillsel.options.length] = new Option('Psionic Paroxysm+ (I)', 'psiparoxysm+')
            skilldesc.childNodes[0].textContent = "Gain +1 Clarity, afterwards an effect occurs depending on your new total Clarity"
            skilldesc.querySelector(".tooltiptext").textContent = "Psionic Paroxysm+ \nCost: 17 Mana, 1 AP \n Range: self \n \nYou force your mind into a violent state of psychic overactivity. \n \nYou gain +1 Clarity. Depending on your new total clarity, a unique effect occurs: \n \n1 Clarity, Stall: Inflict 2 dazed to all creatures of your choice within 2 squares of yourself \n \n2 Clarity, Rupture: Inflict 3 dazed and deal 2d6 Arcane damage to all creatures of your choice within 2 squares of yourself \n \n3 Clarity, Detonation: Inflict 4 dazed and deal 2d8 Arcane damage to all creatures of your choice within 2 squares of yourself. All targets then gain Weak, Frail and Volatile equal to half the damage dealt\n \nIf you were already at 3 Clarity when using this skill, you must spend 3 Clarity (applying the 3 Clarity bonus to the skill from your level 1 Class Feature). Then apply the effects of the \"3 Clarity, Detonation\" effect with double the range";
            skillmana.textContent = "17 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("vengefulfate"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Summon an echo that repeats the action an enemy has used, lasts 3 turns"
            skilldesc.querySelector(".tooltiptext").textContent = "Vengeful Fate \nCost: 7 Mana, 2 AP \n Range: 8 squares \n \nA manifestation of destiny emerges to punish wrongdoing. \n \nAs a reaction to you seeing the target using an attack or skill, or during your own turn, summon a fate echo adjacent to the target. The echo remembers the last action the target used when the echo was created \n \nthe echo acts right after you end your turn. \n \nDuring the echos turn, it can move up to 6 squares, and repeat the action the echo remembered when it was created. You choose the target each time. After the echo has acted 3 times, it disappears \n \nthe echo is immune to all damage and conditions, and uses the same to hit bonus or save DC as the original action that was used to make the echo";
            skillmana.textContent = "7 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("vengefulfate+"):
            skillsel.options[skillsel.options.length] = new Option('Vengeful Fate+ (I)', 'vengefulfate+')
            skilldesc.childNodes[0].textContent = "Summon an echo that repeats the last action an enemy has used, Advantage against the target"
            skilldesc.querySelector(".tooltiptext").textContent = "Vengeful Fate \nCost: 15 Mana, 2 AP \nRange: 8 squares \n \nA manifestation of destiny emerges to punish wrongdoing. \n \nAs a reaction to you seeing the target using an attack or skill, or during your own turn, summon a fate echo adjacent to the target. The echo remembers the last action the target used when the echo was created \n \nthe echo acts right after you end your turn. \n \nDuring the echos turn, it can move up to 12 squares, and repeat the action the echo remembered when it was created. You choose the target each time. After the echo has acted 5 times, it disappears \n \nIf the echo targets the original creature that was used to make the echo, it has advantage on all attack rolls against the target, and the target has disadvantage on their saving throws against the echo \n \nthe echo is immune to all damage and conditions, and uses the same to hit bonus or save DC as the target that was used to make the echo";
            skillmana.textContent = "6 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("cutfate"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "fortune")) + " Fortune saving throw or take 3d6 damage, and choose what strand of fate to cut"
            skilldesc.querySelector(".tooltiptext").textContent = "Cut Through Fate \nCost: 6 Mana, 1 AP \nRange: 4 squares \n \nYou conjure a passage to a targets strands of fate, and attempt to cut them to change the course of their destiny \n \nThe target must make a Fortune saving throw or take 3d6 psychic damage, or half on a success. On a failure, also choose one of three threads to cut: \n \nThread of Opportunity: The target cannot have advantage on any rolls and they cant be the target of any ally skills \n \nThread of Momentum: The targets movement is halved, and their first action each turn costs 1 additional AP \n \n Thread of Triumph: The target gains 2d6 Frail and Volatile \n \nEach thread can only be chosen once for each creature, and the first time all three threads on a creature are cut, they become stunned until the end of their next turn and you gain +1 Clarity";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("cutfate+"):
            skillsel.options[skillsel.options.length] = new Option('Cut Through Fate+ (I)', 'cutfate+')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true, "fortune")) + " Fortune saving throw or take 3d8 damage and cut a strand of fate. Can be repeated"
            skilldesc.querySelector(".tooltiptext").textContent = "Cut Through Fate+ \nCost: 13 Mana, 1 AP \nRange: 4 squares \n \n You conjure a passage to a targets strands of fate, and attempt to cut them to change the course of their destiny \n \nThe target must make a Fortune saving throw or take 3d8 psychic damage, or half on a success. On a failure, also choose one of three threads to cut: \n \nThread of Opportunity: The target cannot have advantage on any rolls and they cant be the target of any ally skills. Their first d20 roll each turn has disadvantage \n \nThread of Momentum: The targets movement is reduced to 1, and their first skill each turn costs 1 additional AP \n \nThread of Triumph: The target gains 2d6 Frail, Volatile and Weak \n \nYou can use this skill multiple times in one turn. Each thread can only be chosen once for each creature, and the first time all three threads on a creature are cut, they become stunned until the end of their next turn and you gain +1 Clarity";
            skillmana.textContent = "11 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("elixirvit"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Restore 3d4 Hit points, overflowing into shield, to an ally. +1d4 to attacks and saves while shielded"
            skilldesc.querySelector(".tooltiptext").textContent = "Elixir of Vitality \nCost: 4 Mana, 1 AP \n Range: 1 square \n \nYou restore 3d4 Hit Points to an ally within range, any amount restored over the targets maximum turns into a magical shield. \n \nAs long as the target has a magical shield from this skill, they gain +1d4 to all their attack rolls and saving throws. \n \nThe magical shield lasts up to 10 minutes";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("elixirvit+"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "Restore 4d4 Hit points, overflowing into shield, to an ally. +1d6 to attacks and saves while shielded"
            skilldesc.querySelector(".tooltiptext").textContent = "Elixir of Vitality+ \nCost: 9 Mana, 1 AP \nRange: 4 squares \n \nYou restore 4d4 Hit Points to an ally within range, any amount restored over the targets maximum turns into a magical shield. \n \nAs long as the target has at least 1 magical shield from this skill, they gain +1d6 to all their attack rolls and saving throws. \n \nThe magical shield lasts until you take a rest";
            skillmana.textContent = "9 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "";
        break;
        case("cursecontagion"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true)) + " Body saving throw or gain 1d6+1 Poison at the start of their turns and spread to another"
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Contagion \nCost: 6 Mana, 2 AP \nRange: 6 squares \n \nYou choose one target within range and inflict them with a highly viral poison until the end of combat \n \nThe target must make a Body saving throw or gain 1d6 + Mastery turns of Poison now and at the start of each of the targets turns, and the nearest creature of your choice within 1 square then also gains poison equal to half the original targets total poison at the start of each of their turns \n \nIf the target succeeds on the saving throw, The target and the nearest creature of your choice within 1 square gain 1d6 turns of poison";
            skillmana.textContent = "6 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("cursecontagion+"):
            //skillsel.options[skillsel.options.length] = new Option('Backstab (I)', 'backstab')
            skilldesc.childNodes[0].textContent = "DC " + parseInt(8+tohitf("mind",true)) + " Body saving throw or gain 1d8+1 Poison at the start of their turns and spread to all nearby"
            skilldesc.querySelector(".tooltiptext").textContent = "Curse of Contagion+ \nCost: 15 Mana, 2 AP \nRange: 6 squares \n \nYou choose one target within range and inflict them with a highly viral poison until the end of combat \n \nThe target must make a Body saving throw or gain 1d8 + Mastery turns of Poison now and at the start of each of the targets turns, and all creatures of your choice within 1 square also gains poison equal to half the original targets total poison each turn. \n \nIf the target succeeds on the saving throw, The target and all creatures of your choice within 1 square gain 1d8 turns of poison";
            skillmana.textContent = "15 Mana";
            skillap.textContent = "2 AP";
            skilluses.textContent = "";
        break;
        case("potentmind"):
            skilldesc.childNodes[0].textContent = "If an enemy succeeds their saving throw against your basic attack, you instead deal half damage . If they fail, attack a second target within range for half damage"
            skilldesc.querySelector(".tooltiptext").textContent = "Potent Mind(passive) \n \nIf an enemy succeeds their saving throw against your basic attack, you instead deal half damage and still apply your extra basic attack effect. \n \nIf they fail their saving throw, choose another target within range and attack them with a free basic attack. The second target automatically succeeds on your basic attack, taking half damage";
        break;
        case("expcon"):
            //console.log("hiya")
            skilldesc.childNodes[0].textContent = "At the start of combat, gain +1 Clarity"
            skilldesc.querySelector(".tooltiptext").textContent = "Expanded Consciousness (passive) \n \nAt the start of combat, gain +1 Clarity. This is in addition to the Clarity you gain at the start of each turn";
        break;
        case("augury"):
            skilldesc.childNodes[0].textContent = "roll 1d4 after a rest to get an omen from the gods. The omen is active until your next rest, where you gain a new omen."
            skilldesc.querySelector(".tooltiptext").textContent = "Augury (passive) \n \nAt the end of each rest, roll 1d4 to receive an omen granted by the gods. Your omen remains active until your next rest or until it is replaced by another omen. You cannot gain the same omen twice in a row, rerolling if you gain the omen you already have\n \n1. Weal: A fortunate future lies ahead.\nGain +1 Clarity at the start of combats. The first time you use Clarity while having this omen, restore Hit Points equal to your Level\n\n2. Woe: Misfortune circles your path\nGain a Magical Shield equal to your Level until your next rest, but whenever you take damage, suffer additional damage equal to your Mastery\n \n3. Weal and Woe: Great gain and great loss walk hand in hand.\nOnce per turn you may make an enemy reroll a d20 roll, but every time you do this, the GM may do the same to you \n \n4. Emptiness: The strands of fate are hidden from you. Make your own fate.\nGain no immediate benefit. \n The next time you reach 3 Clarity, recover Mana equal to 2 x your Level and draw a new omen (rerolling if you roll 4), immediately gaining its effect until your next rest";
        break;
        case("clairvoyance"):
            skilldesc.childNodes[0].textContent = "The first basic attack you successfully hit each turn always applies the maximum reduction to Evasion, regardless of your Clarity. On hit, also inflict Weak equal to half the damage dealt"
            skilldesc.querySelector(".tooltiptext").textContent = "Clairvoyance (passive)\n \nThe first basic attack you successfully hit each turn always applies the maximum reduction to Evasion, regardless of your Clarity. On hit, also inflict Weak equal to half the damage dealt";
        break;
        case("momentum"):
            skilldesc.childNodes[0].textContent = "The first focus you gain each turn is permanent for the rest of combat, and cannot be removed (can still be removed by your own features and skills)"
            skilldesc.querySelector(".tooltiptext").textContent = "Momentum (passive) \n \nThe first focus you gain each turn is permanent for the rest of combat, and cannot be removed (can still be consumed as a resource by your own features and skills)";
        break;
        case("deflect"):
            skilldesc.childNodes[0].textContent = "Once per turn when you're hit with an attack, you may use 1 Focus to reduce damage by 1d12+4 damage. If you reduce damage to 0, reflect it to another target. DC " + parseInt(8 + tohitf("body", true, "senses")) + " Senses saving throw"
            skilldesc.querySelector(".tooltiptext").textContent = "Deflect Attacks (passive) \n \nOnce per turn when you're hit with an attack, you may use 1 Focus to reduce damage by 1d12+ Body/Senses damage. \n \nIf you reduce damage to 0, you may reflect it to another target. Choose a creature you can see within 1 square of yourself if the attack was a melee attack, or a creature you can see within 10 squares if the attack was a ranged attack. The target must make a Senses saving throw or be hit by the attack as if it was the original target of the attack you were hit with.";
        break;
        case("recklessabandon"):
            skilldesc.childNodes[0].textContent = "During your turn, you may choose to become reckless until the start of your next turn: All your attack are made with advantage, but all attacks against you are also made with advantage"
            skilldesc.querySelector(".tooltiptext").textContent = "Reckless Abandon (passive) \n \nAt the start of your turn or if you miss with an attack during your turn, you may choose to become reckless until the start of your next turn: All your attack are made with advantage (including the triggering attack), but all attacks against you are also made with advantage";
        break;
        case("bloodiedfrenzy"):
            skilldesc.childNodes[0].textContent = "When you're at half health " + parseInt((parseInt(hp.value)+1)/2) + " or below, your first basic attack or skill each turn has advantage to hit and the Focus bonus to damage is doubled (" + focusbonus.textContent + ")"
            skilldesc.querySelector(".tooltiptext").textContent = "Bloodied Frenzy (passive) \n \nWhen you're at half health or below, your first basic attack or skill each turn has advantage to hit and the bonus to damage granted by your Focus is doubled";
        break;


    }
}

function upgradeskill(skill){
    switch(skill.value){
        case("flurry"):
            skill.options[skill.options.length] = new Option('Flurry of Blows+ (I)', 'flurryrager+')
            skill.value="flurryrager+"
        break;
        case("crush"):
            skill.options[skill.options.length] = new Option('Crushing palm+ (I)', 'crush+')
            skill.value="crush+"
        break;
        case("secondwind"):
            skill.options[skill.options.length] = new Option('Second Wind+ (I)', 'secondwind+')
            skill.value="secondwind+"
        break;
        case("bulletpunch"):
            skill.options[skill.options.length] = new Option('Bullets Punch+ (II)', 'bulletpunch+')
            skill.value="bulletpunch+"
        break;
        case("counter"):
            skill.options[skill.options.length] = new Option('Counter+ (II)', 'counter+')
            skill.value="counter+"
        break;
        case("frenzy"):
            skill.options[skill.options.length] = new Option('Frenzy rush+ (II)', 'frenzy+')
            skill.value="frenzy+"
        break;
        case("rage"):
            skill.options[skill.options.length] = new Option('Rage+ (I)', 'rage+')
            skill.value="rage+"
        break;
        case("unleash"):
            skill.options[skill.options.length] = new Option('Unleash Anger+ (I)', 'unleash+')
            skill.value="unleash+"
        break;
        case("backstab"):
            skill.options[skill.options.length] = new Option('Backstab+ (I)', 'backstab+')
            skill.value="backstab+"
        break;
        case("bladeflurry"):
            skill.options[skill.options.length] = new Option('Blade Flurry+ (I)', 'bladeflurry+')
            skill.value="bladeflurry+"
        break;
        case("preparation"):
            skill.options[skill.options.length] = new Option('Preparation+ (I)', 'preparation+')
            skill.value="preparation+"
        break;
        case("feintingstrike"):
            skill.options[skill.options.length] = new Option('Feinting Strike+ (I)', 'feintingstrike+')
            skill.value="feintingstrike+"
        break;
        case("envenom"):
            skill.options[skill.options.length] = new Option('Envenom+ (I)', 'envenom+')
            skill.value="envenom+"
        break;
        case("treachery"):
            skill.options[skill.options.length] = new Option('Treachery+ (I)', 'treachery+')
            skill.value="treachery+"
        break;
        case("whirlwindslash"):
            skill.options[skill.options.length] = new Option('Whirlwind Slash+ (II)', 'whirlwindslash+')
            skill.value="whirlwindslash+"
        break;
        case("cripplingblow"):
            skill.options[skill.options.length] = new Option('Crippling Blow+ (I)', 'cripplingblow+')
            skill.value="cripplingblow+"
        break;
        case("armorup"):
            skill.options[skill.options.length] = new Option('Armor Up+ (I)', 'armorup+')
            skill.value="armorup+"
        break;
        case("befuddlingblast"):
            skill.options[skill.options.length] = new Option('Befudlling Blast+ (I)', 'befuddlingblast+')
            skill.value="befuddlingblast+"
            break;
        case("cursefrailty"):
            skill.options[skill.options.length] = new Option('Curse of frailty+ (I)', 'cursefrailty+')
            skill.value="cursefrailty+"
        break;
        case("beguile"):
            skill.options[skill.options.length] = new Option('beguile+ (I)', 'beguile+')
            skill.value="beguile+"
        break;
        case("hemokinesis"):
            skill.options[skill.options.length] = new Option('hemokinesis+ (I)', 'hemokinesis+')
            skill.value="hemokinesis+"
        break;
        case("cursehemo"):
            skill.options[skill.options.length] = new Option('Curse of Hemorrhaging+ (I)', 'cursehemo+')
            skill.value="cursehemo+"
        break;
        case("naturegrasp"):
            skill.options[skill.options.length] = new Option('Nature\'s Grasp+ (I)', 'naturegrasp+')
            skill.value="naturegrasp+"
        break;
        case("bloom"):
            skill.options[skill.options.length] = new Option('Bloom+ (I)', 'bloom+')
            skill.value="bloom+"
        break;
        case("wildgrasp"):
            skill.options[skill.options.length] = new Option('Wild Grasp+ (I)', 'wildgrasp+')
            skill.value="wildgrasp+"
        break;
        case("telekinesis"):
            skill.options[skill.options.length] = new Option('Telekinesis+ (I)', 'telekinesis+')
            skill.value="telekinesis+"
        break;
        case("parastatic"):
            skill.options[skill.options.length] = new Option('Paralyzing static+ (I)', 'parastatic+')
            skill.value="parastatic+"
        break;
        case("psiparoxysm"):
            skill.options[skill.options.length] = new Option('Psionic Paroxysm+ (I)', 'psiparoxysm+')
            skill.value="psiparoxysm+"
        break;
        case("vengefulfate"):
            skill.options[skill.options.length] = new Option('Vengeful Fate+ (I)', 'vengefulfate+')
            skill.value="vengefulfate+"
        break;
        case("cutfate"):
            skill.options[skill.options.length] = new Option('Cut Through Fate+ (I)', 'cutfate+')
            skill.value="cutfate+"
        break;
        case("elixirvit"):
            skill.options[skill.options.length] = new Option('Elixir of Vitality+ (I)', 'elixirvit+')
            skill.value="elixirvit+"
        break;
        case("cursecontagion"):
            skill.options[skill.options.length] = new Option('Curse of Contagion+ (I)', 'cursecontagion+')
            skill.value="cursecontagion+"
        break;
    }
    sendData();
}
