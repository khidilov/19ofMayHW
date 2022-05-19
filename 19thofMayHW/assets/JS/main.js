"use strict"

let fileUpload = document.querySelector("#file-upload");
let submitButton = document.querySelector(".submit-btn");
let imageContainer = document.querySelector("#image-container");

uploadBtn.addEventListener("click", function () {
    fileUpload.click();
})

document.addEventListener("click", function (e) {
    if (e.target.hasAttribute("class") && e.target.getAttribute("class").includes("image-remover")) {
        e.target.parentNode.remove()
    }
})

fileUpload.addEventListener("change", function (e) {
    let uploadedFiles = e.target.files;

    for (const file of uploadedFiles) {
        let reader = new FileReader();
        reader.onloadend = (e) => {
            let elem = `
            <div class="image-wrapper">
                <span class="image-remover">×</span>
                <img src="${e.target.result}" alt="">
            </div>
            `
            imageContainer.innerHTML += elem;
        }
        reader.readAsDataURL(file);
    }
})