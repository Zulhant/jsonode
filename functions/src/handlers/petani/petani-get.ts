import * as express from 'express';
import { DB } from '../../index';
import { PETANI_ID, PETANI_TYPE } from '../../config/params';
import responGenerator from '../../helpers/helpers-response';
import { Request } from 'express';
import { Response } from 'firebase-functions';


export const getAllPetani = async (req: Request, res: Response) => {
   try {
      const snapOfPetani = await DB.collection('petani').get();
      if (snapOfPetani) {
         const alldata = [];
         snapOfPetani.forEach(documentOfpetani => {
            const datapetani = documentOfpetani.data()
            datapetani.id = documentOfpetani.id
            alldata.push(datapetani);
         })

         res.jsonp(
            responGenerator.success(alldata)
         )
      }
   } catch (error) {
      res.jsonp(
         responGenerator.bad_request(error)
      )
   }
}


