# Jeju-map
https://euihokim.github.io/Jeju-map/
<p align="center"><img src="https://user-images.githubusercontent.com/104756433/205115744-a0371bfe-30e6-4707-ba92-c96d0442fcd5.gif" height="500px" width="650px"></p>

## 지도 표시를 위해 사용한 기능
- <p style="color: orange">브라우저에서 로드하는 Google Maps JavaScript API 방식</p>
  - google.maps
  
- 지도의 카메라 옵션을 설정하는 데 사용
- 가능한 정수 범위는 1~20
  - zoom: 11
- 지도의 중심으로 잡고 싶은 부분
  - center: jejuCenter

- 마커의 초기 위치 식별 위한 위도 및 경도 지정
  - let marker = new google.maps.Marker({
        position: {
            lat: 33.475016,
            lng: 126.495049,
        },
				map: map
)

- 고정된 지점에서 너비, 높이 값만큼 움직임 (음수도 가능)
  - pixelOffset: new google.maps.Size(0.5, -30)
- 글씨 적힌 창 최대 너비 결정
  - maxWidth: 300
  
- 정보창 추가
  - const infoWindow = new google.maps.InfoWindow(whatInfoWindow)
  
- 정보창은 자동으로 추가되지 않음 따라서 open으로 열어야 함
  - infoWindow.open(infoWindowOpen)
  
- 지구 표면의 원으로 '구형 캡'이라고도 함
  - new google.maps.Circle
  
- 마커 선택 시 해당 위치로 부드럽게 이동
  - map.panTo(marker.position)
  
- 정보창 내용 추가
  - infoWindow.setContent(explain)
