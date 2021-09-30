
var mycart = [
    {id:5  ,   name:"Joker",     price:30   ,   description:  "Lorem ipsum dolor." ,     Images:["../images/MOVIES/1-Joker.jpg"]   ,  categories:"movie"     },
{id:4  ,   name:"Nobody",     price:20   ,   description:  "Lorem ipsum dolor." ,     Images:["../images/MOVIES/1-Nobody.jpg"]   ,  categories:"movie"     },
{id:3  ,   name:"Warrior",     price:10   ,   description:  "Lorem ipsum dolor." ,     Images:["../images/MOVIES/4-Warrior.jpg"]   ,  categories:"movie"     }
];

var  tableCart = document.getElementById("tableCart");

function displayCart(){
   for (let index = 0; index < mycart.length; index++) {
    tableCart.innerHTML += `<tr>
    <td>${mycart[index].categories}</td> 
    <td>${mycart[index].name}</td>
    <td>${mycart[index].price}</td>
    <td><button onclick="btnDelet(${mycart[index].id})" class="btnRemove">delete</button></td>
    </tr>`
}
}

displayCart()



var btnRemove = document.getElementsByClassName("btnRemove");

var th =`         <tr>
<th>category</th>
<th>name</th>
<th>price</th>
<th>remove</th>
</tr>`

console.log(mycart);

function btnDelet (productId){
    for (let index = 0; index < mycart.length; index++) {
        if (mycart[index].id === productId){
            mycart.splice(index , 1)
            console.log(mycart);
            tableCart.innerHTML = th
            displayCart()
            totalFuncation()
        }
    }
} 





var totalPrice =document.getElementById("totalPrice");


function totalFuncation(){
    var totalSum = 0
    for (let index = 0; index < mycart.length; index++) {
        totalSum = totalSum + mycart[index].price;
    }
    
    totalPrice.innerHTML= `total price: ${totalSum}`

}

totalFuncation()