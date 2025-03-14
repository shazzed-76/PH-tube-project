function loadData() {
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => loadCategories(data.categories));
}

function loadCategoriesData() {
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => loadVideos(data.videos));
}

function loadCategories(categories) {
  for (let data of categories) {
    const btnContainer = document.getElementById("btn-container");

    const div = document.createElement("div");

    div.innerHTML = `
        <button class="btn hover:bg[#ff1f3d] hover:bg-[#ff1f3d] hover:text-white text-sm font-medium">
            ${data.category}
        </button>
    `;

    btnContainer.appendChild(div);
  }
}

const loadVideos = (data) => {
  console.log(data[0]);
};

loadData();
loadCategories();
