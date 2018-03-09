import * as express from 'express';
import responGenerator from '../../helpers/helpers-response';
import { DB } from '../../index';
import { USER_ID } from '../../config/params'
import * as admin from 'firebase-admin';
import { Request, Response } from 'firebase-functions';


export const updateUser = async (req: Request, res: Response) => {
   const userId = req.params[USER_ID];
   try {
      const user = await admin.auth().updateUser(userId, {
         email: req.body.email,
         phoneNumber: req.body.phoneNumber,
         displayName: req.body.displayName
      })

      if (user) {
         res.jsonp(
            responGenerator.success(user)
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}