async function buscaEndereco(){
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/');
    var consultaCepConvertida = consultaCep.json();
    console.log(consultaCepConvertida);
}

buscaEndereco();