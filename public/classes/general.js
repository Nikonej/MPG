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
    if (ms2 != undefined && ms2 != "stat"){
        hit2 = tohitf(ms2, atk, "stat")
        hit = parseInt((hit + hit2 + 1)/2)
    }
    if (classs.value == "pug" && atk && ms2!="stat"){
        hit += parseInt(focusbonus.textContent)
    }
    if (subclass == "rager" && !atk && ms2!="stat"){
        hit -= parseInt(focus.value<0?(focus.value<-1*parseInt((parseInt(lvl.value)+1)/2)?-1*parseInt((parseInt(lvl.value)+1)/2):focus.value):0)
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
