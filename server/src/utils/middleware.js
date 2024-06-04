const { exec } = require('child_process');

const sendErrorMessage = (errorMessage) => {
  exec(
    `/usr/bin/curl --silent -X POST --data-urlencode "chat_id=-1002122748237" --data-urlencode "text='${errorMessage}'" "https://api.telegram.org/bot7071425947:AAFp0gGd4cyth77n0RdfDfqXEv7PaNM9x_w/sendMessage?disable_web_page_preview=true&parse_mode=html"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao enviar mensagem para o Telegram: ${error.message}`);
      }
    }
  );
};

const errorMiddleware = (err, req, res, next) => {
  console.error(err); 
  
  const errorMessage = `Erro na rota ${req.path}: ${err.message}`;

  sendErrorMessage(errorMessage);

  res.status(500).json({ message: 'Ocorreu um erro interno. Estamos trabalhando nisso.' });
};

module.exports = { errorMiddleware, sendErrorMessage };
