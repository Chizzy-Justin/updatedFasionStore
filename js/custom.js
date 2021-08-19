
var text;
var cartList = [];
var cartListBtnIdList = [];
class Cart {
        constructor(amount, qty, itemName, itemPic, btnid) {
          this.amount = amount;
          this.qty = qty;
          this.itemName = itemName;
          this.itemPic = itemPic;
          this.btnid = btnid;
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



var btnId;
function deleteCartItem(index){
        cartList.splice(index,1);
        btnId = cartListBtnIdList[index];
        document.getElementById(btnId).disabled = false;
        cartListBtnIdList.splice(index,1);
        viewCart();
        if (cartList.length == 0) {
            onClearCartClicked();
          }else {

          }
}

function clearCart(){
  for (xy = 0; xy < cartListBtnIdList.length; xy++){
   document.getElementById(cartListBtnIdList[xy]).disabled = false;
  }
  cartList.splice(0,cartList.length);
  cartList.length = 0;
 
  viewCart();
  onClearCartClicked();
}

//(btnd = cartListBtnIdList[0]; btnd < cartListBtnIdList.length; btnd++)

var newProductCard;
var nextImage;
var nextName;
var nextId;
var nextPrice;
var nextQuantity;




function whenProductIsSubmitted(nextImage, nextName, nextId, nextPrice, nextQuantity){


   nextImage =document.getElementById("imageInputed").value;
   nextName =document.getElementById("nameInputed").value;
   nextId =document.getElementById("idInputed").value;
   nextPrice =document.getElementById("priceInputed").value;
   nextQuantity =document.getElementById("quantityInputed").value;
  function clearInput(){
    nextId = "";
    nextName = "";
    nextQuantity = "";
    nextImage = "";
    nextPrice = "";
    }



  newProductCard ='<div class="col-lg-4">'+
					'<div class="card card-default">'+
						'<div class="card-body  mx-auto">'+
							'<img src="images/' + nextImage + '" class="image100"/>'+
							'<p class="fontRoboto">'+nextName+'</p>'+
							'<p class="fontAmount">$'+nextPrice+'</p>'+
							'<button class="btn btn-danger btn-sm" style="margin-top: 10px !important"  onclick="addToCart('+nextPrice + ','+nextQuantity +','+ nextName+ ',' + nextImage + ', a' + nextId + ')" id="a' + nextId + '">Add to cart</button>' +
						'</div>'+
					'</div>' +	
				'</div>'
        document.getElementById("v-pills-newWork-row").innerHTML +=newProductCard
     //  var theGottenCards= localStorage.getItem("newWorkCards");
      // var newNewProductCard =theGottenCards +newProductCard ; 

      //  localStorage.setItem("updatedCardsList",newNewProductCard )
      //  window.location.href = "../index.html"

console.log(nextName, nextPrice, newProductCard)


        
        clearInput();
    
}

