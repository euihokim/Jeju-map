function initMap() {
    const jejuCenter = { lat: 33.389016, lng: 126.552749 };
    // new google.maps.Map의 첫 번째 인자는 맵을 포함하고 싶은 html 요소
    const map = new google.maps.Map(document.getElementById("map"), {
        // 가능한 정수 범위는 1~20
        zoom: 11,
        // 지도의 중심으로 잡고 싶은 부분
        center: jejuCenter,
    });

    let marker = new google.maps.Marker({
        position: {
            lat: 33.475016,
            lng: 126.495049,
        },
        map: map,
        icon: "./img/airplane.gif",
    });

    let marker2 = new google.maps.Marker({
        position: {
            lat: 33.5066211,
            lng: 126.49281,
        },
        map: map,
        icon: "./img/dol-hareubang.png",
    });

    const info = [];

    async function test() {
        let whatInfoWindow = {
            content: `<p style="text-align: left; font-weight: bold; color: orange; font-size: 16px">welcome everyone~~</p> <br> <p style="text-align: left">`,
            position: { lat: 33.5066211, lng: 126.49281 },
            // 고정된 지점에서 너비, 높이 값만큼 움직임 (음수도 가능)
            pixelOffset: new google.maps.Size(0.5, -30),
            // 글씨 적힌 창 최대 너비 결정
            maxWidth: 300,
        };

        let markerAnchor = new google.maps.Marker({
            position: { lat: 33.5066211, lng: 126.49281 },
            map: map,
        });

        const infoWindow = new google.maps.InfoWindow(whatInfoWindow);

        let infoWindowOpen = {
            anchor: markerAnchor,
        };

        infoWindow.open(infoWindowOpen);

        setTimeout(() => {
            infoWindow.close();
        }, 5000);

        await fetch(
            `https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=100&serviceKey=odwzSJ%2BgVLaO6kVbvhVD8PRSNEKy3mxX%2BTnVjjGOo0DKqIWnZjWtKAwzie4OgHNFWFMappAtURVCl8rlp2lboQ%3D%3D`
        )
            .then((res) => res.json())
            .then((res) => info.push(res.data));

        for (let i = 0; i < info.flat().length; i++) {
            let 오름명 = info.flat()[i]["오름명"];
            let 설명 = info.flat()[i]["설명"];
            let 위도 = parseFloat(info.flat()[i]["위도"]);
            let 경도 = parseFloat(info.flat()[i]["경도"]);

            new google.maps.Circle({
                strokeColor: "orange",
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: "orange",
                fillOpacity: 0.5,
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
                icon: "./img/2.png",
                map: map, // icon 바꾸기
            });

            // 다른 infowindow 눌렀을 때 원래 것이 안사라진 이유
            // const infoWindow = new google.maps.InfoWindow();

            https: marker.addListener("click", () => {
                map.panTo(marker.position);
                // 글자let test =  줄바꿈 효과 넣고 싶음
                // const explain = `${오름명}: ${설명}`;
                const explain = `<p style="text-align: left; font-weight: bold; color: orange; font-size: 16px">${오름명}</p> <br> <p style="text-align: left">${설명}`;
                infoWindow.setContent(explain);
                infoWindow.open({
                    anchor: marker,
                    map,
                });
            });
        }
    }
    test();
}
initMap();
