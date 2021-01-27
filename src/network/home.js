import {request} from "./request";

export function getRecommendData(){
    return request({
        url:'/recommend'
    })
}

export function getCityData(){
    return request({
        url:'/city'
    })
}