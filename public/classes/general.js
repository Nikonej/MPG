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
    }
    sendData();
});}
}

function tohitf(ms, atk, ms2){
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
    if (ms2 != undefined){
        hit2 = tohitf(ms2, atk)
        hit = parseInt((hit + hit2 + 1)/2)
    }
    return(hit)
}