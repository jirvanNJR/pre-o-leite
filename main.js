document.getElementById('leiteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const quantidadeLeite = parseFloat(document.getElementById('quantidadeLeite').value);
    const precoPorLitro = 2.5; // Defina o preço por litro aqui

    const precoTotal = quantidadeLeite * precoPorLitro;

    document.getElementById('resultado').innerText = `Preço Total: R$ ${precoTotal.toFixed(2)}`;
});
