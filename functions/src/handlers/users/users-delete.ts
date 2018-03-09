import * as express from 'express';
import * as admin from 'firebase-admin';
import { USER_ID } from '../../config/params';
import responGenerator from '../../helpers/helpers-response';
import { Request, Response } from 'firebase-functions';


export const removeUser = async (req: Request, res: Response) => {
   const userId = req.params[USER_ID];
   try {
      await admin.auth().deleteUser(userId);
      res.jsonp(
         responGenerator.success('success')
      )
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}



