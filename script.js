
const botaoCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

botaoCalcular.addEventListener("click", function(){
    const input1 = parseInt(document.querySelector("#valor1").value);
    const input2 = parseInt(document.querySelector("#valor2").value);
    const selectConta = document.querySelector("#conta").value;
    let conta;

    if (isNaN(input1) || isNaN(input2)) {
        alert("Campos Vazio, Por Favor Preencha os Campos");
    } else {
    switch(selectConta){
        case "soma": 
            conta = input1 + input2;
        break;

        case "divisao":
            conta = input1 / input2;
        break;

        case "multiplicacao":
            conta = input1 * input2;
        break;

        case "subtracao":
            conta = input1 - input2;
        break;

        default:
            conta = "Opção inválida";
        break;
    }
}   

resultado.innerHTML = "Resultado: " + conta
})



