function filterCategory(idC){
    insertedValuesfiltered.splice(0, insertedValuesfiltered.length)
    insertedValues.filter((element) =>{
        if(element.categoryID == idC || idC == 0){
            insertedValuesfiltered.push(element)
        }
    })
}

const filterBtn = document.querySelectorAll(".filter-button");
filterBtn.forEach((index, i) =>{
    index.id = i
    index.addEventListener("click", () =>{
        
        ul.innerHTML= "";
        ul.classList.remove("no-value");
        
        filterCategory(index.id)
        insertedValuesfiltered.forEach((j) =>{
            register(j)
        })
        displaySumValue(insertedValuesfiltered)
    })
    })


