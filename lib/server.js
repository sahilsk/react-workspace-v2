import express from 'express';
import config from './config';
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) =>  {
  res.render('index', {'answer': 43 });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});