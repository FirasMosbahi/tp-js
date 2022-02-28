
number = Math.floor(Math.random() * 10);

function  gagne(){
    document.querySelector(".stat").innerHTML = "Congratulation vous avez gagnés";
}

function  lost(){
    document.querySelector(".stat").innerHTML = "Vous avez perdus hahaha";
    document.querySelector(".btn").innerHTML = "Restart";
}

function play(){
    essai = 6 - parseInt(prompt("choisir un niveau de difficulté entre 1 et 5"));
    while (essai<0 || essai>5 ){
        essai = 6 - parseInt(prompt("choisisser de nouveau un niveau entre 1 et 5"));
    }
    for (i = 1 ; i <= essai ; i++){
            num = parseInt(prompt("Donner un numero"));
            if (num == number){
                gagne();
                break;
            }
            else{
                if ((essai-i) == 0){
                    lost();
                    break;
                }
                if (!confirm("vous aver " + (essai-i) + " essais restants voulez vous continuez")){
                    lost();
                    break;
                }
            }
    }
}

document.querySelector(".btn").addEventListener("click",() => play());