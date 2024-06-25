function registrarLogin() {
    localStorage.setItem('registroLogin', registroLogin)
    let dataAtual = new Date();


    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; 
    let ano = dataAtual.getFullYear();
    let hora = dataAtual.getHours(); 
    let minuto = dataAtual.getMinutes(); 
    let segundo = dataAtual.getSeconds(); 

    registroLogin = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}



// ---------------------------------------------------------------------------------------------------------
function verificarUsuario() {
        let bancoDadosCadastro = localStorage.getItem('bancoDadosCadastro');

        let emailUsuario = document.getElementById("usuario")
        let emailUsuarioValor = emailUsuario.value
    
        if (bancoDadosCadastro) {
    
            bancoDadosCadastro = JSON.parse(bancoDadosCadastro);
    
            for (let i = 0; i < bancoDadosCadastro.length; i++) {
    
                if (email !== bancoDadosCadastro[i].email) {
    
                    console.log("Email não encontrado");
        
                    const erroEmail = document.createElement("p");
                    erroEmail.innerText = "Email não cadastrado";
                    erroEmail.style.color = "red";
                    erroEmail.classList.add("erro-email");
            
                    const emailLabel = document.getElementById("usuario").parentElement;
                    let erroExistente = emailLabel.querySelector(".erro-email");
            
                    if (!erroExistente) {
    
                        emailLabel.appendChild(erroEmail);
                    }
        
                    return true;
                }
            }
        }
        return false;

}



// ---------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    let bancoDadosObjeto; // Variável para armazenar os dados do localStorage

    // Função para carregar o banco de dados do localStorage
    function carregarBancoDados() {
        bancoDadosObjeto = JSON.parse(localStorage.getItem('bancoDados')) || {};
    }

    // Carregar os dados do localStorage ao carregar a página
    carregarBancoDados();

    // Botão de entrar
    let btnEntrar = document.getElementById("botao-entrar");

    btnEntrar.addEventListener("click", entrarHome);

    function entrarHome() {
        // let usuario = document.getElementById("usuario").value; // Obter o valor do usuário
        // let senha = document.getElementById("senha").value; // Obter o valor da senha

        // // Verifica se o usuário existe no banco de dados
        // let usuarioEncontrado = false;

        // for (let id in bancoDadosObjeto) {
        //     let usuarioAtual = bancoDadosObjeto[id];
        //     if (usuario === usuarioAtual.email) {
        //         usuarioEncontrado = true;
        //         // Verifica a senha
        //         if (senha === usuarioAtual.senhaCadastro) {
        //             console.log(`Login bem-sucedido! Usuário: ${usuario}`);

        //             // Exemplo de acesso à chave [2] e [4] (supondo que são propriedades do usuário)
        //             if (usuarioAtual.hasOwnProperty('2')) {
        //                 console.log(`Valor da chave [2]: ${usuarioAtual['2']}`);
        //             } else {
        //                 console.log(`Chave [2] não encontrada para o usuário.`);
        //             }

        //             if (usuarioAtual.hasOwnProperty('4')) {
        //                 console.log(`Valor da chave [4]: ${usuarioAtual['4']}`);
        //             } else {
        //                 console.log(`Chave [4] não encontrada para o usuário.`);
        //             }

        //             localStorage.setItem('loginEfetuado', `Login Efetuado: ${usuario}`);

        window.location.href = '../home/home.html';
        //             return; // Sai da função pois o login foi validado
        //         } else {
        //             exibirErro("Senha inválida, tente novamente");
        //             return; // Sai da função pois a senha está incorreta
        //         }
        //     }
        // }

        // // Se o usuário não foi encontrado
        // if (!usuarioEncontrado) {
        //     exibirErro("Usuário inválido, tente novamente");
        // }
    }

    // Função para exibir mensagens de erro na interface
    function exibirErro(mensagem) {
        const erroLogin = document.getElementById("erro-login");
        erroLogin.style.display = 'block';
        erroLogin.innerHTML = mensagem;
    }
});

    // Remember
    let btnLembrarUsuario = document.getElementById("lembrar-usuario");

    btnLembrarUsuario.addEventListener('click', lembrarUsuario);

    function lembrarUsuario() {
        if (btnLembrarUsuario.checked) {
            localStorage.setItem("lembrarUsuario", "true");
        } else {
            localStorage.removeItem("lembrarUsuario");
        }
    }

    // Esqueci a senha
    let esqueciSenha = document.getElementById("esqueci-senha");

    esqueciSenha.addEventListener("click", function() {
        // Redireciona para a página de recuperação de senha
        window.location.href = "/Esquecer Senha/esquecer_senha.html";
    });

