const totalValueDisplay = document.getElementById("total-value")

function displaySumValue(database){

if(insertedValuesfiltered.length == 0){
   return totalValueDisplay.innerText = "R$ 0.00"
}

const sum = database.reduce((acc, cur)=>{
    return acc + cur.value
},0)

totalValueDisplay.innerText = `R$ ${sum.toFixed(2)}`
}
displaySumValue()