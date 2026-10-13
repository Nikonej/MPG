function pugfeatures(data){
    document.getElementById("focusTable").style.display = "table"
    document.getElementById("cunningtable").style.display = "none"
    document.getElementById("fortitudetable").style.display = "none"
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
    data.tohit.textContent = "+" + tohitf(data.masteryStat, true)
    data.dmg.textContent = "1d4+" + tohitf(data.masteryStat, false)
    data.range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    data.effect.childNodes[0].textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently +" + -ragebonus + " damage.";
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
        case("flurryrager+"):
            skillsel.options[skillsel.options.length] = new Option('Flurry of Blows+ (I)', 'flurryrager+')
            //skillid.value="flurryuprager"
            skilldesc.childNodes[0].textContent = "Three attacks with +3 to hit. On a hit, each attack deals 1d6 + " + tohitf("senses", false) + " damage. Hits generate no Focus";
            skilldesc.querySelector(".tooltiptext").textContent = "Flurry of Blows+ \n Cost: 9 Mana, 2 AP \n Range: 1 Square \n \n You unleash a flurry of rapid strikes, making three attacks against a single target. On a hit, each attack deals 1d6 + Senses damage. Hits generate no Focus";
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
            skilldesc.querySelector(".tooltiptext").textContent = "Rage \n Cost: 4 Mana, 1 AP \n Range: Self \n You enter a deep rage. You gain resistance to slashing, piercing and bludgeoning damage. If your Focus is above 0 when you use this skill, its reduced to 0 \n At the start of your next turn, you may use 1 AP to keep this effect, if you choose not to, the rage ends. If you took any damage between turns, the cost is reduced to 0 AP. When extending the rage in this way, you don't reduce your Focus";
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
            //skillsel.options[skillsel.options.length] = new Option('Treachery (II)', 'treachery')
            skilldesc.childNodes[0].textContent = "gain 2 fortitude and regain 1 armor slot"
            skilldesc.querySelector(".tooltiptext").textContent = "Armor Up \nCost: 2 Mana, 1 AP \n Range: self \n \n gain fortitude equal to half your armor score, rounded up and regain 1 lost armor slot."
            skillmana.textContent = "2 Mana";
            skillap.textContent = "1 AP";
            skilluses.textContent = "3";        
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
    }
    sendData();
}
