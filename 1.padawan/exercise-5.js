const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];
  var sumaTotal = 0;
  for (let product of products) {
    sumaTotal += product.sellCount
  }
  console.log(sumaTotal)
  console.log('La media es ', sumaTotal/products.length);