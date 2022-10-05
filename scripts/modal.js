const showModal = document.createElement("div");

showModal.classList.add("show-modal");

const buttonModal = document.querySelectorAll("[data-modal-control]")
for(let i = 0; i < buttonModal.length; i++){
    buttonModal[i].addEventListener("click", ()=>{
        let modal = buttonModal[i].getAttribute("data-modal-control");
        document.getElementById(modal).classList.toggle("no-modal");     
    })
}

const closeModal = document.querySelector(".close-btn");
const wideModal = document.querySelector("#asign");

closeModal.addEventListener("click", () => {
    wideModal.classList.toggle("no-modal")
})