<template>
 <div id="map">
   <!-- 地图顶部导航 -->
   <nav-bar class="aaa">
     <div class="middle" slot="middle">
       景点
     </div>
   </nav-bar>
   <div id="container"></div>
<div id="myPageTop">
    <table>
        <input id="tipinput" placeholder="请输入关键字"/>
    </table>
</div>
 </div>
 
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'
import AMap from 'AMap' //引入高德地图AMap
export default {
  name: 'Map',
  components:{
    NavBar
  },
  data(){
    return {
      num : 1,
    }
  }, //添加变量，方便组件复用
 methods: {
//初始化地图
   initMap () {
      let self = this


      let map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 15, //初始化地图层级
        // center: [116.397428, 39.90923] //初始化地图中心点
      })
      self.map = map 
    //     //添加覆盖物
    //   var marker = new AMap.Marker({
    //     position: new AMap.LngLat(116.39, 39.92),
    //     icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
    //     offset: new AMap.Pixel(-13, -30)
    // }); 

    // map.add(marker);
     //输入提示
    var autoOptions = {
        input: "tipinput"
    };
    var auto = new AMap.Autocomplete(autoOptions);
    var placeSearch = new AMap.PlaceSearch({
        map: map
    });  //构造地点查询类
    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    function select(e) {
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
    }






      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
            noIpLocate : 0,
            GeoLocationFirst : true,
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'RT',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 10),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status,result){
            if(status=='complete'){
                onComplete(result)
                // console.log(result);
            }else{
                onError(result)
                // console.log(result);
            }
        });
    });
    //解析定位结果
    function onComplete(data) {
        console.log('定位成功');
        var str = [];


        var geocoder = new AMap.Geocoder({
          city: "010", //城市设为北京，默认：“全国”
          radius: 1000 //范围，默认：500
        });
            
        console.log(data.position);
        
        var lnglat  = [data.position.lng,data.position.lat]
        
        geocoder.getAddress(lnglat, function(status, result) {
            if (status === 'complete'&&result.regeocode) {
                var address = result.regeocode.formattedAddress;
                console.log(address);
            }else{
                log.error('根据经纬度查询地址失败')
            }
        });
    




        str.push('定位结果：' + data.position);
        str.push('定位类别：' + data.location_type);
        if(data.accuracy){
             str.push('精度：' + data.accuracy + ' 米');
        }//如为IP精确定位结果则没有精度信息
        str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
        console.log(str.join());
    }
    //解析定位错误信息
    function onError(data) {
        console.log('定位失败');
        console.log('失败原因排查信息:'+data.message); 
    }
    }
  },
 mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
.middle{
  height: 44px;
  /* background-color: red; */
  text-align: center;
    /* background-color: red; */
  line-height: 44px;
  font-size: 16px;
  /* color: rgb(74, 153, 243); */
  font-weight: bold;
  /* background-color: red; */
  z-index: inherit;
}

#map{
  position: relative;
  height: 100%;
}
#container{
  width: 100%;
  height: calc(100% - 93px);
}

#tipinput{
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin:auto;
  top: 50px;
  outline: none;
  font-family: "Microsoft Yahei", "微软雅黑", "Pinghei";
	font-size: 14px;
  border-radius: 15px;
  text-indent: 1em;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
*:focus { 
       outline: none;
        background-color: #fff;
     }
     ::selection{background:#fff }
     ::-moz-selection{background:transparent; }
</style>
