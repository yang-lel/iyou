import {request} from './request'

export function getDetailsData(p_id){
  return request({
    url : '/getdetailsdata',
    params : {
      p_id 
    }
  })
}