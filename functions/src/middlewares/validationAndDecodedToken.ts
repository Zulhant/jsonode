import * as express from 'express';
import { auth } from 'firebase-admin';
import { Request } from 'firebase-functions';
import { Response } from 'express';
import { NextFunction } from 'express-serve-static-core';


export const validateAndDecodedToken = async (req: Request, res: Response, next: NextFunction) => {
   let requestAuth = req.headers['authorization'];
   try {
      if (requestAuth) {
         requestAuth = requestAuth.toString().replace(/^Bearer\*/i, '');
         const claim = auth().verifyIdToken(requestAuth);
         res.locals = { ...claim }
      } else {
         console.log('unauthorization');
      }
   } catch (error) {
      console.log(error)
   }

}