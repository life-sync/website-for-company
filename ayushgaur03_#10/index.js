
console.log('JS is working');


let phone = document.getElementById('phn-btn');
// console.log(phone);

let email = document.getElementById('email-btn')
// console.log(email);

phone.addEventListener("click", () => {
    console.log("Blur is working");
});

email.addEventListener("mouseover",()=>{
    console.log('Mouseover is working');
    
})
