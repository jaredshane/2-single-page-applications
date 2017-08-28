var domOutput = document.getElementById('namesHere')
var productData;
var categoryData;
var displayNames = "";

  var productRequest = new XMLHttpRequest();
  productRequest.addEventListener("load", loadFirstJSON);
  productRequest.open("GET", "products.json");
  productRequest.send();





  function loadFirstJSON(e) {
    productData = JSON.parse(e.target.responseText)
    for (var i = 0; i < productData.products.length; i++) {
      // console.log(productData.products[i].name)
      // console.log( {productData} )
      }
      loadSecondJSON()

  }

  function loadSecondJSON() {
    var categoryRequest = new XMLHttpRequest();
    categoryRequest.addEventListener("load", categoriesList);
    categoryRequest.open("GET", "categories.json");
    categoryRequest.send();
    function categoriesList(e) {
      categoryData = JSON.parse(e.target.responseText)
      for (var i = 0; i < categoryData.categories.length; i++) {
        // console.log(categoryData)

      }
      console.log(productData, categoryData)
      putOnDom()
    }

  }

  function putOnDom () {
    console.log('this is being called')
    for (var i = 0; i < productData.length; i++) {
      console.log('why')
      console.log(productData)
      var productHTML = `<div class='product'>
                          <h2>${productData}</h2>
                          <h3>${productData[i].price}</h3>
                        </div>`
      console.log(productHTML)
      domOutput.innerHTML = productHTML;
    }
  }

//
//   function tryToGetThisToWork () {
//     document.getElementById('namesHere').innerHTML = "";
//     for (var i = 0; i < productData.products.length; i++) {
//       for (var j = 0; j < categoryData.categories.length; j++) {
//
//         if (productData.products[i].category_id === categoryData.categories[j].id){
//         console.log(productData.products[i].name, categoryData.categories[j].name)
//         displayNames = `<h1>${productData.products[i].name}</h1>
//                         <h2>${categoryData.categories[j].name}
//                         <h3>${productData.products[i].price}`
//         document.getElementById('namesHere').innerHTML += displayNames;
//
//
//       }
//     }
//   }
// }
