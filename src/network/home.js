import {requestNetwork} from './index'

export function getHomeMultidata(){
    return requestNetwork({
        url:"/home/multidata"
    })
}


export function getHomeData(type,page){
    return requestNetwork({
        url:"/home/data",
        params:{
            type,
            page
        }
    })

}