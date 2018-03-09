export interface ResponHelpers {
   code: Number,
   message: String,
   payload?: Object
}


function buildResponse(code: Number, message: String, payload?: Object): ResponHelpers {
   return <ResponHelpers>{
      code: code,
      message: message,
      payload: payload
   }
}


export default class responGenerator {
   static success(payload: Object | String): ResponHelpers {
      return typeof (payload === Object) ? buildResponse(200, 'success', payload) : buildResponse(200, 'kosong', payload)
   }

   static empty_result(): ResponHelpers {
      return buildResponse(400, 'data tidak ditemukan')
   }

   static bad_request(message: String): ResponHelpers {
      return buildResponse(500, message);
   }

   static unauthorization(): ResponHelpers {
      return buildResponse(401, 'unathorization');
   }
}