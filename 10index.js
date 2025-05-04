const select = document.getElementById("filter-options");
const images = document.querySelectorAll(".filter-content img");
const btns = document.querySelectorAll(".filter-btns__item");

function filterImage(sel) {
  for (let img of images) {
    img.style.display = "none";

    if (img.classList.contains(sel)) {
      setTimeout(() => {
        img.style.display = "block";
      }, 0);
    }
  }

  for (let btn of btns) {
    if (btn.dataset.filter === sel) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }

  select.value = sel;
}

select.addEventListener("change", function () {
  filterImage(this.value);
});
