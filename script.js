let id  = (id) => document.getElementById(id)

let classes = (classes) => document.getElementsByClassName(classes)

let email = id('email'),
form = id('form'),

errMsg = classes('error');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    engine(email, 0, 'please provide a valid email address')

})



let engine = (id, serial, message) =>{
    if((id.value.trim()===''&& !id.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) )){
        errMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';
    } else {
        errMsg[serial].innerHTML = '';
        id.style.border ='2px solid green'
    }
}


