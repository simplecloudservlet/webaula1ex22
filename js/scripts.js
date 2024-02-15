
function avaliarCompra() {
    let rotuloAvaliacao = document.getElementById('rotuloAvaliacao');

    let x = parseInt( document.getElementById('notas').value);

    rotuloAvaliacao.innerHTML = 'Avaliação da compra: ';
    if(x==0){
        rotuloAvaliacao.innerHTML += 'Ruim';
        rotuloAvaliacao.style.color = "#ff0000";
    } else {
        if(x==5){
            rotuloAvaliacao.innerHTML += 'Razoável';
            rotuloAvaliacao.style.color = "#00ff00";
        } else {
            rotuloAvaliacao.innerHTML += 'Ótimo';
            rotuloAvaliacao.style.color = "#0000ff";
        }
    }

}










var compra = false;
function comprar() {

    let imagem = document.getElementById('carrinho');
    
    compra = !compra; //Inverte o valor atual que está em memória

    if(compra){
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }
    
}