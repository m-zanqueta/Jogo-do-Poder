let msg=document.getElementById("msg");
let btn=document.getElementById("btn");


msg.innerHTML = ("Você acorda em um lugar estranho. Uma sala escura. A única coisa à vista é uma tela esverdeada, com algo escrito. Logo abaixo dessa tela um campo a ser preenchido...");

btn.addEventListener("click", parte1);

function parte1()
{   
    let nome=prompt("Olá! Sou a Karen e vou te ajudar na sua saída daqui. Como você se chama?");
    let lugar=prompt(`Prazer ${nome}! Onde você gostaria de estar agora?`);
    let vilao=prompt(`Uau, nunca fui para ${lugar}... Estou presa aqui a 230 anos, desde que este local foi construido. Enfim, quem você acha que te prendeu aqui?`);
   
    msg.innerHTML=("A tela muda quando você digita esse nome, juntamente com sua cor, ficando mais avermelhada.");
    
    btn.innerHTML = "Ler";
    btn.removeEventListener("click", parte1);
    btn.addEventListener("click", parte2);
    function parte2()
    {
        alert(`MUAHAHAHAHA! FuI eU mEsMo, ${vilao} QuE tE pReNdI aQuI e VoCê NuNcA sAiRá!`);
        alert(`Não se preocupe! Sou eu, a Karen novamente. Não posso me distrair por nem um minuto!`);
        alert(`Você quer ir para ${lugar}, certo? Finalmente consegui acessar o sistema de segurança de todo esse lugar.`);
        alert(`Agora consigo resgatar a pergunta de segurança que ${vilao} colocou. Assim você pode digitar a senha e a porta abrirá!`);
        alert("Com sua ajuda podemos sair daqui. Aceita me ajudar desvendar esse código? É nossa única saída.");

        btn.innerHTML = "Desvendar Código";
        btn.removeEventListener("click", parte2);
        btn.addEventListener("click", parte3);
        function parte3()
        {
            let enigma=prompt(`A pergunta é: A quanto tempo que ${vilao} construiu esse local?`);

            if(enigma == "230")
            {
                msg.innerHTML = (`A porta finalmente se abre! Você se depara com ${lugar}.`);
                alert("PERFEITO, agora estamos livres!");
                alert("Aqui é mesmo lindo... Obrigada por ter me ajudado a escapar dessa sala escura.");
                btn.innerHTML = "Jogar Novamente";
                btn.removeEventListener("click", parte3);
                btn.addEventListener("click", parte1);
            }
            else
            {
                alert("Aaaah, infelizmente você errou. Consegui abafar os sistemas de alarme, mas preciso que você não erre dessa vez. Consegue agora?");
                return enigma;
            }
        } 
    }    
}
