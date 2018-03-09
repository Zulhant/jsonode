import * as express from 'express';
import { DB } from '../../index';
import * as admin from 'firebase-admin';
import responGenerator from '../../helpers/helpers-response';
import { Request, Response } from 'firebase-functions';


export const sigUp = async (req: Request, res: Response) => {
   try {
      const addUser = await admin.auth().createUser({
         email: req.body.email,
         phoneNumber: req.body.phoneNumber,
         displayName: req.body.displayName,
         password: req.body.password
      })

      if (addUser) {
         admin.auth().setCustomUserClaims(addUser.uid, { level: 'admin' });
         res.jsonp(
            responGenerator.success('success add data users')
         )
      }

   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}