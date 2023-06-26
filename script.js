let ani = document.getElementById("ani");

const arr = ["T","h","e"," ","M","e","s","s","y","t","a","b","l","e"]

let i = 0;

function head(){
    if(i<14){
        ani.textContent += arr[i];
       

        
        i++
        
    }
    
    else{
        ani.textContent = "The Messytable";
        
        
    }
}

setInterval(head,250);

let btn = document.getElementById("btn");

btn.addEventListener('click', (e) =>{
    window.location = "order.html";
})

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");

b1.addEventListener('click', (e) =>{
    window.location = "frame.html";
})

b2.addEventListener('click', (e) =>{
    window.location = "mirror.html";
})

b3.addEventListener('click', (e) =>{
    window.location = "mirror.html";
})

b4.addEventListener('click', (e) =>{
    window.location = "wallet.html";
})