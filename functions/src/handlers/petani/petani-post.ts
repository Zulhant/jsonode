import * as express from 'express';
import { PETANI_ID, PETANI_TYPE } from '../../config/params';
import { Response } from 'express-serve-static-core';
import { Request } from 'firebase-functions';
import { DB } from '../../index';



export const insertData = async (req: Request, res: Response) => {
   try {
      await DB.collection('petani').add(req.body);
      res.jsonp({
         code: 200,
         data: 'success'
      })
   } catch (error) {
      res.jsonp({
         code: 400,
         error
      })
   }
} 