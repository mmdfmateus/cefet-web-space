// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


const toggleExpand = (ev) => {
    const expanded = ev.currentTarget.parentNode.classList.toggle('expandido');
    ev.currentTarget.innerHTML = expanded ? '-' : '+';
}


const buttons = document.querySelectorAll('.botao-expandir-retrair');

buttons.forEach((button) => {
    button.addEventListener('click', toggleExpand)
});


