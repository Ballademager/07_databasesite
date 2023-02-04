console.log("is js working?");
// fetch("https://kea-alt-del.dk/t7/api/products?limit=100  ")

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));
//ovenstående = .then(showProducts)

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);

  //ovenstående er det samme som = products.forEach((product) => showProduct(product));
}

function showProduct(product) {
  //   console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  // 3. But remember, you can .remove() things in your clone
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".price").textContent = "Prev. DKK " + product.price + ",-";
  copy.querySelector(".discounted p:nth-child(2)").textContent = "-" + product.discount + "%";

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  /*   virker ikke
  if (product.discount) {
     copy.querySelector(".price span").textContent = "Prev. ";
    }
  if (product.discount) {
    copy.querySelector(".price span").textContent += "Prev. ";
       }*/

  if (!product.discount) {
    copy.querySelector(".discounted").classList.add("notOnSale");
    copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  }

  if (product.discount > 0) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p:first-child span:nth-child(2)").textContent = Math.floor(product.price - (product.price * product.discount) / 100) + ",-";
  }

  //   let discountedPrice = product.price - product.discount;

  //appende til DOM'en
  document.querySelector("main").appendChild(copy);
}
/*  <article class="smallProduct">
<img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="">
<h3>Deck Navy Blue Backpack</h3>
<p class="subtle">Backpacks | Puma</p>
<p class="price"><span>Prev.</span> DKK 1299,-</p>
<div class="discounted">
    <p>Now DKK 585,-</p>
    <p>-55%</p>
</div>
<a href="product.html">To Product</a>
</article> */

/* {
    "id": 1165,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2013,
    "usagetype": "Sports",
    "productdisplayname": "Mean Team India Cricket Jersey",
    "price": 2495,
    "discount": 45,
    "brandname": "Nike",
    "soldout": 0
} */
