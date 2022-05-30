// Add the coffee to local storage with key "coffee"
let url="https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)

   .then(function(res)
   {
       return res.json();
   }).then(function(res)
   {
       appendData(res);
       console.log("res",res);
   }).catch(function(err)
   {
       console.log("err",err);
   });

   function appendData(obj)
   {
   
       let data=obj.menu.data.length;

       for(let item=0; item<data; item++)
       { 

       let div= document.createElement("div");

       let name=document.createElement("h1");
       name.innerText= obj.menu.data[item].name;

       let price=document.createElement("p");
       price.innerText= "Price :"+obj.menu.data[item].price;

       let image=document.createElement("img");
       image.src= obj.menu.data[item].image;

       let btn=document.createElement("button");
        btn.innerText="Add to bucket";

        btn.addEventListener("click",function ()
        {
            addCartFunction(obj,item);
            alert("Successfully Added");
        });

        btn.setAttribute("id","add_to_bucket");

       div.append(image,name,price,btn);

       document.querySelector("#menu").append(div);
       }
   }

function addCartFunction(obj,item){
    let dataArray= JSON.parse(localStorage.getItem("coffee"))||[];

    let arr= obj.menu.data[item];

    dataArray.push(arr);

    localStorage.setItem("coffee",JSON.stringify(dataArray));
    
    let container=document.querySelector("#coffee_count");

    container.innerHTML=null;

    let div=document.createElement("div");

    let h1=document.createElement("h3");
    h1.innerText="Counter :"+dataArray.length;

    div.append(h1)

    container.append(div);
}