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