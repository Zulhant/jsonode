import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DB_URL } from './config/database';

import RouterPetani from './router/Router-Petani';
import RouterUser from './router/router-users';
import { validateAndDecodedToken } from './middlewares/validationAndDecodedToken'

const app = express();

export const serviceAccount = require('../../key-api.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: DB_URL
});

app.use(
   cors({
      origin: true
   })
)

export const DB = admin.firestore();

// app.use(validateAndDecodedToken);


app.use('/petani', RouterPetani)
app.use('/user', RouterUser)
exports.api = functions.https.onRequest(app);

