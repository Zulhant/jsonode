import * as express from 'express';
import { DB } from '../../index';
import responGenerator from '../../helpers/helpers-response';
import { Request } from 'express';
import { Response } from 'firebase-functions';

export const postGroupOfFarmer = async (req: Request, res: Response) => {
   const { name, address, location } = req.body;
   try {
      await DB.collection('groufOfParmer').doc(req.body.name).set(req.body);
      res.jsonp(
         responGenerator.success('success to add data of goup parmer')
      )
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}