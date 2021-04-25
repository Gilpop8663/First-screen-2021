const address = document.querySelector(".js-address");

function getAddress(){
    fetch(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e958692bec88a275801ed7f34e72e46`)
}

function searchAddrFromCoords(coords, callback) {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
}