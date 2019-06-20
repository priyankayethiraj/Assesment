let product = [
    { id: 1, name: "maggie", quantity: 100, price: 10 },
    { id: 2, name: "Yippie", quantity: 110, price: 12 },
    { id: 3, name: "Noodle", quantity: 130, price: 15 },
    { id: 4, name: "Rice", quantity: 200, price: 25 }
  ];
  
  let displayProducts = function(products) {
    return products
      .map(
        product =>
          `<li> Id:<b> ${product.id} </b> , Name: <b> ${
            product.name
          } </b>, Quantity :<b> ${product.quantity} </b>,Unit Price :<b> ${
            product.price
          }</b> <button id=${
            product.id
          } onclick="remove(this)">Remove</button> </li> `
      )
      .join(" ");
  };
  
  let show = () => {
    let template = `<ul>${displayProducts(product)}</ul>`;
    console.log(template);
    document.getElementById("container").innerHTML = template;
  };
  show();
  
  let remove = prod => {
    console.log(prod.id, product);
    let filteredProd = product.filter(p => p.id != prod.id);
    console.log(filteredProd);
    product = filteredProd;
    show();
  };
  
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", () => {
    addNew();
  });
  
  let addNew = () => {
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    console.log("add", name, quantity, price);
    let data = {
      id: product.length + 1,
      name: name,
      quantity: quantity,
      price: price
    };
    product.push(data);
    show();
  };
  
  let updateButton=document.getElementById('qtt');
  updateButton.addEventListener('click',()=>{
      updateQuantity();
  })
  
  let updateQuantity=()=>{
      let id = document.getElementById("id").value;
      let quantity = document.getElementById("newQuantity").value;   
  let idMatch=false;
      product.map(p=>{
          if(p.id == id){
              idMatch=true;
              p.quantity=quantity
          }
      })
      if(!idMatch) alert("invalid ID")
      console.log(product)
      show();
  }
  