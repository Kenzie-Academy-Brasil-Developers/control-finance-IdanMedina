const input = document.getElementById("input");
const ul = document.getElementById("ul");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");


let submitItem = { id: 0, value: 0, categoryID: 0 };

cancel.addEventListener("click", () => {
  wideModal.classList.toggle("no-modal");
});

submit.addEventListener("click", () => {
    ul.innerHTML= "";
    ul.classList.remove("no-value");

    let idFunction = insertedValues.length + 1;
    let newItem = {...submitItem} 

  newItem.id = idFunction;
  newItem.value = Number(input.value);
  
  insertedValues.push(newItem);

  wideModal.classList.toggle("no-modal");

  insertedValues.forEach((item) => {
    register(item);
  });
  displaySumValue(insertedValues)
});

const categoryBtn = document.querySelectorAll("[data-control-modal]");
categoryBtn.forEach((button) => {
  let btnCategory = button.getAttribute("data-control-modal");
button.addEventListener("click", () => {
  button.classList.toggle("active");
  submitItem.categoryID = Number(btnCategory);
});
}) 


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

/*   if(insertedValuesfiltered.length > 0){
    element.id = insertedValuesfiltered.length
  } else {element.id = insertedValues.length} */

  newValue.innerText = `R$ ${element.value.toFixed(2)}`;
  category.innerText = showCategory(element.categoryID);
  img.src = "../../assets/trash.png";
  img.id = element.id;
  trash.id = element.id;
  trashBtn(trash);
console.log(element.id)

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

if (insertedValues.length == 0 || insertedValuesfiltered.length == 0) {
  noRegister();
}

function trashBtn(e) {
  e.addEventListener("click", (event) => {
    const id = event.target.id;
    
    if (insertedValues.length == 1 || insertedValuesfiltered.length == 1) {
      insertedValues.splice(0, 1);
      insertedValuesfiltered.splice(0, 1);
      ul.innerHTML = "";
      insertedValuesfiltered.forEach((j) => {
        register(j);
        noRegister()
      })
       displaySumValue(insertedValuesfiltered);
    } 
    if(id >= insertedValues.length || id >= insertedValuesfiltered.length){
        insertedValues.splice(id-1, 1);
        insertedValuesfiltered.splice(id-1, 1);
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
