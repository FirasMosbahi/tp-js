function changeColor(a) {
    color = '#'+(Math.random()*0xFFFFFF<<0).toString(16) ;
    a.style.backgroundColor = color ;
}
lists = document.querySelectorAll('.list');
for (i=0 ; i< lists.length ;i++){
    lists[i].addEventListener('click' , (e) => changeColor(e.target));
}