import * as express from 'express';
import { DB } from '../.././index';
import { GROUP_ID } from '../../config/params';
import responGenerator from '../../helpers/helpers-response';
import { Request } from 'express';
import { Response } from 'firebase-functions';


export const deleteGroupOfFarmer = async (req: Request, res: Response) => {
   const idGroup = req.params[GROUP_ID];
   try {
      if (idGroup !== null) {
         await DB.collection('groufOfParmer').doc(idGroup).delete();
         res.jsonp(
            responGenerator.success('sukses delete data')
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}