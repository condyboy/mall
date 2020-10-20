import {requestNetwork} from './index'

export function getDetail(iid){
    return requestNetwork({
        url:"/detail",
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return requestNetwork({
        url:"/recommend"
    })
}

//封装了detail所用的所有的类
export class Detail{
    constructor(itemInfo,services,columns){
        this.title=itemInfo.title
        this.price=itemInfo.price
        this.desc = itemInfo.desc;
        this.nowprice=itemInfo.lowNowPrice
        this.oldPrice=itemInfo.oldPrice
        this.columns = columns;
        this.services = services;
        this.discount=itemInfo.discountDesc
    }
}

export class Shop{
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }
  

  export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }