// function increment & decrement

var qty_inp = document.getElementById('qty-inp');


function increment() {
    if (qty_inp.value > 5) {
        // qty_inp.value = 5;
        alert('Max 6 allowed')
    }else {
        qty_inp.value = parseInt(qty_inp.value) +1
    }
}

function decrement() {
    if (qty_inp.value < 1) {
        // qty_inp.value = 5;
        alert('Negative Value is not allowed')
    }else {
        qty_inp.value = parseInt(qty_inp.value) -1
    }
}


// ###################### information Order   #############################


var informatioAddProduct = document.getElementById('add-product');
var prize_0 = document.getElementById("prize-1");
console.log(prize_0);


function orderAddProduct() {
    var cDiv = document.createElement('div');
    cDiv.innerHTML = prize.value
    informatioAddProduct.appendChild(cDiv);
    console.log(cDiv)
}