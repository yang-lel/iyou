<template>
    <div id="app" style="font-size: 14px;color: #292929;font-family: '微软雅黑'">
        <div class="mycity" >
            <span id="qyxs" style="color:#FF0000" @click="selectLocation()">{{location + '▼'}}</span>
        </div>
        <div v-show="isShowCitys" class="city">
              <div style="text-align: center;position: fixed;top: 0;height: 32px;width:100%;line-height: 32px;z-index: 300;background-color: #FFF;box-shadow: 0 0 2px rgba(0,0,0,.2)
              ">
                我的城市：&nbsp;&nbsp;<span id="qyxs" style="color:#FF0000">{{location}}</span>
              </div>
          <div class="city-wrapper city-wrapper-hook">
            <div class="scroller-hook">
              <div class="cities cities-hook">
                <div v-for="(i,index) in cityData" :key="index">
                    <div class="title">{{i.name}}</div>
                    <ul>
                        <li v-for="(item,index) in i.cities" class="item city-click" :data-name="item.name" :data-id="item.code" :key="index"><span class="border-1px name" @touchend="touchUp(item)"  @touchstart="chooseCity()">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="shortcut shortcut-hook" style="right: 50px;top:50px !important;" @touchstart="touchIndex">
                <ul style="width: 100px;text-align: left;padding: 20px 0">
                    <li v-for="(item,index) in cityData" :data-anchor="item.name" class="item" :key="index">{{item.name.substr(0, 1)}}</li>
                </ul>
            </div>
          </div>
        </div>

    </div>
  
</template>

<script>
import AMap from 'AMap' //引入高德地图AMap

import BScroll from 'better-scroll'

