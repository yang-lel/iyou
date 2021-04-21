<template>
  <div id="shop">
    <nav-bar class="nav">
       <div slot="left" class="left_nav">商城</div>
       <div slot="middle">
         <input type="text" placeholder="请输入关键字" name="" id="seach">
         <img class="seach_icon" src="../../assets/搜索.png" alt="">
       </div>
       <div slot="right" class="right_nav">
         <img class="nav_icon" src="../../assets/搜索.png" alt="">
       </div>
    </nav-bar>
    <div class="content">
      <div class="ad">
        <img src="../../assets/shop_banner.jpg" alt="">
      </div>
      <div class="corgty">
        <div class="item_cgy">
          <div class="cgy_icon" style="background-color: #F96927;"><img src="../../assets/机票.png" alt=""></div>
          <div class="cgy_title">机票</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon" style="background-color: #3B7CFF;"><img src="../../assets/_火车票.png" alt=""></div>
          <div class="cgy_title">火车票</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon" style="background-color: #F96927;"><img src="../../assets/旅游票务 (1).png" alt=""></div>
          <div class="cgy_title">船票</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon" style="background-color: #91B5FD;"><img src="../../assets/_汽车票.png" alt=""></div>
          <div class="cgy_title">汽车票</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon"><img src="../../assets/旅游主题_方旗.png" alt=""></div>
          <div class="cgy_title">自由行</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon"><img src="../../assets/旅游主题_日光浴.png" alt=""></div>
          <div class="cgy_title">主题游</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon"><img src="../../assets/旅游.png" alt=""></div>
          <div class="cgy_title">海滩游</div>
        </div>
        <div class="item_cgy">
          <div class="cgy_icon"><img src="../../assets/旅游购物.png" alt=""></div>
          <div class="cgy_title">旅游购物</div>
        </div>

      </div>
      <div class="recommend">
        <div class="content_title">为您推荐</div>
        <div class="recommend_content">
          <div class="recommend_item">
            <img class="item_img" src="../../assets/微信图片_20210410201017.jpg">
            <div class="item_title">成都动物园</div>
            <div class="star">
              <el-rate
                value='5'
                disabled
                text-color="#ff9900">
              </el-rate>
            </div>
            <div class="item_info">
              53355条评论
            </div>
          </div>
          <div class="recommend_item">
            <img class="item_img" src="../../assets/微信图片_20210410200732.jpg">
            <div class="item_title">成都动物园</div>
            <div class="star">
              <el-rate
                value='5'
                disabled
                text-color="#ff9900">
              </el-rate>
            </div>
            <div class="item_info">
              53355条评论
            </div>
          </div>
          <div class="recommend_item">
            <img class="item_img" src="../../assets/微信图片_20210410201007.jpg">
            <div class="item_title">成都动物园</div>
            <div class="star">
              <el-rate
                value='5'
                disabled
                text-color="#ff9900">
              </el-rate>
            </div>
            <div class="item_info">
              53355条评论
            </div>
          </div>
          <div class="recommend_item">
            <img class="item_img" src="../../assets/微信图片_20210410201021.jpg">
            <div class="item_title">成都动物园</div>
            <div class="star">
              <el-rate
                value='5'
                disabled
                text-color="#ff9900">
              </el-rate>
            </div>
            <div class="item_info">
              53355条评论
            </div>
          </div>
          <div class="recommend_item">
            <img class="item_img" src="../../assets/微信图片_20210410200732.jpg">
            <div class="item_title">成都动物园</div>
            <div class="star">
              <el-rate
                value='5'
                disabled
                text-color="#ff9900">
              </el-rate>
            </div>
            <div class="item_info">
              53355条评论
            </div>
          </div>
        </div>
      </div>
      <div class="iyou">
        <div class="content_title">IYOU精选</div>
        <div class="iyou_item">
          <img class="item_img" src="../../assets/微信图片_20210410200634.png" alt="">
          <div class="iyou_info">
            <div class="item_title">西岭雪山</div>
            <div class="info_box">
              <el-rate
              value="5"
              disabled
              text-color="#ff9900">
            </el-rate>
            <div class="item_info">11024人评价</div>
            </div>
            <div class="item_desc">自然风光 | 西岭雪山 | 据我87.2KM</div>
            <div class="info_box">
              <div class="item_preic">￥59</div>
              <div class="item_tips">可定明日</div>
            </div>
          </div>
        </div>
        <div class="iyou_item">
          <img class="item_img" src="../../assets/微信图片_20210410200634.png" alt="">
          <div class="iyou_info">
            <div class="item_title">西岭雪山</div>
            <div class="info_box">
              <el-rate
              value="5"
              disabled
              text-color="#ff9900">
            </el-rate>
            <div class="item_info">11024人评价</div>
            </div>
            <div class="item_desc">自然风光 | 西岭雪山 | 据我87.2KM</div>
            <div class="info_box">
              <div class="item_preic">￥59</div>
              <div class="item_tips">可定明日</div>
            </div>
          </div>
        </div>
        <div class="iyou_item">
          <img class="item_img" src="../../assets/微信图片_20210410200634.png" alt="">
          <div class="iyou_info">
            <div class="item_title">西岭雪山</div>
            <div class="info_box">
              <el-rate
              value="5"
              disabled
              text-color="#ff9900">
            </el-rate>
            <div class="item_info">11024人评价</div>
            </div>
            <div class="item_desc">自然风光 | 西岭雪山 | 据我87.2KM</div>
            <div class="info_box">
              <div class="item_preic">￥59</div>
              <div class="item_tips">可定明日</div>
            </div>
          </div>
        </div>
        <div class="iyou_item">
          <img class="item_img" src="../../assets/微信图片_20210410200634.png" alt="">
          <div class="iyou_info">
            <div class="item_title">西岭雪山</div>
            <div class="info_box">
              <el-rate
              value="5"
              disabled
              text-color="#ff9900">
            </el-rate>
            <div class="item_info">11024人评价</div>
            </div>
            <div class="item_desc">自然风光 | 西岭雪山 | 据我87.2KM</div>
            <div class="info_box">
              <div class="item_preic">￥59</div>
              <div class="item_tips">可定明日</div>
            </div>
          </div>
        </div>
        <div class="iyou_item">
          <img class="item_img" src="../../assets/微信图片_20210410200634.png" alt="">
          <div class="iyou_info">
            <div class="item_title">西岭雪山</div>
            <div class="info_box">
              <el-rate
              value="5"
              disabled
              text-color="#ff9900">
            </el-rate>
            <div class="item_info">11024人评价</div>
            </div>
            <div class="item_desc">自然风光 | 西岭雪山 | 据我87.2KM</div>
            <div class="info_box">
              <div class="item_preic">￥59</div>
              <div class="item_tips">可定明日</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'

