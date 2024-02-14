/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    main = document.getElementById(mainId)
 
    if(toggle && sidebar && main){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding main */
            main.classList.toggle('main-pd')
        })
    }
 }
 showSidebar('header-toggle','sidebar', 'main')
 
 /*=============== LINK ACTIVE ===============*/
 const sidebarLink = document.querySelectorAll('.sidebar__link')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))
 
var nome = document.getElementById("nome");
var email = document.querySelector(".email");
var nomeOk = false;
var emailOk = false;

function ValidarNome(){
    let txtNome = document.getElementById("txtNome");
    if(nome.value.length < 3){
     txtNome.innerHTML = "Nome Inválido"
     txtNome.style.color = "red"
     nomeOk = false;
     nome.innerText 
    }else{
        txtNome.innerText = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
       emailOk = false;
       nome.innerText 
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }

 function enviar(){
    if(nomeOk && emailOk){
        alert("Enviada com sucesso!")
    }else{
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

 function Texto(){
    if(true){
        let a = "OI"
        console.log(a);
    }
    
 }



Texto();
