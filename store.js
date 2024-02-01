let item_val=document.querySelector("#items");
let items=1;
let minus=document.querySelector("#minus");
let plus=document.querySelector("#plus");
//bismillah page pr redirect karna
let bismillah=document.querySelector("#bismillah");
bismillah.addEventListener("click",()=>{
  location.assign("index.html")
})


minus.addEventListener("click",()=>{
  if(items>1){
    items=items-1;
  }
item_val.innerText=items;
})
plus.addEventListener("click",()=>{
items=items+1;
item_val.innerText=items;
})

let add_cart=document.querySelector("#add-cart");
add_cart.addEventListener("click",()=>{
  alert("added to cart")
})

// price valuue fix karna
let price_val=document.querySelector("#price");
let price=300;

let kg_box=document.querySelectorAll(".kg-box");
kg_box[0].addEventListener("click",()=>{
  if(price>150){
    price=300/2;
    price_val.innerText="₹ "+price;
  }
  
  plus.addEventListener("click",()=>{
    price=price+150;
    price_val.innerText="₹ "+price;
    })
  minus.addEventListener("click",()=>{
    if(price>150){
      price=price-150;
      price_val.innerText="₹ "+price;
    }
    })

})
kg_box[1].addEventListener("click",()=>{
   price=300;
  price_val.innerText="₹ "+price;

  plus.addEventListener("click",()=>{
    price=price+300;
    price_val.innerText="₹ "+price;
    })
  minus.addEventListener("click",()=>{
    if(price>300){
      price=price-300;
      price_val.innerText="₹ "+price;
    }
    })

})
kg_box[2].addEventListener("click",()=>{
  price=300;
    price=price*2;
    price_val.innerText="₹ "+price;

    plus.addEventListener("click",()=>{
      price=price+600;
      price_val.innerText="₹ "+price;
      })
    minus.addEventListener("click",()=>{
      if(price>600){
        price=price-600;
        price_val.innerText="₹ "+price;
      }
      })

})
kg_box[3].addEventListener("click",()=>{
  price=300;
    price=price*5;
    price_val.innerText="₹ "+price;

    plus.addEventListener("click",()=>{
      price=price+1500;
      price_val.innerText="₹ "+price;
      })
    minus.addEventListener("click",()=>{
      if(price>1500){
        price=price-1500;
        price_val.innerText="₹ "+price;
      }
      })

})



