import {request} from "./request";

export function changePassWord(userid,oldpassword,newpassword){
    return request({
        url:'/changepassword',
        params: {
          userid,
          oldpassword,
          newpassword
        }
    })
}

export function getProfilePlus(userid){
  return request({
    url : '/getprofileplus',
    params : {
      userid
    }
  })
}

export function getCollectionData(userid){
  return request({
    url : '/getcollectiondata',
    params : {
      userid
    }
  })
}