const showModal = document.createElement("div");

showModal.classList.add("show-modal");

const buttonModal = document.querySelector("[data-modal-control]")

    buttonModal.addEventListener("click", ()=>{
        let modal = buttonModal.getAttribute("data-modal-control");
        document.getElementById(modal).classList.toggle("no-modal");
        categoryBtn.forEach( (button) => {
            button.classList.remove("active")     
    })
})


const closeModal = document.querySelector(".close-btn");
const wideModal = document.querySelector("#asign");

closeModal.addEventListener("click", () => {
    wideModal.classList.toggle("no-modal")
})