const estados = [
    '--- Selecione um estado ---',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

for( let index = 0; index < estados.length; index += 1){
    const comboBox = document.querySelector('#states')
    let estado = document.createElement('option')
    estado.innerText = estados[index]
    estado.value = estados[index]
    comboBox.appendChild(estado)
}

function dateValidation(data) {
    if(data[2] === '/' && data[5] === '/'){
        let day = data.substr(0, 2)
        let month = data.substr(3, 2)
        let year = data.substr(6, 5)
        if((day>0 && day<=31) && (month>0 && month <=12) && (year>0 && year.length === 4)){
            return true
        }
    }
    return false
}

function checkData(){
    const dataField = document.querySelector('#data')
    let dataInformed = dataField.value
    let confirmation = dateValidation(dataInformed)
    if(!confirmation && dataInformed.length){
        dataField.value = ''
        alert('Data inválida')
        return false
    }
    return confirmation
}

function emailValidation(){
    const emailField = document.querySelector('#email')
    let email = emailField.value
    const validacaoEmail = /[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email)
    if(!validacaoEmail && email.length){
        emailField.value = ''
        alert('email inválido')
        return false
    }
    return validacaoEmail
}

function submit(event){
    event.preventDefault()
    const inputs = document.querySelectorAll('input')
    for( let index = 0; index < inputs.length; index +=1){
        if(inputs[index].type === 'radio' && !inputs[index].checked){
            continue
        }
        const inputValue = inputs[index].value
        const divRender = document.querySelector('#all')
        if(checkData() && emailValidation() && inputValue.length>0){
            const render = document.createElement('div')
            render.innerText = inputValue
            render.className = 'form-rendered'
            divRender.appendChild(render)
        }
    }
}

function clearAll() {
    const inputs = document.querySelectorAll('inputs')
    const textArea = document.querySelector('textArea')
    const divs = document.querySelectorAll('.form-rendered')
    for (let index = 0; index < inputs.length; index+=1){
        inputs[index].value = ''
        textArea.value = ''
        divs[index].innerText = ''
    }
}

const button = document.querySelector('#botao')
const buttonReset = document.querySelector('#botao-reset')

button.addEventListener('click', submit)
buttonReset.addEventListener('click', clearAll)

