const txtTareas = document.getElementById("Tareas");
const btnButton = document.getElementById("Button");
const Presultado = document.getElementById("resultado");

const vector = [];

btnButton.addEventListener("click", function (e) {
  e.preventDefault();

  const tareas = txtTareas.value;

  // if (tareas) {
  //   // Presultado.innerText = tareas;
  //   vector.push(tareas);
  // }

  // const ul = createElement("ul");
  console.log(tareas);
  const li = document.createElement("li");

  li.textContent = tareas;

  Presultado.appendChild(li);
});

function addDeleteBtn() {
  const addDeleteBtn = document.createElement("button");

  deleteBtn.textcontent = "X";
  deleteBtn.className = "btn";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.pareElement;
  });
}
