var test = document.querySelector(".changeable");

var color = document.querySelector(".color");

var size = document.querySelector(".size");

var family = document.querySelector(".family");

color.addEventListener('input' ,()=>{
    test.style.color = color.value ;
});
size.addEventListener('input' ,()=>{
    test.style.fontSize = size.value.toString()+"px" ;
});
family.addEventListener('input' ,()=>{
    test.style.fontFamily = family.value.toString();
});
