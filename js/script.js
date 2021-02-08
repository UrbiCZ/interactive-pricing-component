let slider = document.querySelector('#slider');
let pageView = document.querySelector('.pageview-price .pageview');
let price = document.querySelector('.pageview-price .price');
let check = document.querySelector('.switch input');

const max = slider.getAttribute('max');
const min = slider.getAttribute('min');

let origos = null;
let origos2 = null;

check.oninput = function() {

    if(this.checked) {
        const newPrice = price.textContent.substr(1);
        let parsedNewPrice = newPrice.split('.')[0];
        origos = parsedNewPrice;
        let newPrc = parsedNewPrice - (parsedNewPrice * 0.25);
        price.innerHTML = `$${newPrc.toFixed(2)}`;
    } else {
        price.innerHTML = `$${Number(origos).toFixed(2)}`;
    }

}

slider.oninput = function() {
    
    let percentage = (this.value / max) * 100;
    this.style.background = `linear-gradient(90deg, #A5F3EB ${percentage}%, #EAEEFB ${percentage}%)`;

    if(this.value === "0" && check.checked) {
        pageView.innerHTML = "10K";
        origos = 8;
        origos2 = 8 - (8 * 0.25);
        price.innerHTML = `$${origos2.toFixed(2)}`;
    } else if (this.value === "0") {
        origos = 8;
        pageView.innerHTML = "10K";
        price.innerHTML = `$${origos.toFixed(2)}`;
    }

    if(this.value === "1" && check.checked) {
        pageView.innerHTML = "50K";
        origos = 12;
        origos2 = 12 - (12 * 0.25);
        price.innerHTML = `$${origos2.toFixed(2)}`;
    } else if(this.value === "1" ) {
        origos = 12;
        pageView.innerHTML = "50K";
        price.innerHTML = `$${origos.toFixed(2)}`;
    }

    if(this.value === "2" && check.checked) {
        pageView.innerHTML = "100K";
        origos = 16;
        origos2 = 16 - (16 * 0.25);
        price.innerHTML = `$${origos2.toFixed(2)}`;
    } else if(this.value === "2" ) {
        origos = 16;
        pageView.innerHTML = "100K";
        price.innerHTML = `$${origos.toFixed(2)}`;
    }

    if(this.value === "3" && check.checked) {
        pageView.innerHTML = "500K";
        origos = 24;
        origos2 = 24 - (24 * 0.25);
        price.innerHTML = `$${origos2.toFixed(2)}`;
    } else if(this.value === "3" ) {
        origos = 24;
        pageView.innerHTML = "500K";
        price.innerHTML = `$${origos.toFixed(2)}`;
    }

    if(this.value === "4" && check.checked) {
        pageView.innerHTML = "1M";
        origos = 36;
        origos2 = 36 - (36 * 0.25);
        price.innerHTML = `$${origos2.toFixed(2)}`;
    } else if(this.value === "4" ) {
        origos = 36;
        pageView.innerHTML = "1M";
        price.innerHTML = `$${origos.toFixed(2)}`;
    }

}



