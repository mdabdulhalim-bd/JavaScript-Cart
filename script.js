// show real  products

var products = [
  {
    name: "White chair",
    title: "Foam Chair",
    price: "1000",
    img: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Green chair",
    title: "Foam Chair",
    price: "1002",
    img: "https://plus.unsplash.com/premium_photo-1705479742912-79af0f068803?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Chair",
    title: "Foam Chair",
    price: "1003",
    img: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Chair",
    title: "Foam Chair",
    price: "1003",
    img: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Chair",
    title: "Foam Chair",
    price: "1003",
    img: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Chair",
    title: "Foam Chair",
    price: "1003",
    img: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Chair",
    title: "Foam Chair",
    price: "1003",
    img: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function addProduct() {
  var clutter = "";
  products.forEach(function (product) {
    clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="w-full h-full object-cover overflow-hidden image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                    <img src="${product.img}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.title}</h3>
                            <h4 class="font-semibold mt-2">$${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}
addProduct();

let popularProducts = [
  {
    name: "Clock",
    title: "Handmade Clock",
    price: "500",
    img: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Clock1",
    title: "Handmade Clock1",
    price: "501",
    img: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Clock2",
    title: "Handmade Clock2",
    price: "502",
    img: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Clock3",
    title: "Handmade Clock",
    price: "503",
    img: "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function addPopularProduct() {
  let clutter = "";
  popularProducts.forEach(function (popularProduct) {
    clutter =
      clutter +
      `<div class="popular flex gap-20">
                 
                        <img class="w-[200px] h-[200px] object-cover overflow-hidden"
                            src="${popularProduct.img}"
                            alt="image here">
                    <div class="p-6">
                        <h1 class="leading-none font-semibold">${popularProduct.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popularProduct.title}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$${popularProduct.price}</h4>
                    </div>
                </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}

addPopularProduct();

