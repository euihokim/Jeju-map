# 제주오름 OpenAPI
**제주오름요약설명 API, Google Maps Platform을 활용하여 제주 오름을 지도에 표시 했습니다.**<br>
https://euihokim.github.io/Jeju-map/<br>
<p align="center"><img src="https://user-images.githubusercontent.com/104756433/205115744-a0371bfe-30e6-4707-ba92-c96d0442fcd5.gif" height="500px" width="650px"></p>
<br>
## API 발급 방법
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
1.1<br>
➡ API ➡ Maps ➡ JavaScript API ☑ 인증키 확인 
<br><br>
1.2 사용자 인증 정보<br>
➡ API 키<br>
➡ 애플리케이션 제한사항 ADD 하기<br><br>
![image](https://user-images.githubusercontent.com/112460383/205119301-f26c855b-97b2-40ba-9435-e857c06d41e6.png)<br><br>
➡ API 제한사항 선택하기<br><br>
![image](https://user-images.githubusercontent.com/112460383/205119700-7b1aeb21-e858-4b04-8aa3-e7a7c174d394.png)<br><br>
✅ API 키 ``https://maps.googleapis.com/maps/api/js?key=API Key&callback=initMap``
