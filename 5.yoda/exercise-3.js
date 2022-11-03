fetch("http://localhost:3000/orders")
  .then((response) => response.json())
  .then((orders) => {
    // ordeno array
    orders.sort((a, b) => {
      return (
        Number(b.date.replaceAll("-", "0")) -
        Number(a.date.replaceAll("-", "0"))
      );
    });
    for (const order of orders) {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const p = document.createElement("p");
      
      details.setAttribute("open", true);
      summary.innerText = "Pedido " + order.date;
      const ul = document.createElement("ul");
      for (const product of order.products) {
        const { productId, quantity } = product;
        fetch("http://localhost:3000/products/" + productId)
          .then((response) => response.json())
          .then((data) => {
            const { id, name } = data;
            
            ul.innerHTML += `<li style="list-style-type: none"><strong>${quantity}</strong> unidades de ${name} </strong></li>`;
              
          });
      }
      details.append(summary);
      details.append(ul);
      document.body.append(details);
    }
  });
