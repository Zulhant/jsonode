import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DB_URL } from './config/database';

import RouterPetani from './router/Router-Petani';
import RouterUser from './router/router-users';
import RouterParmerGroup from './router/Router-FarmerGroup';
import { validateAndDecodedToken } from './middlewares/validationAndDecodedToken'

export const serviceAccount = require('../../key-api.json');

const app = express();

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
app.use('/parmer_group', RouterParmerGroup)

exports.api = functions.https.onRequest(app);

