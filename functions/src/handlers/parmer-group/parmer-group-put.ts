import * as express from 'express';
import { DB } from '../../index';
import responGenerator from '../../helpers/helpers-response';
import { GROUP_ID } from '../../config/params';
import { Request } from 'express';
import { Response } from 'firebase-functions';


export const putGroupOfFarmer = async (req: Request, res: Response) => {
   const groupId = req.params[GROUP_ID];
   try {
      if (groupId === 1) {
         await DB.collection('groufOfParmer').doc(groupId).update(req.body);
         res.jsonp(
            responGenerator.success('success update data')
         )
      } else {
         res.jsonp(
            responGenerator.bad_request('check your parameter id')
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}