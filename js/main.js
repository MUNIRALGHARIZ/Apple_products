let menu_icon = document.querySelector('.fa-bars') ;
let menu = document.querySelector('main .container header nav');
let right_side = document.querySelector('.rs');
let left_side = document.querySelector('.ls');
let right_side1 = document.querySelector('.rs1');
let left_side1 = document.querySelector('.ls1');
let boxes1 = document.querySelectorAll('.Business .container .blogs .articales article');
let boxes2 = document.querySelectorAll('.art');
let count = document.querySelectorAll('.count');
let sum_sec = document.querySelector('.summaries');


menu_icon.onclick = _ =>{
    if(menu.style.display=="none"){
        menu.style='display:flex';
        menu_icon.classList.remove('fa-bars')
        menu_icon.classList.add('fa-xmark')
    }else{
        menu.style='display:none';
        menu_icon.classList.remove('fa-xmark')
        menu_icon.classList.add('fa-bars')
    }
    }

    // when user click in any side
    let numth = 0;
    right_side.onclick= _=>{
        clearScale();
        if(numth>3){
            numth=0;
        }
        boxes1[numth++].style.transform="scale(1.2)";
    }
    let numth2 = 3;
    left_side.onclick= _=>{
        clearScale();
        if(numth2<0){
            numth2=3;
        }
        boxes1[numth2--].style.transform="scale(1.2)";
    }

    let numth3 = 0;
    right_side1.onclick= _=>{
        clearScale2();
        if(numth3>3){
            numth3=0;
        }
        boxes2[numth3++].style.transform="scale(1.2)";
    }
    let numth4 = 3;
    left_side1.onclick= _=>{
        clearScale2();
        if(numth4<0){
            numth4=3;
        }
        boxes2[numth4--].style.transform="scale(1.2)";
    }
    
    
    // clear scale 
    function clearScale(){
        for (const iterator of boxes1) {
            iterator.style.transform="scale(1)";   
        }
    }
    function clearScale2(){
        for (const iterator of boxes2) {
            iterator.style.transform="scale(1)";   
        }
    }

