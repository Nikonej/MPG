function pugfeatures(data){
    document.getElementById("focusTable").style.display = "table"
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
    pugskills(data.skill1sel, 1)
    ragerskills(data.skill1sel, 1)
    pugskills(data.skill2sel, 1)
    ragerskills(data.skill2sel, 1)
    pugskills(data.skill3sel, 2)
    ragerskills(data.skill3sel, 2)
}

function pugskills(skillid, tier){
    skillid.options.length = 0;
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
function skilldesc(skillid, skilldesc, skillmana, skilluses, skillap){
    switch(skillid.value){
        case("flurry"):
            skilldesc.childNodes[0].textContent = "You unleash three attacks with +" + tohitf("senses", true) + " to hit. On a hit, each attack deals 1d4 + " + tohitf("senses", false) + " damage";
            skilldesc.querySelector(".tooltiptext").textContent = "Flurry of Blows \n Cost: 3 Mana, 2 AP \n Range: 1 Square \n You unleash a flurry of rapid strikes, making three attacks against a single target. On a hit, each attack deals 1d4 + Senses damage.";
            skillmana.textContent = "3 Mana";
            skillap.textContent = "2 AP";
            break;
        case("crush"):
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses", true, "body") + " to hit. On hit, they take 2d12 + " + tohitf("senses", false, "body") + " damage. If they, Weak or Dazed, also Cripple.";
            skilldesc.querySelector(".tooltiptext").textContent = "Crushing palm \n Cost: 4 Mana, 2 AP \n Range: 1 square \n A devastating palm strike aimed to break defenceless foes. The target takes 2d10 + Body/Senses damage. If they are Frail, Weak or Dazed, they become Crippled until the end of their next turn.";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "2 AP";
        break;
        case("secondwind"):
            skilldesc.childNodes[0].textContent = "Cleanse 1 debuff and restore "+ body +" hit points, or "+ body*2 +" if you are below half hit points ("+ (parseInt(hp.value)+1)/2 +")";
            skilldesc.querySelector(".tooltiptext").textContent = "Second Wind \n Cost: 2 Mana, 1 AP \n Range: Self \n Choose 1 debuff on you, and remove all stacks of it \n Restore Body + Focus hit points. If you have half your maximum hit points or less, you restore twice that amount.";
            skillmana.textContent = "2 Mana";
            skillap.textContent = "1 AP";
        break;
        case("bulletpunch"):
            skilldesc.childNodes[0].textContent = "+" + tohitf("senses", true, "fortune") + " to hit. On a hit, deal 1d4 per square moved + " + tohitf("senses", false, "fortune") + " damage. Use focus for extra move, may daze 1d4";
            skilldesc.querySelector(".tooltiptext").textContent = "Bullet Punch \n Cost: 9 Mana, 1 AP \n Range: 1 Square \n Use your movement to move in a straight line, then immediately attack an enemy within range that is in front of you. \n You may expend any amount of focus to increase the distance you move with this skill. You keep the to hit bonus of focus until after this skill is used.";
            skillmana.textContent = "9 Mana";
            skillap.textContent = "1 AP";
        break;
        case("counter"):
            skilldesc.childNodes[0].textContent = "You have +"+ tohitf("body", false) +" Evasion during the next attack that targets you. Next time youre attacked, attack back";
            skilldesc.querySelector(".tooltiptext").textContent = "Counter Strike \n Cost: 8 Mana, 2 AP \n Range: Self \n During the next attack that targets you, you gain a bonus to Evasion equal to your Body. Next time youre attacked, you may target the attacker with one free use of your basic attack";
            skillmana.textContent = "8 Mana";
            skillap.textContent = "2 AP";
        break;
        case("frenzy"):
            skilldesc.childNodes[0].textContent = "Gain +3 extra movement this turn. Your next skill has +"+ 0 +" to hit and reduces Focus on hit";
            skilldesc.querySelector(".tooltiptext").textContent = "Frenzy Rush \n Cost: 8 Mana, 1 AP \n Range: Self \n Gain +3 extra movement this turn. \n Your next skill this turn has a bonus to hit equal to your negative Focus damage bonus on all attacks, and it reduces your focus by 1 instead of increasing focus on hit";
            skillmana.textContent = "8 Mana";
            skillap.textContent = "1 AP";
        break;
        case("rage"):
            skilldesc.childNodes[0].textContent = "Reduce Focus to zero, gain resistance to martial damage. Is active as long as you take damage.";
            skilldesc.querySelector(".tooltiptext").textContent = "Rage \n Cost: 4 Mana, 1 AP \n Range: Self \n You enter a deep rage. You gain resistance to slashing, piercing and bludgeoning damage. If your Focus is above 0 when you use this skill, its reduced to 0 \n At the start of your next turn, you may use 1 AP to keep this effect, if you choose not to, the rage ends. If you took any damage between turns, the cost is reduced to 0 AP. When extending the rage in this way, you don't reduce your Focus";
            skillmana.textContent = "4 Mana";
            skillap.textContent = "1 AP";
        break;
        case("unleash"):
            skilldesc.childNodes[0].textContent = 1 + " attack(s) with +" + tohitf("body", true, "senses") + " to hit. On hit, deal 1d6+" + tohitf("body", false, "senses") + " damage. Make more attacks with less Focus	";
            skilldesc.querySelector(".tooltiptext").textContent = "Unleash Anger \n Cost: 5 Mana, 1 AP \n Range: 1 Square \n You unleash a brutal series of attacks against a target, fueled by your anger. \n You can make a number of attacks equal to your negative Focus damage bonus + 1. You can choose a new target within range for each attack.\n On hit, the target takes 1d6 + Body/Senses damage.";
            skillmana.textContent = "5 Mana";
            skillap.textContent = "1 AP";
        break;
        }
}
