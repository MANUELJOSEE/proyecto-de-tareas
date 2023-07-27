const txtTareas = document.getElementById("Tareas");
const btnButton = document.getElementById("Button");
const Presultado = document.getElementById("resultado");
const numero = document.getElementById("numero");

const vector = [];
let contador = 0;

btnButton.addEventListener("click", function (e) {
  e.preventDefault();

  const tareas = txtTareas.value;
  const div = document.createElement("div");
  div.classList = "tarea";

  const li = document.createElement("li");
  li.textContent = tareas;

  const button = document.createElement("button");
  button.textContent = "X";
  button.classList = "btn-delete";
  //
  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "checkboxes";
  //
  div.appendChild(check);
  div.appendChild(li);
  div.appendChild(button);
  Presultado.appendChild(div);

  button.addEventListener("click", function () {
    if (numero.textContent <= 0) {
      div.remove();
    } else {
      div.remove();
      contador--;
      numero.textContent = contador;
    }
  });

  check.addEventListener("click", function () {
    if (check.checked) {
      console.log("sumamos");
      contador++;
      numero.textContent = contador;
    } else {
      console.log("resta");
      contador--;
      numero.textContent = contador;
    }
  });
});
