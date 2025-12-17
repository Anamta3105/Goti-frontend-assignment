let cart = [];

function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>{
    sec.classList.remove('show');
  });
  document.getElementById(id).classList.add('show');
  if(id === "cart") loadCart();
}

function addToCart(name, price){
  cart.push({name, price});
  alert("Added to cart");
}

function loadCart(){
  let list = document.getElementById("cartItems");
  let total = 0;
  list.innerHTML = "";

  cart.forEach(item=>{
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function clearCart(){
  cart = [];
  loadCart();
}

function login(){
  alert("Login successful (Demo)");
}
