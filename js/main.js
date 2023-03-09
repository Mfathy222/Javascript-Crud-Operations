

// make var with detales input and catch it with id in html   
var ProductName = document.getElementById ('pn')
var ProductPrice = document.getElementById ('pr')
var ProductCategory = document.getElementById ('pc')
var ProductDescription = document.getElementById ('pd')
// arry to saved user input in it
var allProduct=[] ;  

// git iteam if != null { then json.parse savedproduct and display it}
if( localStorage.getItem("savedproduct")!= null){

allProduct=JSON.parse(localStorage.getItem("savedproduct"));

    displayProduct ();
}


//  make function to addproduct when click on button with value input user
// and saved it in project (product) and push it in all product array 
// and display it


function addProduct (){

if( document.getElementById("up").innerHTML= "Add"){


    var product = {
        name:ProductName.value,
        price:Number(ProductPrice.value),
        Category:ProductCategory.value,
        Description:ProductDescription.value,
        }
        allProduct.push( product );
        
        localStorage.setItem("savedproduct",JSON.stringify(allProduct))
        displayProduct () ;
        clear();

    }
else if ( document.getElementById("up").innerHTML= "Update"  )

 {   editValue()  } 

}

function displayProduct () {
var html = " ";
 for ( var i=0 ; i< allProduct.length; i++)
 html += ` <tr >
 <td>${i+1}</td>  
 <td>${allProduct[i].name}</td>  
 <td>${allProduct[i].price}</td>  
 <td>${allProduct[i].Category}</td>  
 <td>${allProduct[i].Description}</td>  
 <td><button onclick=updateProduct(${i})  class=" btn btn-primary shadow">Update</button></td>  
 <td><button onclick=deleteData(${i}) class=" btn btn-danger shadow">Delete</button></td>  
</tr>`

document.getElementById("td").innerHTML= html;

}
function clear() {

    ProductName.value = '';
    ProductPrice.value = '';
    ProductCategory.value = '';
    ProductDescription.value = '';
}

function deleteData(index){

allProduct.splice(index,1)

localStorage.setItem("savedproduct",JSON.stringify(allProduct))

displayProduct ();
}



function search(term){

var html='';

for ( var i=0 ; i< allProduct.length; i++){

    if(allProduct[i].name.toLowerCase().includes(term.toLowerCase()) ==true){

    html += ` <tr >
    <td>${i+1}</td>  
    <td>${allProduct[i].name}</td>  
    <td>${allProduct[i].price}</td>  
    <td>${allProduct[i].Category}</td>  
    <td>${allProduct[i].Description}</td>  
    <td><button onclick=updateProduct(${i})  class=" btn btn-primary shadow">Update</button></td>  
    <td><button onclick=deleteData(${i}) class=" btn btn-danger shadow">Delete</button></td>  
   </tr>`;

}

}
document.getElementById("td").innerHTML= html;
}

var updatedIndex=[] ;

function updateProduct(index){
    ProductName.value = allProduct[index].name;
    ProductPrice.value = allProduct[index].price;
    ProductCategory.value = allProduct[index].Category;
    ProductDescription.value =allProduct[index].Description;


    updatedIndex = index;

document.getElementById("up").innerHTML= "Update"
}

  function editValue() {
// need to know again
    allProduct[updatedIndex].name=ProductName.value;
    allProduct[updatedIndex].price=ProductPrice.value;
    allProduct[updatedIndex].Category=ProductCategory.value;
    allProduct[updatedIndex].Description=ProductDescription.value;

    localStorage.setItem("savedproduct",JSON.stringify(allProduct))

document.getElementById("up").innerHTML= "Add"
displayProduct () ;

}
