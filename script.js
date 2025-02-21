function Soma() {
    let numero1js = Number(document.getElementById("numero1").value);
    let numero2js = Number(document.getElementById("numero2").value);
    let numero3js = Number(document.getElementById("numero3").value);

    let resposta = numero1js + numero2js + numero3js;

    let divrespostajs = document.getElementById("divresposta");
    document.getElementById("divresposta").style.display="block"
    document.getElementById("divresposta").style.border="gray solid"
    divrespostajs.innerHTML = ("A soma é igual a: "+ resposta);
}
