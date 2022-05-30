// On clicking remove button the item should be removed from DOM as well as localstorage.
let dataArray=JSON.parse(localStorage.getItem("coffee"))||[];

let total=0;

dataArray.map(function(e,i)
{
    let container=document.querySelector("#bucket");

    let div=document.createElement("div");

    let name=document.createElement("h2");
    name.innerText= e.name;

    let price=document.createElement("p");
    price.innerText= "Price :"+e.price;
     total=total+e.price;

    let image=document.createElement("img");
    image.src= e.image;

    let btn=document.createElement("button");
    btn.innerText="Remove From bucket";

    btn.addEventListener("click",function()
    {
        removefunction(e,i);
        alert("remove item from bucket");
        window.location.reload();
    });

    btn.setAttribute("id","remove_coffee");
    div.append(image,name,price,btn);
    container.append(div);  
    
});

let container=document.querySelector("#total_amount");

let div=document.createElement("div");

let h3=document.createElement("h3");

h3.innerText=`Total  ${dataArray.length} Product and ${total} Rupees.`;

h3.setAttribute("id","total_amount");

div.append(h3);

container.append(div);

function removefunction(e,i)
{
    dataArray.splice(i,1);

    localStorage.setItem("coffee",JSON.stringify(dataArray));
}