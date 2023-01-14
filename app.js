let userFormDOM = document.querySelector("#userForm");

let alertDOM = document.getElementById("alert");

let alertFunction = (message, title, className = "warning") =>
  `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

userFormDOM.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    localStorage.setItem("username", USER_NAME.value);
    localStorage.setItem("score", SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
    alertDOM.innerHTML = alertFunction(
      "Veri başarı ile girildi!",
      "OLUMLU!",
      "success"
    );
  } else {
    alertDOM.innerHTML = alertFunction("Bilgi Girilmedi!", "HATA!", "danger");
  }
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.appendChild(liDOM);
};
