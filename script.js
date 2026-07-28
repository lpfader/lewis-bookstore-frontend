document.getElementById("loadBooks").addEventListener("click", () => {
  fetch("https://lewis-bookstore-api.onrender.com/books")
    .then(res => res.json())
    .then(books => {
      const list = document.getElementById("bookList");
      list.innerHTML = "";
      books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} — ${book.authorName}`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error(err));
});
