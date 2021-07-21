const smallCups = document.querySelectorAll(".cup-small");
const Liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const btn = document.querySelector("button");


smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightsCups(index))

    btn.addEventListener("click", function(){
        for(var i = 0; i < smallCups.length; i++){
            if(smallCups[i].classList.contains("full")){
                smallCups[i].classList.remove("full");
            }
        }

        percentage.style.visibility = "hidden";
        percentage.style.height = 0;

        remained.style.visibility = "visible";
        Liters.innerText = "2L";

    })
});

function highlightsCups(index) {

    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--;
    }
    smallCups.forEach((cup, i) => {
        if (i <= index) {
            cup.classList.add("full");
        }
        else {
            cup.classList.remove("full");
        }
    })

    updateBigCup();
}


function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }
    else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${330 / totalCups * fullCups}px`;
        percentage.innerText = `${100 / totalCups * fullCups}%`;
    }
    if(fullCups === totalCups){
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = "visible";
        Liters.innerText = `${2 - 0.25*fullCups}L`;
        remained.style.height = `${345 - (330 / totalCups * fullCups)}px`;
    }
}

