document.querySelector("form").addEventListener("submit",myFunction);

function myFunction()
{
  event.preventDefault();

  let order_status=true;

  let time=[0000,3000,8000,10000,12000];

  for(let i=0;i<time.length;i++)
  {
    setTimeout(function()
    {
        if(time[i]==0000)
        {
          alert("Your order is accepted ");
        }
        else if(time[i]==3000)
        {
            alert("Your order is being Packed ");

         }
         else if(time[i]==8000)
         {
            alert("Your order is in transit  ");

          }
         else  if(time[i]==10000)
         {
            alert("Your order is out for delivery ");

          }
          else if(time[i]==12000)
          {
            alert("Order delivered");

          }
    },time[i]);
  }
  
}