import {getCityInfo} from '../../../network/home'
export default {
  name : 'ChangeCity',
  data(){
    return {
            origin: 'http://192.168.99.205:800',
            captchaBoxShow: false,
            test: '测试',
            countTime: 0,
            countTimer: null,
            time: 60,
            location: '定位中',
            submit: {
                sms_captcha  : '',
                captcha      : '',
                area_code    : '',
                _token       : '',
            },
            map: new AMap.Map("container", {
                resizeEnable: true,
                zoom: 17, //地图显示的缩放级别
                keyboardEnable: true,
                citylimit: true,
                resizeEnable: true
            }),
            cityWrapper: document.querySelector('.city-wrapper-hook'),
            cityScroller: document.querySelector('.scroller-hook'),
            cities: document.querySelector('.cities-hook'),
            shortcut: document.querySelector('.shortcut-hook'),
            shortcutList: [],
            cityData: [],// 数据源
            scroll: null,
            anchorMap: {},
            touch: {},
            toastShow: false,
            isShowCitys: false,
            toastText: '',
        }
  },
        methods: {
          getCityInfo(){
            getCityInfo().then(res =>{
              this.cityData = res.cityData
            })
          },
            toast (str) {
                let v = this
                v.toastText = str
                v.toastShow = true
                setTimeout(function(){
                    v.toastShow = false
                }, 1500)
            },
            chooseCity () {
                let v = this
                v.countTime = 0
                v.countTimer = setInterval(function(e){v.countTime ++},1)
            },
            touchUp (item) {
                let v = this
                clearInterval(v.countTimer)
                if (v.countTime < 30) {
                    this.isShowCitys = false
                    this.location = item.name
                    this.submit.area_code = item.code
                }
            },
            selectLocation () {
                // let v = this
                this.isShowCitys = true
                this.$nextTick(function() {
                    this.initCities()
                })
            },
            geocoder_CallBack: function (data) {
                let v = this
                var adcode3     = data.regeocode.addressComponent.adcode;
                var address     = data.regeocode.formattedAddress; //返回地址描述
                var csqy        = data.regeocode.addressComponent.district; //地区
                var csadcode    = data.regeocode.addressComponent.adcode; //区域编码
                this.submit.area_code = csadcode
                var citycode2   = csadcode.substr(0, 4) + "00"; //省份编码
                var codes       = adcode3.substr(0, 4) + "00";
                var citys2      = data.regeocode.addressComponent.city;
                var poiArr      = data.regeocode.pois; //坐标
                var resultCount = poiArr.length;
                v.location      = csqy
                var dz          = data.regeocode.formattedAddress;
                var lng         = data.regeocode.roads[0].location.lng;
                var lat         = data.regeocode.roads[0].location.lat;
            },
            zddw() {
                //初始定位
                let v = this
                v.map.plugin('AMap.Geolocation', function() {
                    var geolocation = new AMap.Geolocation({
                        enableHighAccuracy: true, //是否使用高精度定位，默认:true
                        timeout: 5000, //超过10秒后停止定位，默认：无穷大
                        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        noIpLocate: 0, //IP定位，0-3，0都可以使用
                        noGeoLocation: 0, //浏览器定位 0-3,
                        showCircle: false, //去除定位蓝圈
                        buttonPosition: 'RT',
                        extensions: 'all'
                    });
                    v.map.addControl(geolocation);
                    geolocation.getCurrentPosition();
                    AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
                    AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息

                });
                //解析定位结果

                function onComplete(data) {
                    console.log('定位成功');
                    var str = [];
                    str.push(data.position.lng);
                    str.push(data.position.lat);
                    var geocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    geocoder.getAddress(str, function(status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            v.geocoder_CallBack(result);
                            
                        }
                    })
    }
                  //解析定位错误信息
                  function onError(data) {
                      console.log('定位失败');
                      console.log('失败原因排查信息:'+data.message); 
                  }
            },
            initCities() {
                let v = this
                let y = 0;
                  var titleHeight = 28
                  var itemHeight = 44
                  v.cityData.forEach(function(e){

                        let name = e.name.substr(0, 1)
                        console.log(name);
                        // console.log(y);
                        v.anchorMap[name] = y
                        let len = e.cities.length
                        
                       
                        y -= titleHeight + len * itemHeight 
                        // console.log(titleHeight,len,itemHeight);
                        
                  })
                  v.shortcut = document.querySelector('.shortcut-hook')
                  v.cityWrapper = document.querySelector('.city-wrapper-hook')
                  v.shortcut.style.top = (v.cityWrapper.clientHeight - v.shortcut.clientHeight) / 2 + 'px';
                  v.scroll = new BScroll(v.cityWrapper, {
                    probeType: 3
                  })
                  // console.log(v.scroll, 'v.scroll')
                  // v.scroll.hasVerticalScroll = true
                  // v.scroll.wrapperHeight = $('body').height()
                  v.scroll.scrollTo(0, 0);
            },
            touchIndex(e) {
                // console.log(e, 'e')
                let v = this
                let anchor = e.target.getAttribute('data-anchor')
                // console.log(anchor ,'anchor')
                let firstTouch = e.touches[0]
                v.touch.y1 = firstTouch.pageY
                v.touch.anchor = anchor
                v.scrollTo(anchor)
            },
            scrollTo(anchor) {
                let v = this
                v.cityScroller = document.querySelector('.scroller-hook')
                var maxScrollY = v.cityWrapper.clientHeight - v.cityScroller.clientHeight
                var y = Math.min(0, Math.max(maxScrollY, v.anchorMap[anchor]))
                console.log(y);
                if (typeof y !== 'undefined') {
                    v.scroll.scrollTo(0, y);
                }
            },
        },
        mounted() {
            let v = this
            this.zddw()
            v.initCities()
        },
  created(){
    this.getCityInfo()
  }
}
</script>

<style scoped>
 @import url('../../../assets/css/city.css');
 @import url('../../../assets/css/reset.css');
	* {
		margin: 0;
		padding: 0;
	}
	.mycity {
		/* text-align: center; */
		font-size: 12px;
		margin-left: 10px
	}
	.list-box {
		padding: 0 43px;
	}
	.list-item {
		height: 43px;
		line-height: 42px;
		border-bottom: 1px solid #ECECEC;
		text-align: center;
	}
	.list-item input {
		border:none;
		text-align: center;
		outline: none;
	}
	.small-icon {
		display: inline-block;
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	.toast {
		position: fixed;
		z-index: 2000;
		left: 50%;
		top:45%;
		transition:all .5s;
		-webkit-transform: translateX(-50%) translateY(-50%);
		   -moz-transform: translateX(-50%) translateY(-50%);
			-ms-transform: translateX(-50%) translateY(-50%);
			 -o-transform: translateX(-50%) translateY(-50%);
				transform: translateX(-50%) translateY(-50%);
		text-align: center;
		border-radius: 5px;
		color:#FFF;
		background: rgba(17, 17, 17, 0.7);
		height: 45px;
		line-height: 45px;
		padding: 0 15px;
		max-width: 150px;
  }
</style>