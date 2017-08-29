var products = [];
var categories = []
var someVar = "";
var seasonalSales = document.getElementById("namesHere");
var newProducts = [];
var numOfXHRLoaded = 0;

function decideDataType(dataFromArray){
	var dataType = "products";
	//console.log(dataFromArray);
	//console.log(dataFromArray.categories);
	for (var i = 0; i < dataFromArray.length; i++){
		//console.log(dataFromArray[i].season_discount)
		if(dataFromArray[i].season_discount){
			dataType = "categories";
		}
	}
	// console.log(dataType);
	if(dataType === "products"){
		products = dataFromArray;
	}else if(dataType === "categories"){
		categories = dataFromArray;
		// console.log("categories logging", categories);
	}

	numOfXHRLoaded ++;
	if(numOfXHRLoaded === 2){
		moveOn();
	}
}

function moveOn (){
	console.log(products);
	// console.log(categories);
	addCategoryToProduct();
}

function resetDom () {
  seasonalSales.innerHTML = '';
}

function addCategoryToProduct(){
	for (var i = 0; i < products.length; i++) {
		for (var j = 0; j < categories.length; j++) {
			if (products[i]["category_id"] === categories[j].id){
				products[i].categoryName = categories[j].name;
				products[i].categorySeason = categories[j]["season_discount"];
				products[i].categoryDiscount = categories[j].discount;
			}
		}
	}
	prodString(products);
}

//Products domString
function prodString (prod){
  console.log("in prodString", prod)
	var domString = '';
	for (var i = 0; i < prod.length; i++){
		domString += `<div id="prodCard">`;
		domString +=	`<h4 class="department">${prod[i].categoryName}</h4>`;
		domString +=	`<h4 class="name">${prod[i].name}</h4>`;
		domString +=	`<h4 class="price">${prod[i].price}</h4>`;
		domString += `</div>`;
	}
	writeToDom(domString);
}

function writeToDom (strang){
	seasonalSales.innerHTML += strang;
}
//defining selector for discounts
var seasonalDeals = document.getElementById("seasonalDeals");

function discountPrice (){
	console.log(products);
	for (var i = 0; i < products.length; i++) {
    if (products[i].categorySeason === someVar) {
      var totalPrice = products[i].price - (products[i].price * products[i].categoryDiscount)
  		console.log(totalPrice.toFixed(2));
      products[i].price = totalPrice.toFixed(2)
    }
	}
  resetDom()
  prodString(products)
}

seasonalDeals.addEventListener("change", function(event){
	console.log(seasonalDeals.value);
  var emptyData = '';
	if(seasonalDeals.value === "spring"){
    someVar = "Spring"
		discountPrice()

	} else if (seasonalDeals.value === "autumn") {
    someVar = "Autumn"
    discountPrice()
  } else {
    someVar = "Winter"
    discountPrice()
  }
})


function executeThisCodeAfterFileLoads(){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	decideDataType(data.products);
}

function executeThisCodeAfterFileLoads2(){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	decideDataType(data.categories);
}

function executeThisCodeAfterFileErrors(){
	console.log("It Broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
myRequest.addEventListener('error', executeThisCodeAfterFileErrors);
myRequest.open('GET', 'products.json');
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener('load', executeThisCodeAfterFileLoads2);
myRequest2.addEventListener('error', executeThisCodeAfterFileErrors);
myRequest2.open('GET', 'categories.json');
myRequest2.send();
