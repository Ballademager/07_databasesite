fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((data) => showCats(data));

function showCats(categories) {
  categories.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".cat_box").setAttribute("href", `list.html?category=${cat.category}`);
  copy.querySelector(".cat_box").textContent = cat.category;
  copy.querySelector(".cat_box").href = `list.html?category=${cat.category}`;

  document.querySelector("section").appendChild(copy);
}
