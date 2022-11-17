// ----- Navegación Preguntas -----

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");

const survey = document.querySelector(".content-survey");
const form = document.querySelector(".form");

// ----- Pregunta 1 -----

[document.getElementById("q1-1"), document.getElementById("q1-2")]
  .forEach((item) => {
    item.addEventListener("click", function () {
      q1.style.display = "none";
      q2.style.display = "block";
    });
  })
  
  // ----- Pregunta 2 -----
  
    const q2_1 = document.getElementById("q2-1");
    const q2_2 = document.getElementById("q2-2");

  document.addEventListener('click', event => {
    if (event.target !== q2_1 && event.target !== q2_2) {
      return
    }
    q2.style.display = "none";
    q3.style.display = "block";
  })

// ----- Pregunta 3 -----

  const q3_1 = document.getElementById("q3-1");
  const q3_2 = document.getElementById("q3-2");
  const q3_3 = document.getElementById("q3-3");
  const q3_4 = document.getElementById("q3-4");
  const q3_5 = document.getElementById("q3-5");

  document.addEventListener('click', event => {
    if (event.target !== q3_1 && event.target !== q3_2 && event.target !== q3_3 && event.target !== q3_4 && event.target !== q3_5) {
      return
    }
      q3.style.display = "none";
      survey.style.display = "none";
      form.style.display = "block";
  })
  
// ----- Return -----

  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");

back1.addEventListener("click", function () {
  q1.style.display = "block";
  q2.style.display = "none";
});

back2.addEventListener("click", function () {
  q2.style.display = "block";
  q3.style.display = "none";
});

// ----- Store Form Data -----

let lastForm = document.querySelector(".form-content");
lastForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formdata = new FormData(this);

  let fname = formdata.get("fname");
  let lname = formdata.get("lname");
  let cp = formdata.get("cp");
  let email = formdata.get("email");
  let phone = formdata.get("phone");

  let input = {fname, lname, cp, email, phone};

  console.log(input);
});

// ----- Submit -----

function acceptTerms() {
  let terms = document.accept.terms;
  if (terms.checked == true) {
    alert(
      "¡Gracias por tu tiempo!\nNos pondremos en contacto contigo pronto :)"
    );
  } else {
    alert("¡Ups!\nDebes aceptar las condiciones para finalizar el proceso");
    return false;
  }
}
