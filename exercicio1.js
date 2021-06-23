// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const calculateGravitalForce = () => {
    const constant = parseFloat(document.querySelector('#constante').value);
    const mass1 = parseFloat(document.querySelector('#massa1').value);
    const mass2 = parseFloat(document.querySelector('#massa2').value);
    const distance = parseFloat(document.querySelector('#distancia').value);

    const result = (constant * mass1 * mass2)/Math.pow(distance, 2);

    document.querySelector('#resultado').value = result;
}

document.querySelector('#calcular').addEventListener('click', calculateGravitalForce);