<template>
    <div>
    <div id="map"></div>
    </div>
</template>
<script>
    export default {
        name: "Map",
        data() {
            return {
                mapObject : '',
                latitude : 37.188871,
                longitude : 127.123153
            }
        },
        mounted: function() {
            if (window.kakao && window.kakao.maps) {
                this.initMap();
            } else {
                const script = document.createElement('script');
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=eb9ea84370993bd853db66ee20697dcc';
                document.head.appendChild(script);
            }
        },
        methods: {
            initMap() {
                var _this = this;
                kakao.maps.load(function() {
                    var container = document.getElementById('map');
                    container.style.width = "100%";
                    container.style.height = window.innerHeight + "px";
                    var options = {
                        center: new kakao.maps.LatLng(_this.latitude, _this.longitude),
                        //center: new kakao.maps.LatLng(position.latitude, position.longitude),
                        level: 3
                    };
                    _this.mapObject = new kakao.maps.Map(container, options);
                    _this.getLocation();
                });
            },
            setCurrentPosition(latitude,longitude) {

                /*//var imageSrc = require('../assets/mylocation.png'),
                var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
                    imageSize = new kakao.maps.Size(34, 39),
                    imageOption = {offset: new kakao.maps.Point(27, 69)},
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);*/

                var markerPosition  = new kakao.maps.LatLng(latitude, longitude);
                var marker = new kakao.maps.Marker({
                    position: markerPosition/*,
                    image: markerImage*/
                });
                marker.setMap(this.mapObject);
                this.mapObject.panTo(markerPosition);
            },
            getLocation() {
                var _this = this;
                if (navigator.geolocation) { // GPS를 지원하면
                    navigator.geolocation.getCurrentPosition(function(po) {
                        _this.latitude = po.coords.latitude;
                        _this.longitude = po.coords.longitude;
                        _this.setCurrentPosition(_this.latitude , _this.longitude);
                    }, function(error) {
                        console.error(error);
                    }, {
                        enableHighAccuracy: false,
                        maximumAge: 0,
                        timeout: Infinity
                    });
                } else {
                    alert('GPS를 지원하지 않습니다');
                }
             }
        }
    }
</script>