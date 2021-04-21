import {request} from "./request";

export function getRecommendData(){
    return request({
        url:'/getrecommenddata'
    })
}

export function getCityData(location){
    return request({
        url:'/getCitydata',
        params : {
            location
        }
    })
}

export function getCityInfo(){
    return request({
        url:'/cityData'
    })
}

export function getSearchData(search){
    return request({
        url : '/search',
        params : {
            search
        }
    })
}

export function getComment (p_id,page,page_size){
  return request({
      url : '/getcomment',
      params : {
          p_id,
          page,
          page_size
      }
  })
}

export function comment(p_id,content,userid){
  return request({
    url : '/comment',
    method : "POST",
    data : {
      p_id,
      content,
      userid
    }
  })
}