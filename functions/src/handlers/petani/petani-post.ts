import * as express from 'express';
import { PETANI_ID, PETANI_TYPE } from '../../config/params';
import { Response } from 'express-serve-static-core';
import responGenerator from '../../helpers/helpers-response';
import { Request } from 'firebase-functions';
import { DB } from '../../index';



export const insertData = async (req: Request, res: Response) => {
   try {
      await DB.collection('petani').add(req.body);
      res.jsonp(
         responGenerator.success('data sukses disimpan')
      )
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
} 