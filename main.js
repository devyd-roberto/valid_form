        const formulario = document.getElementById('form-teste');
        
        
        function compararNumeros() {
            const numero1 = parseFloat(document.getElementById('number1').value);
            const numero2 = parseFloat(document.getElementById('number2').value);
            let mensagem;

            if (numero1 === numero2) {
                const mensagemErrada = document.querySelector ('.erro-mensagem');
                mensagem = "Os números são iguais.";
                mensagemErrada.innerHTML = mensagem;
                mensagemErrada.style.display = 'block';

                const mensagemCerta = document.querySelector ('#resultado');
                mensagemCerta.style.display = 'none';


            } else if (numero1 > numero2) {
                const mensagemErrada = document.querySelector ('.erro-mensagem');
                mensagem = "O número " + numero1 + " é maior que o número " + numero2 + " tente novamente.";
                mensagemErrada.innerHTML = mensagem;
                mensagemErrada.style.display = 'block';

                const mensagemCerta = document.querySelector ('#resultado');
                mensagemCerta.style.display = 'none';

            } else if (numero2 > numero1) {

                
                const mensagemCerta = document.querySelector ('#resultado');
                mensagem = "O número " + numero2 + " é maior que o número " + numero1 + " prosseguir.";
                mensagemCerta.innerHTML = mensagem;
                mensagemCerta.style.display ='block';

                const mensagemErrada = document.querySelector ('.erro-mensagem');
                mensagemErrada.style.display ='none';
            }

            
        }

        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            compararNumeros();
        });