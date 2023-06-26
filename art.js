let ani = document.getElementById("ani");

const arr = ["M","y"," ","A","r","t","w","o","r","k","s"]

let i = 0;

function head(){
    if(i<11){
        ani.textContent += arr[i];
       

        
        i++
        
    }
    
    else{
        ani.textContent = "My Artworks";
        
        
    }
}

setInterval(head,250);

let btn = document.getElementById("btn");

btn.addEventListener('click', (e) => {
    window.location = "order.html"
})