const input = document.getElementById("input");
const ul = document.getElementById("ul");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

let idFunction = insertedValues.length + 1;
let submitItem = { id: idFunction, value: 0, categoryID: 0 };

cancel.addEventListener("click", () => {
  wideModal.classList.toggle("no-modal");
});

submit.addEventListener("click", () => {
    ul.innerHTML= "";
    ul.classList.remove("no-value");

  submitItem.id = idFunction;
  submitItem.value = Number(input.value);
  insertedValues.push(submitItem);
  
  wideModal.classList.toggle("no-modal");

  insertedValues.forEach((j) => {
    register(j);
  });
  displaySumValue(insertedValues)
});

const categoryBtn = document.querySelectorAll("[data-control-modal]");
for (let i = 0; i < categoryBtn.length; i++) {
  let btnCategory = categoryBtn[i].getAttribute("data-control-modal");
  categoryBtn[i].addEventListener("click", () => {
    categoryBtn[i].classList.toggle("active");
    submitItem.categoryID = Number(btnCategory);
  });
}

function showCategory(value) {
  let currentCategory = "";
  valuesCategory.forEach((category, index) => {
    if (value == index + 1) {
      currentCategory = category;
    }
  });
  return currentCategory;
}

function register(element) {
  const li = document.createElement("li");
  const newValue = document.createElement("span");
  const boxCtg = document.createElement("div");
  const category = document.createElement("span");
  const trash = document.createElement("span");
  const img = document.createElement("img");

  newValue.classList.add("new-value");
  category.classList.add("category");
  trash.classList.add("trash");

  newValue.innerText = `R$ ${element.value.toFixed(2)}`;
  category.innerText = showCategory(element.categoryID);
  img.src = "../../assets/trash.png";
  img.id = element.id - 1;
  trash.id = element.id - 1;
  trashBtn(trash);

  boxCtg.appendChild(category);
  trash.appendChild(img);
  li.append(newValue, boxCtg, trash);
  ul.appendChild(li);
}

function noRegister() {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  ul.classList.add("no-value");

  h3.innerText = "Nenhum valor cadastrado";
  p.innerText = "Registrar novo valor";

  ul.append(h3, p);
}

if (insertedValuesfiltered.length == 0) {
  noRegister();
}

function trashBtn(e) {
  e.addEventListener("click", (event) => {
    const id = event.target.id;
    
    if (insertedValuesfiltered.length == 1) {
      insertedValuesfiltered.splice(0, 1);
      insertedValues.splice(0, 1);
      ul.innerHTML = "";
      insertedValuesfiltered.forEach((j) => {
        register(j);
        noRegister()
      })
       displaySumValue(insertedValuesfiltered);
    } 
    if(id >= insertedValuesfiltered.length || id >= insertedValuesfiltered.length){
        insertedValuesfiltered.splice(id-1, 1);
        insertedValues.splice(id-1, 1);
        ul.innerHTML = "";
        insertedValuesfiltered.forEach((j) => {
          register(j);
          displaySumValue(insertedValuesfiltered);
        });
    }
    else {
      insertedValuesfiltered.splice(id, 1);
      insertedValues.splice(id, 1);
      ul.innerHTML = "";
      insertedValuesfiltered.forEach((j) => {
        register(j);
        displaySumValue(insertedValuesfiltered);
      });
    }
  });
}
