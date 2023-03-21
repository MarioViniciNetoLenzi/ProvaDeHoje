let botaoAdicionar = document.querySelector('#adiciona-programador')
botaoAdicionar.addEventListener('click', function(evento){
    
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')


    let programador = obterValoresDoForm(form)

    adicionarProgramadorNaTabela(programador)
})

function adicionarProgramadorNaTabela(programador){
    let programadorTr = montarTr(programador)
    let tabela = document.querySelector('#tabela-programador')

    tabela.appendChild(programadorTr)
}

function montarTr(programador){
    let programadorTr = document.createElement('tr')
    programadorTr.classList.add('programador')

    programadorTr.appendChild(montarTr(programador.nome, 'info-nome'))
    programadorTr.appendChild(montarTr(programador.projeto, 'info-projeto'))
    programadorTr.appendChild(montarTr(programador.data-inicio, 'info-data'))
    programadorTr.appendChild(montarTr(programador.data-entrega, 'info-data'))

    return programadorTr
}
