import * as express from 'express';
import * as admin from 'firebase-admin';
import responGenerator from '../../helpers/helpers-response';
import { USER_ID } from '../../config/params';
import { Request, Response } from 'firebase-functions';


export const getUser = async (req: Request, res: Response) => {
   const email = req.params[USER_ID]
   try {
      const user = await admin.auth().getUserByEmail(email);
      console.log(user)
      if (user) {
         const { email, uid, displayName, customClaims } = user
         res.jsonp(
            responGenerator.success({
               email: email,
               uid: uid,
               displayName: displayName,
               level: customClaims
            })
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}