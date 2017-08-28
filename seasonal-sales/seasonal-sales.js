
var productRequest = new XMLHttpRequest();
productRequest.addEventListener("load", productsList);
productRequest.open("GET", "products.json");
productRequest.send();

var categoryRequest = new XMLHttpRequest();
categoryRequest.addEventListener("load", categoriesList);
categoryRequest.open("GET", "categories.json");
categoryRequest.send();

var productData;
var catData;


function productsList(e) {
  productData = JSON.parse(e.target.responseText);

  for (i = 0; i < productData.products.length; i++) {
    var productParse = productData.products[i];
    console.log(productParse)
    // console.log(productParse.name);
    // console.log(productParse.price);
    // console.log(productParse.category_id)
  }

}

function categoriesList(e) {
    catData = JSON.parse(e.target.responseText);
    for (j = 0; j < catData.categories.length; j++) {
      var catParse = catData.categories[j];
      console.log(catParse)
      // console.log(catParse.id);
      // console.log(catParse.name);


    }
}






//   if (productData.products[i].category_id === categoryData.categories[0].id)
//   console.log(productData.products[i].name, categoryData.categories[0].name)
//   displayNames += `<h3>${categoryData.categories[0].name}</h3>`
//   document.getElementById('namesHere').innerHTML = displayNames;
// }
