let order = document.getElementById("order");
let k1 = document.getElementById("k1");
let k2 = document.getElementById("k2");
let k3 = document.getElementById("k3");
let k4 = document.getElementById("k4");

let k7 = document.getElementById("k7");
let k8 = document.getElementById("k8");
let k9 = document.getElementById("k9");
let k10 = document.getElementById("k10");
let k20 = document.getElementById("k20");
let k21 = document.getElementById("k21");
let k22 = document.getElementById("k22");
let k23 = document.getElementById("k23");
let k24 = document.getElementById("k24");
let k25 = document.getElementById("k25");

let x;


const desc = ["Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get customized painted mirrors !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get customized painted mirrors !","Get customized painted mirrors !","Get customized wallet cards !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !"]

const photo = ["/images/o2.jpg","/images/o3.jpg","/images/o4.jpg","/images/o5.webp","/images/o6.jpg","/images/o7.jpg","/images/o8.jpg","/images/o9.webp","/images/o10.jpg","/images/o11.jpg","/images/o14.jpg","/images/o17.jpg","/images/w1.jpg","/images/n2.jpg","/images/n3.jpg","/images/n5.jpg","/images/n6.jpg","/images/n7.jpg","/images/n8.jpg"]



k1.addEventListener('click' ,(e) => {
    display(0);
    console.log(desc.length)
})

k2.addEventListener('click' ,(e) => {
    display(1);
})

k3.addEventListener('click' ,(e) => {
    display(2);
})

k4.addEventListener('click' ,(e) => {
    display(3);
})



k7.addEventListener('click' ,(e) => {
    display(6);
})

k8.addEventListener('click' ,(e) => {
    display(7);
})

k9.addEventListener('click' ,(e) => {
    display(8);
})

k10.addEventListener('click' ,(e) => {
    display(9);
})

k20.addEventListener('click' ,(e) => {
    display(13);
})
k21.addEventListener('click' ,(e) => {
    display(14);
})
k22.addEventListener('click' ,(e) => {
    display(15);
})
k23.addEventListener('click' ,(e) => {
    display(16);
})
k24.addEventListener('click' ,(e) => {
    display(17);
})
k25.addEventListener('click' ,(e) => {
    display(18);
})


function display(x){
    
    if(x === 12){
        
        order.innerHTML = `  <div id="ex">
        <h2 id="prev">&lt; Back</h2>
        <div id="im">
        <img src="${photo[x]}" alt="">
        </div>

        <div id="im">
        <img src="/images/w2.jpg" alt="">
        </div>
        
        <div id="war">
        <p>${desc[x]}</p>
        
        </div>
        
    <div id="steps">
    <h3>Steps To Order ~</h3>
    <ul>
    <li>Take the screenshot of this page</li>
    <li>Send this screenshot  to our instagram page <a href="https://www.instagram.com/_the_messytable._/">_the_messytable._</a>(click / scan below) or mail us at <a href="mailto:themessytable2021@gmail.com">themessytable2021@gmail.com</a></li>
    <li>After getting reply send the desired images</li>
    <li>Make the payment.</li>
    <li>Your order is confirmed !</li>
</ul>
            </div>
            
    <div id="barcode">
    <img src="/images/bar.jpg" alt="">
    </div>
    </div>`
    
    let ex = document.getElementById("ex");
    ex.style.height = "1300px";
}

    else{

        order.innerHTML = `  <div id="ex">
        <h2 id="prev">&lt; Back</h2>
        <div id="im">
        <img src="${photo[x]}" alt="">
        </div>
        
    <div id="war">
        <p>${desc[x]}</p>
        
    </div>

    <div id="steps">
    <h3>Steps To Order ~</h3>
    <ul>
                    <li>Take the screenshot of this page</li>
                    <li>Send this screenshot  to our instagram page <a href="https://www.instagram.com/_the_messytable._/">_the_messytable._</a>(click / scan below) or mail us at <a href="mailto:themessytable2021@gmail.com">themessytable2021@gmail.com</a></li>
                    <li>After getting reply send the desired images</li>
                    <li>Make the payment.</li>
                    <li>Your order is confirmed !</li>
                </ul>
    </div>
    
    <div id="barcode">
    <img src="/images/bar.jpg" alt="">
    </div>
    </div>`
}
    
let back = document.getElementById("prev");

back.addEventListener('click' ,(e) =>{
    window.location = "frame.html";
})

} 