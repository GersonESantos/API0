import express from 'express';
const app = express();
app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.send('Ok Get Deu Certo');
    // res.status(200).json(users);
   });

app.post('/usuarios', (req, res) => {
  
  console.log(req.body);
  
  res.send('Ok Post Deu Certo');
  });
  
app.listen(3000, () => {
    console.log('🚀Rodando server/r76 listening at http://localhost:3000');
  });
  