// https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;

  document.querySelector(".brand").textContent = product.brandname;

  document.querySelector(".type").textContent = product.articletype;

  document.querySelector(".info dd:first-of-type").textContent = product.productdisplayname;

  document.querySelector(".info dd:nth-of-type(2)").textContent = product.brandname;

  document.querySelector(".info dd:nth-of-type(3)").textContent = product.id;

  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
