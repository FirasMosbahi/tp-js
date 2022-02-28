nom = document.querySelector(".nom");
content = document.querySelector(".content");
button = document.querySelector(".btn");
list = document.querySelector(".list");

function activeButton(a){
    if(a.value != ''){
        button.disabled = false ;
    }
}

content.addEventListener('input' , () => activeButton(name));
nom.addEventListener('input' , () => activeButton(content));

function clicked(){
    list.innerHTML += '<div class="added"><button type="button" class="btn btn-light">' +
        nom.value + ' : ' + content.value + '<button class="badge bg-light" onclick="supprime(this)"><img src="icons8-poubelle.svg"></i></button></button></div></br>';
    nom.value = '' ;
    content.value = '';
    button.disabled = true ;
}

button.addEventListener('click' , () => clicked()) ;

function supprime(a) {
    a.parentNode.remove();
}