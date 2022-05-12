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
    if((id.value.trim()===''|| !id.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/))){
        errMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';
    } else {
        errMsg[serial].innerHTML = '';
        id.style.border ='2px solid green'
    }
}


