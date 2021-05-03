
var text;
var cartList = [];
var cartListBtnIdList = [];
class Cart {
        constructor(amount, qty, itemName, itemPic) {
          this.amount = amount;
          this.qty = qty;
          this.itemName = itemName;
          this.itemPic = itemPic;
          
        }
}

function addToCart(a,q,i,p,btnid){
      	let cartItem = new Cart(a,q,i,p);
      	cartList.push(cartItem);
        cartListBtnIdList.push(btnid);
        document.getElementById(btnid).disabled = true; 
      	console.log(cartList.length);

}

function viewCart(){
    	   document.getElementById("xx").innerHTML = "";
         document.getElementById("numberOfItems").innerHTML = cartList.length + " " + "items"
        for (i=0; i < cartList.length; i++){
         console.log(Number(cartList[i].amount))
        text = '<div class="row border-top border-bottom">'+
          '<div class="row main align-items-center">'+
               '<div class="col-2"><img class="img-fluid" src="images/'+cartList[i].itemPic+'" id="itemPicture"></div><div class="col"><div class="row text-muted">Shirt</div><div class="row">'+cartList[i].itemName+'</div></div>'+
               '<div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>'+
               '<div class="col">$'+cartList[i].amount+' <span class="close" id="remove" onclick="deleteCartItem('+i+')">&#10005;</span></div>'+
           '</div>'
        '</div>';
        document.getElementById("xx").innerHTML += text;
        }
        updatePrices();
}

function updatePrices(){
  var subTotals = 0;
      for (i=0; i < cartList.length; i++){
          subTotals += Number(cartList[i].amount);
          document.getElementById("subTotal").innerHTML = subTotals.toFixed(2) ;
          var vats  =107.5/100;
          var Total =  subTotals * vats;
          document.getElementById("Total").innerHTML = Total.toFixed(2);
          var vatPrice = Total - subTotals;
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




function deleteCartItem(index){
        cartList.splice(index,1);
        var btnId = cartListBtnIdList[index];
        document.getElementById(btnId).disabled = false;
        cartListBtnIdList.splice(index,1);
        viewCart();
        if (cartList.length == 0) {
            onClearCartClicked();
          }else {

          }
}

function clearCart(){
      cartList.splice(0,cartList.length);
      viewCart();
      onClearCartClicked();
}