let order = document.getElementById("order");

let k13 = document.getElementById("k13");
let k14 = document.getElementById("k14");
let x;


const desc = ["Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get customized painted mirrors !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get Customized Frames for your loved ones !","Get customized painted mirrors !","Get customized painted mirrors !","Get customized wallet cards !"]

const photo = ["/images/o2.jpg","/images/o3.jpg","/images/o4.jpg","/images/o5.webp","/images/o6.jpg","/images/o7.jpg","/images/o8.jpg","/images/o9.webp","/images/o10.jpg","/images/o11.jpg","/images/o14.jpg","/images/o17.jpg","/images/w1.jpg"]




k13.addEventListener('click' ,(e) => {
    display(12);
    
})

k14.addEventListener('click' ,(e) => {
    display(13);
    
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

else if(x === 13){
    order.innerHTML = `  <div id="ex">
    <h2 id="prev">&lt; Back</h2>
    <div id="im">
    <img src="/images/t1.jpg" alt="">
    </div>

    <div id="im">
    <img src="/images/t2.jpg" alt="">
    </div>
    
    <div id="war">
    <p>${desc[12]}</p>
    
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
    window.location = "wallet.html";
})

} 