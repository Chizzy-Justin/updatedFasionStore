class Cart {
  constructor(amount, qty, itemName, itemPic) {
    this.amount = amount;
    this.qty = qty;
    this.itemName = itemName;
    this.itemPic = itemPic;
    
  }
}



var text;
var cartList = [];

function addToCart(a,q,i,p,btnid){
	let cartItem = new Cart(a,q,i,p);
	cartList.push(cartItem);
  document.getElementById(btnid).disabled = true; 
	console.log(cartList.length);
}


function viewCart(){
	document.getElementById("xx").innerHTML = "";
//	cartList.forEach(updateCarts);
  document.getElementById("numberOfItems").innerHTML = cartList.length + " " + "items"

  var subTotals = 0;
for (i=0; i < cartList.length; i++){
 console.log(Number(cartList[i].amount))
  subTotals += Number(cartList[i].amount);
  
   
  text = '<div class="row border-top border-bottom">'+
  '<div class="row main align-items-center">'+
       '<div class="col-2"><img class="img-fluid" src="images/'+cartList[i].itemPic+'" id="itemPicture"></div><div class="col"><div class="row text-muted">Shirt</div><div class="row">'+cartList[i].itemName+'</div></div>'+
       '<div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>'+
       '<div class="col">$'+cartList[i].amount+' <span class="close" id="remove">&#10005;</span></div>'+
   '</div>'+
'</div>';
document.getElementById("xx").innerHTML += text;
//document.getElementById("subTotal").innerHTML= "";
document.getElementById("subTotal").innerHTML = subTotals.toFixed(2) ;
var vats;
vats = 107.5/100;

var Total =  subTotals * vats;
document.getElementById("Total").innerHTML = Total.toFixed(2);
var vatPrice;
vatPrice = Total - subTotals;
document.getElementById("vatsPrice").innerHTML = vatPrice.toFixed(2);



}

}
function onClearCartClicked(){
  document.getElementById("xx").innerHTML = "";
  document.getElementById("numberOfItems").innerHTML = 0 + " " + "item";
  document.getElementById("subTotal").innerHTML = 0.00;
  document.getElementById("Total").innerHTML = 0.00;
  document.getElementById("vatsPrice").innerHTML = 0.00;
}

/* function ifButtonIsClicked(buttonclick){ 
   
if (buttonclick == true){
  document.getElementById("buttons").disabled = true;
} else {
  document.getElementById("buttons").disabled = false;
}
 }
document.getElementById("buttons").onclick = function (){ifButtonIsClicked(true);}*/
  

/*function disableButton(buttons) {
 document.getElementById("buttons").onclick = onButtonClicked(buttons)
}*/
/*var buttonclick;
buttonclick = document.getElementById("buttons");*/
 
/*do {
  buttonclick.disabled = true;
} while (buttonclick.onclick = true);*/

//function onButtonClicked() {
 /* var buttonclick;
  buttonclick =*/
  // document.getElementById("buttons").disabled = true;
 /* if (buttonclick.onclick = addToCart(a,q,i,p)){
      buttonclick.disabled = true; 
  }*/
 
//}
//var btn = document.getElementById("buttons");
     
// Assigning event listeners to the button
//btn.addEventListener("click", onButtonClicked);
//btn.addEventListener("click", sayHi);
//function updateCarts(item, index){
 

//}