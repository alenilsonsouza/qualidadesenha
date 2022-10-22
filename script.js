const passwordEl = document.querySelector('#password');
const liEl = document.querySelectorAll('li');

const digits = document.querySelector('.digits');
const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const number = document.querySelector('.number');
const sc = document.querySelector('.sc');

const hasUpper = (text) => /[A-Z]/.test(text);
const hasLower = (text) => /[a-z]/.test(text);
const hasNumber = (text) => /[0-9]/.test(text);
const hasSpecialChar = (text) => /[@!\#$%¨&*?=()+-\[\]/\\^]/.test(text);

passwordEl.addEventListener('keyup', e => {

    let length = e.target.value.length;
    let text = e.target.value;

    // Quantidade de caracteres
    length >= 8?digits.classList.add('success'):digits.classList.remove('success');

    // Verificar se tem maiúscula
    hasUpper(text)?upper.classList.add('success'):upper.classList.remove('success');

    // Verificar se tem minúscula
    hasLower(text)?lower.classList.add('success'):lower.classList.remove('success');
    
    // Verificar se tem número
    hasNumber(text)?number.classList.add('success'):number.classList.remove('success');

    // VErificar sem caracteres Especiais
    hasSpecialChar(text)?sc.classList.add('success'):sc.classList.remove('success');

});