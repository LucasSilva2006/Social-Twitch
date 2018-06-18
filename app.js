//Importa a Bibloteca
const tmi = require("tmi.js");

//Configuração do Bot
const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "Nome do Bot",
        password: "Auth twitch"
    },
    channels: ["canal que o bot funcionara"]
};

const client = new tmi.client(options);


// Conectar o cliente com o servidor
client.connect();

//Açoes do Bot
client.on("chat", (channel, user, message, self) =>{
//----------------------------------------------------
	//Links Uteis para usuarios
//----------------------------------------------------

//Envia ao usuario o Link do Facebook
	if(message === "!facebook"){
		client.action("", "Link do Facebook");
	}

//Envia ao usuario o Link do Youtube
	if(message === "!youtube") {
		client.action("c", user["display-name"] + " Link do canal do youtube")
	}


//Envia ao usuario o Link do Discord
	if(message === "!discord") {
		client.action("", user["display-name"] + " Link do canal no Discord")
	}



//----------------------------------------------------
	//Games
//----------------------------------------------------
	if(message === "!slots") {
		var n1 = Math.floor(Math.random() * (7 - 1 + 1) + 1);
		var n2 = Math.floor(Math.random() * (7 - 1 + 1) + 1);
		var n3 = Math.floor(Math.random() * (7 - 1 + 1) + 1);

		if(n1 == 7 & n2 == 7 & n3 == 7){
			client.action("", user["display-name"] + " Resultado: [" + n1 +"][" + n2 +"][" + n3 +"] Ganhou!");
		}

		else{
			client.action("", user["display-name"] + " Resultado: [" + n1 +"][" + n2 +"][" + n3 +"] Perdeu!")
		}
	}


//----------------------------------------------------
	//Comandos do Proprio BOT
//----------------------------------------------------

//Envia ao usuario o Link do Facebook
	if(message === "!version"){
		client.action("", "Estou na versão 1.0.0");
	}



});