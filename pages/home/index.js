const input = document.getElementById("input");
const ul = document.getElementById("ul");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

let idFunction = insertedValues.length + 1;
let submitItem = {id: idFunction, value: input.value, categoryID: 0}

cancel.addEventListener("click", () =>{
    wideModal.classList.toggle("no-modal")
})

submit.addEventListener("click", () => {
    console.log(submitItem)
   insertedValues.push(submitItem)
    wideModal.classList.toggle("no-modal")
})

const insertBtn = document.querySelectorAll("[data-control-modal]");
for(let i = 0; i < insertBtn.length; i++){
let btnCategory = insertBtn[i].getAttribute("data-control-modal")
insertBtn[i].addEventListener("click", () =>{
    insertBtn[i].classList.toggle("active");
    submitItem.id = idFunction;
    submitItem.value = input.value;
    submitItem.categoryID = parseFloat(btnCategory);
})
}


function showCategory(value){
    let currentCategory = ""
    valuesCategory.forEach((category, index) => {
        if(value == index+1){
            currentCategory = category
        }
    })
    return currentCategory
}

function register(element) {
    const li = document.createElement("li");
    const newValue = document.createElement("span");
    const boxCtg = document.createElement("div");
    const category = document.createElement("span");
    const trash = document.createElement("span");
    const img = document.createElement("img");

    newValue.classList.add("new-value")
    category.classList.add("category")
    trash.classList.add("trash")

    newValue.innerText = `R$ ${element.value.toFixed(2)}`;
    category.innerText = showCategory(element.categoryID);
    img.src="../../assets/trash.png"
    img.id = element.id
    trash.id = element.id

    boxCtg.appendChild(category)
    trash.appendChild(img);
    li.append(newValue, boxCtg, trash);
    ul.appendChild(li)
}

function noRegister(){
    if(insertedValuesfiltered.length == 0){
        const h3 = document.createElement("h3");
        const p = document.createElement("p")

        ul.classList.add("no-value")

        h3.innerText = "Nenhum valor cadastrado";
        p.innerText = "Registrar novo valor"

        ul.append(h3, p)
}
}
noRegister()


const trash = document.querySelectorAll(".trash")
/* trash.forEach((e) => {
    e.addEventListener("click", (e) => {
    const id = e.target.id;
    const del = id - 1;
    console.log(id)
    console.log(del)
    insertedValuesfiltered.splice(del, 1)
    console.log(insertedValuesfiltered)
    ul.innerHTML="";
    register(insertedValuesfiltered)
})
})  */

