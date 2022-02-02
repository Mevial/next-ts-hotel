import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';

const sequelize = require('./../util/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const allowedOrigins = ['http://localhost:8000', 'http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.use('/rooms', router);

async function throwsError () {
  throw new Error('Error!');
}

app.get('/error', async (req, res) => {
  try {
    await throwsError();
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send('Something bad happened');
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
