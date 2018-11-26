import express from 'express';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import find from 'lodash/find';

const PORT = 3001;
const PRODUCTSLIST = './productslist.json';
// const GAMES = './games.json';
const app = express();

const generateId = () =>
  `id-${+new Date()}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

// app.use(
//   cors({
//     origin: 'http://localhost:3001',
//     optionsSuccessStatus: 200,
//   }),
// );
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/productslist', (req, res) => {
  let toSend;
  if (fs.existsSync(PRODUCTSLIST)) {
    const productslist = fs.readFileSync(PRODUCTSLIST);
    toSend = productslist.toString();
  } else {
    toSend = [];
  }
  setTimeout(() => res.send(toSend), 1000);
});

app.post('/productslist', (req, res) => {
  let productslist;
  const id = generateId();
  if (fs.existsSync(PRODUCTSLIST)) {
      productslist = JSON.parse(fs.readFileSync(PRODUCTSLIST).toString());
  } else {
      productslist = [];
  }
  fs.writeFileSync(
      PRODUCTSLIST,
    JSON.stringify([
      ...productslist,
      {
        ...req.body,
        // finished: +new Date(),
        id,
      },
    ]),
  );
  setTimeout(() => res.send(id), 2000);
});

// app.get('/games', (req, res) => {
//   let toSend;
//   if (fs.existsSync(GAMES)) {
//     const games = fs.readFileSync(GAMES);
//     toSend = games.toString();
//   } else {
//     toSend = null;
//   }
//   setTimeout(() => res.send(toSend), 2000);
// });

// app.get('/game', (req, res) => {
//   let toSend;
//   const { id } = req.query;
//   if (id && fs.existsSync(GAMES)) {
//     const games = JSON.parse(fs.readFileSync(GAMES).toString());
//     toSend = find(games, { id });
//   } else {
//     toSend = null;
//   }
//   setTimeout(() => {
//     if (toSend) {
//       res.send(toSend);
//     } else {
//       res.status(404).send('Not Found');
//     }
//   }, 2000);
// });
//
// app.post('/game', (req, res) => {
//   let games;
//   const id = generateId();
//   if (fs.existsSync(GAMES)) {
//     games = JSON.parse(fs.readFileSync(GAMES).toString());
//   } else {
//     games = [];
//   }
//   fs.writeFileSync(
//     GAMES,
//     JSON.stringify([
//       ...games,
//       {
//         ...req.body,
//         saved: +new Date(),
//         id,
//       },
//     ]),
//   );
//   setTimeout(() => res.send(id), 2000);
// });

console.log(`listening on port ${3001}`);
app.listen(PORT);
