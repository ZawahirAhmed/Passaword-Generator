let inputSlider = document.getElementById("inputRange");
let sliderValue = document.getElementById("rangeValue");
let password = document.getElementById("inputValue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");
let copyIcon =document.getElementById("copyIcon")

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;    
});

genBtn.addEventListener("click", ()=>{
    password.value = generatePassword();
})

let allSymbols = "!@#$%^&*";
let allNumber = "0123456789";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword(){
    let genPass = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? allNumber : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPass;
    };

    for(let i = 1; i <= inputSlider.value; i ++){
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPass;
};

copyIcon.addEventListener("click", ()=>{

    if(password.type === "password"){
        copyIcon.classList.add("ri-eye-line");
        copyIcon.classList.remove("ri-eye-off-line");
        password.type = "text";
    }else{
        copyIcon.classList.add("ri-eye-off-line");
        copyIcon.classList.remove("ri-eye-line");
        password.type = "password";
    }

})