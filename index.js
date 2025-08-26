
const form = document.querySelector("form")

const nome = document.querySelector('#nome')
 
const email = document.querySelector('#email')

const telefone = document.querySelector('#telefone')

const mensagem = document.querySelector('#mensagem')





const validanome = () =>{
    nome.classList.remove('invalid')
    nome.nextElementSibling.classList.add('erro')

    if(!nome.value){
        nome.classList.add('invalid')
        nome.nextElementSibling.classList.remove('erro')
    }
}


const validaemail = () =>{
    email.classList.remove('invalid')
        email.nextElementSibling.classList.add('erro')
    if(!email.value){
        email.classList.add('invalid')
        email.nextElementSibling.classList.remove('erro')
    }
}


const validatelefone = () =>{
    telefone.classList.remove('invalid')
        telefone.nextElementSibling.classList.add('erro')
    if(!telefone.value){
        telefone.classList.add('invalid')
        telefone.nextElementSibling.classList.remove('erro')
    }
}


const validamensagem = () =>{
    
    mensagem.classList.remove('invalid')
        mensagem.nextElementSibling.classList.add('erro')
    if(!mensagem.value){
        mensagem.classList.add('invalid')
        mensagem.nextElementSibling.classList.remove('erro')
    }
}



form.addEventListener('submit',  (e) => {
    validamensagem()
    validatelefone()
    validaemail()
    validanome()
   e.preventDefault();
        
})



