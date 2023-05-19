const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/paises') {
    const filePath = path.join(__dirname, 'paises.json');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    // Lê o arquivo paises.json e converte para objeto JavaScript
      if (err) {
        console.error(err);
        res.end(JSON.stringify({ error: 'Falha ao ler o arquivo de países.' }));
        return;
      }

      // Converte o conteúdo do arquivo para objeto JSON
      const countries = JSON.parse(data);

      // Filtra os países que começam com a letra "B"
      const countriesStartingWithB = [];
      countries.forEach((country) => {
        if (country.name.startsWith('B')) {
          countriesStartingWithB.push(country);
        }
      });

      // Envia a resposta com os países filtrados em formato JSON
      res.end(JSON.stringify(countriesStartingWithB));

    }
      else{
        const filePath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(filePath);
    
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        });
    
        readStream.pipe(res);
      }
    }).

  listen(8000);

console.log('Visite-me em: http://localhost:8000');
