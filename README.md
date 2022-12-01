# 제주오름 OpenAPI
**제주오름요약설명 API, Google Maps Platform을 활용하여 제주 오름을 지도에 표시 했습니다.**<br>
https://euihokim.github.io/Jeju-map/<br>
<p align="center"><img src="https://user-images.githubusercontent.com/104756433/205115744-a0371bfe-30e6-4707-ba92-c96d0442fcd5.gif" height="500px" width="650px"></p>

## 1. API 발급 방법
**<span style="color: orange">1. 제주특별자치도 제주오름요약설명</span>**
<br>
https://www.data.go.kr/tcs/dss/selectFileDataDetailView.do?publicDataPk=15096996#
<br><br>
1.1<br> 오픈API ➡ 활용신청 ➡ 마이페이지 ➡ 개발계정 ☑ 인증키 확인
<br><br>
1.2<br> API목록 ➡ OpenAPI 실행 준비 ➡ OpenAPI 호출 ☑ Request URL 확인
<br><br>
✅ ``https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=인증키``
<br><br>
**<span style="color: orange">2. Google Maps Platform</span>**
<br>
https://console.cloud.google.com/google/maps-apis/start
<br><br>
2.1<br>
➡ API ➡ Maps ➡ JavaScript API ☑ 인증키 확인 
<br><br>
2.2<br>
➡사용자 인증 정보<br>
➡ API 키<br>
➡ 애플리케이션 제한사항 ADD 하기<br><br>
![image](https://user-images.githubusercontent.com/112460383/205119301-f26c855b-97b2-40ba-9435-e857c06d41e6.png)<br><br>
➡ API 제한사항 선택하기<br><br>
![image](https://user-images.githubusercontent.com/112460383/205119700-7b1aeb21-e858-4b04-8aa3-e7a7c174d394.png)<br><br>
✅ API 키 ``https://maps.googleapis.com/maps/api/js?key=API Key&callback=initMap``
<br><br>
## 2. 지도 표시를 위해 사용한 기능
```JS
// 브라우저에서 로드하는 Google Maps JavaScript API 방식
google.maps


// 지도의 카메라 옵션을 설정하는 데 사용
// 가능한 정수 범위는 1~20
zoom: 11
// 지도의 중심으로 잡고 싶은 부분
center: jejuCenter


// 마커의 초기 위치 식별 위한 위도 및 경도 지정
let marker = new google.maps.Marker({
        position: {
            lat: 33.475016,
            lng: 126.495049,
        },
                map: map
)


// 고정된 지점에서 너비, 높이 값만큼 움직임 (음수도 가능)
pixelOffset: new google.maps.Size(0.5, -30)
// 글씨 적힌 창 최대 너비 결정
maxWidth: 300


// 정보창 추가
const infoWindow = new google.maps.InfoWindow(whatInfoWindow)


// 정보창은 자동으로 추가되지 않음 따라서 open으로 열어야 함
infoWindow.open(infoWindowOpen)


// 지구 표면의 원으로 '구형 캡'이라고도 함
new google.maps.Circle


// 마커 선택 시 해당 위치로 부드럽게 이동
map.panTo(marker.position)


// 정보창 내용 추가
infoWindow.setContent(explain)
```
