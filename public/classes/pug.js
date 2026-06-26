function rager(){
    basicname.textContent = "Retaliation"
    tohit.textContent = "+" + tohitf(masteryStat, true)
    dmg.textContent = "1d4+" + tohitf(masteryStat, false)
    range.textContent = "1 square"
    //effect.textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage."
    effect.childNodes[0].textContent = "If the first attack hits, attack again. You can go into negative focus, dealing more damage the lower it is (up to your mastery). Currently" +" damage.";
    effect.querySelector(".tooltiptext").textContent = "Your basic attack deals bludgeoning damage. If you hit an enemy, you may attack again without using AP. \n \n When you would reset focus from taking damage while at 0 focus or less, instead lose one focus. Focus can become negative. You deal extra damage the more negative focus you have, up to your mastery.\n \n Some Pugilist skills and passives are changed for the Rager:\n \n Skills:\n Flurry of Blows+ \n Adrenaline rush -> Frenzy Rush \n \n passives: \n Momentum -> Raging Momentum \n Absolute Focus -> Absolute Rage \n Unwavering -> Unwavering Anger";}
function tohitf(ms, atk){
    let hit=0;
    switch(ms){
        case("body"):
            hit = body
        break;
        case("senses"):
            hit = senses
        break;
        case("mind"):
            hit = mind
        break;
        case("fortune"):
            hit = fortune
        break;
        case(""):
            hit = 0
        break;
    }
    if (atk){
        hit +=  (parseInt(lvl.value)+1)/2
    }
    return(hit)
}