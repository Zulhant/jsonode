import * as express from 'express';
import responGenerator from '../../helpers/helpers-response';
import { GROUP_ID } from '../../config/params';
import { DB } from '../../index';
import { Request } from 'express';
import { Response } from 'firebase-functions';


export const getAllFarmer = async (req: Request, res: Response) => {
   try {
      const groupSnapshots = await DB.collection('groufOfParmer').get();
      if (!groupSnapshots.empty) {
         const groups = []
         groupSnapshots.forEach(documentOfGroup => {
            const data = documentOfGroup.data();
            data._id = documentOfGroup.id
            groups.push(data)
         })

         res.jsonp(
            responGenerator.success(groups)
         )

      } else {
         res.jsonp(
            responGenerator.success('data group of parmer kosong')
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}

export const getFarmer = async (req: Request, res: Response) => {
   const groupId = req.params[GROUP_ID];
   try {
      const groupSnapshot = await DB.collection('groufOfParmer').doc(groupId).get();
      if (groupSnapshot.exists) {
         const data = groupSnapshot.data();
         data.id = groupSnapshot.id
         res.jsonp(
            responGenerator.success(data)
         )
      } else {
         res.jsonp(
            responGenerator.empty_result
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}