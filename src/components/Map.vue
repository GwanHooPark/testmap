<template>
    <div>
    <div id="map"></div>
    </div>
</template>
<script>
    export default {
        name: "Map",
        mounted: function() {
            if (window.kakao && window.kakao.maps) {
                this.initMap();
            } else {
                const script = document.createElement('script');
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a8ab130210ad44013c1a7bf82b3e6413';
                document.head.appendChild(script);
            }
        },
        methods: {
            initMap() {
                kakao.maps.load(function() {
                    var container = document.getElementById('map');
                    container.style.width = "100%";
                    container.style.height = window.screen.height + "px";
                    var options = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667),
                        level: 3
                    };
                    new kakao.maps.Map(container, options);
                });
            }
        }
    }
</script>