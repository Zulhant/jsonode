import * as express from 'express';
import { DB } from '../../index';
import { PETANI_ID } from '../../config/params';
import { Request, Response } from 'firebase-functions';



export const updateData = async (req: Request, res: Response) => {
   const idData = req.params[PETANI_ID];

   try {
      await DB.collection('petani').doc(idData).update(req.body);
      res.jsonp({
         code: 200,
         data: 'success'
      })

   } catch (error) {
      res.jsonp({
         code: 400,
         data: error
      })
   }
}