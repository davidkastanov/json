const inpEl = document.querySelector("#bookmarkInput");
const btnEl = document.querySelector("#addBookmarkBtn");
const listEl = document.querySelector("#bookmarkList");

let bookArray = [];

btnEl.addEventListener("click", btnClick);

function btnClick() {
  const inp = inpEl.value.trim();
  if (!inp) return;

  bookArray.push(inp);
  inpEl.value = "";
  renderBooks(bookArray);
}

function renderBooks(array) {
  listEl.innerHTML = array
    .map((item, index) => {
      return `
<li class="item" data-idx="${index}">
  <a href="${item}" target="_blank" class="link">${item}</a>
  <button type="button" class="delete">delete</button>
  <button type="button" class="edit">edit</button>
</li>`;
    })
    .join("");
}

listEl.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("delete")) {
    const li = target.closest("li");
    const index = li.dataset.idx;
    deleteItems(index);
  }

  if (target.classList.contains("edit")) {
    const li = target.closest("li");
    const index = li.dataset.idx;

    const newUrl = prompt("Введіть нове посилання", bookArray[index]);
    console.log(newUrl);

    if (newUrl === null) return;

    const trimmed = newUrl.trim();
    if (!trimmed) return;

    bookArray[index] = trimmed;
    renderBooks(bookArray);
  }
});

function deleteItems(index) {
  bookArray.splice(index, 1);
  renderBooks(bookArray);
}

renderBooks(bookArray);