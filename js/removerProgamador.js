let programador = document.querySelector('.programador')

let tabela = document.querySelector('#tabela-programador')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeout')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
})