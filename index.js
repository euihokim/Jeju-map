function initMap() {
    const jejuAirport = { lat: 33.5066211, lng: 126.49281 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: jejuAirport,
    });

    const info = [];

    fetch(
        "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=odwzSJ%2BgVLaO6kVbvhVD8PRSNEKy3mxX%2BTnVjjGOo0DKqIWnZjWtKAwzie4OgHNFWFMappAtURVCl8rlp2lboQ%3D%3D"
    )
        .then((v) => v.json())
        .then((data) => {
            info.push(data.data);
            let test = {
                오름명: "제주공항",
                설명: "제주공항입니다",
                위도: "33.5066211",
                경도: "126.49281",
            };
            info[0].push(test);
            // info[0]이 아니라 data.data로도 왜 가능..?
            let position = info[0];
            // console.log(data.data);
            // console.log(info[0]);
            const infowindow = new google.maps.InfoWindow();

            for (let i in position) {
                let 오름명 = position[i].오름명;
                let 설명 = position[i].설명;
                let 위도 = parseFloat(position[i].위도);
                let 경도 = parseFloat(position[i].경도);
                // console.log(오름명);
                // console.log(설명);
                // console.log(위도);
                // console.log(경도);

                new google.maps.Circle({
                    strokeColor: "green",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "green",
                    fillOpacity: 0.35,
                    map,
                    center: {
                        lat: 위도,
                        lng: 경도,
                    },
                    radius: 1000,
                });

                let marker = new google.maps.Marker({
                    position: {
                        lat: 위도,
                        lng: 경도,
                    },
                    map: map,
                    // icon 바꾸기
                });

                https: marker.addListener("click", () => {
                    map.panTo(marker.position);
                    // 글자 줄바꿈 효과 넣고 싶음
                    const explain = `${오름명} : ${설명}`;
                    infowindow.setContent(explain);
                    infowindow.open({
                        anchor: marker,
                        map,
                    });
                });
            }
        });
}

initMap();