export default {
  name  : 'Shop',
  components:{
    NavBar
  }
}
</script>

<style scoped>
#shop{
  height: 100%;
  background: #F5F7F9;
  /* overflow: hidden; */
}
.nav{
  position: relative;
}
.right_nav .nav_icon{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 10px;
  z-index: 9999;
}
.left_nav{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
}
#seach{
  position: absolute;
  width: 65%;
  height: 30px;
  border: 1px rgba(200, 209, 219, 0.8) solid;
  top: 5px;
  left: 70px;
  border-radius: 30px;
  z-index: 9999;
  padding-left: 30px;
  font-size: 14px;
  outline: none;
}
.nav .seach_icon {
  width: 18px;
  height: 18px;
  position: absolute;
  z-index: 99999;
  left: 80px;
  top: 11px;
}

.ad{
  width: 95%;
  margin-left: 2.5%;
  border-radius: 30px;
  overflow: hidden;
  height: 100px;
  margin-top: 50px;
}
.corgty{
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item_cgy{
  width: 80px;
  height: 80px;
  text-align: center;
  margin-top: 20px;
}
.cgy_icon{
  width: 60px;
  height: 60px;
  margin-left: 10px;
  text-align: center;
  border-radius: 100%;
}
.cgy_icon img{
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 80px;
  margin-top: 10px;
}
.cgy_title{
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
.content_title{
  font-size: 18px;
  font-weight: 600;
  color: #222328;
}
.recommend{
  margin-left: 5%;
  margin-top: 20px;
}
.recommend_content{
  height: 250px;
  width: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.recommend_content .recommend_item{
  height: 100%;
  width: 150px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.recommend_content .recommend_item .item_img{
  width: 150px;
  height: 180px;
  border-radius: 6px;
}
.recommend_content .recommend_item .item_title{
  font-size: 16px;
  line-height: 25px;
  height: 25px;
  color: #222328;
  font-weight: 600;
  margin-left: 5px;
  margin-top: 5px;
}
.star{
  margin-left: 5px;
} 
.recommend_content .recommend_item .item_info{
  margin-left: 5px;
}
.iyou{
  width: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
}
.iyou .content_title{
  margin-left: 5%;
}
.iyou_item{
  width: 100%;
  padding: 15px 5%;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  margin-bottom: 10px;
}
.iyou_info{
  margin-left: 10px;
}
.iyou_item .item_img{
  width: 100px;
  height: 100px;
  border-radius: 6px;
}
.iyou_item .item_title{
  font-size: 18px;
  font-weight: 600;
  color: #222328;
}
.iyou_item .item_info{
  display: inline-block;
}
.iyou_item .info_box{
  display: flex;
  height: 20px;
  line-height: 20px;
}
.iyou_item .item_desc{
  font-size: 14px;
  line-height: 30px;
}
.iyou_item .item_preic{
  color: red;
  font-size: 18px;
}
.iyou_item .item_tips{
  font-size: 14px;
  color: #3B7CFF;
  background-color: #E7F1FF;
  padding: 0 5px;
  margin-left: 10px;
}
</style>