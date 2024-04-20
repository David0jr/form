//Validação de CEP
document.addEventListener("DOMContentLoaded", () => {
    const cep = document.querySelector("#cep");
    const rua = document.querySelector("#rua");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const uf = document.querySelector("#uf");

    // Validando o cep
    cep.addEventListener("keypress", (e) => {
        const onlynumbers = /[0-9-]/; // Permitindo números e "-"
        const key = String.fromCharCode(e.keyCode);

        console.log(e.keyCode);
        console.log(key);

        if (!onlynumbers.test(key)) {
            e.preventDefault();
        }
    });

    cep.addEventListener("keyup", (e) => {
        const inputValue = e.target.value;

        if (inputValue.length === 8) {
            getAddress(inputValue);
        }
    });

    const getAddress = async (cepValue) => {
        cep.blur(); // Chamando blur() no elemento cep

        const apiUrl = `https://viacep.com.br/ws/${cepValue}/json/`; 
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.erro === "true") {
            alert("CEP inválido!");
            cep.focus(); // Chamando focus() no elemento cep
            return;
        }

        console.log(data);

        rua.value = data.logradouro;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        uf.value = data.uf;
    
    };
//Fim da validação do CEP

// validação dos botões
//botão próximo
var btn = document.querySelector("#proximo");
var sectionEndereco = document.querySelector('#section-endereço');

btn.addEventListener("click", () => { 
    if (sectionEndereco.style.display === 'none') {
        sectionEndereco.style.display = 'block';
    } else {
        sectionEndereco.style.display = 'block';
    }
});
var btn = document.querySelector("#proximo");
var sectionCadastro = document.querySelector('#section-cadastro');

btn.addEventListener("click", () => {   
    if (sectionCadastro.style.display !== 'none') {
        sectionCadastro.style.display = 'none';
    } else {
        sectionCadastro.style.display = 'block';
    }
});
//botão voltar
var btnVoltar = document.querySelector("#voltar");
var sectionCadastro = document.querySelector('#section-cadastro');
var sectionEndereco = document.querySelector('#section-endereço');

btnVoltar.addEventListener("click", (event) => {
    // Previne o comportamento padrão do link (evita que a página seja recarregada)
    event.preventDefault();
    
    // Exibe a seção de cadastro
    sectionCadastro.style.display = 'block';
    // Oculta a seção de endereço
    sectionEndereco.style.display = 'none';
});

});
