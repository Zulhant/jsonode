import * as express from 'express';
import * as get from '../handlers/petani/petani-get';
import * as post from '../handlers/petani/petani-post';
import * as put from '../handlers/petani/petani-put';
import { PETANI_ID, PETANI_TYPE } from '../config/params';
import { Router } from 'express';



const RouterPetani = express.Router()

RouterPetani.get('/', get.getAllPetani);
RouterPetani.post('/', post.insertData)
RouterPetani.put(`/:${PETANI_ID}`, put.updateData)


export default RouterPetani;





