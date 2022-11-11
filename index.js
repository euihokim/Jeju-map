const data = [];

await (async () => {
    try {
        const response = await fetch(
            "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=odwzSJ%2BgVLaO6kVbvhVD8PRSNEKy3mxX%2BTnVjjGOo0DKqIWnZjWtKAwzie4OgHNFWFMappAtURVCl8rlp2lboQ%3D%3D"
        );

        const renderPages = await response.json();

        for (let i = 1; i <= renderPages["perPage"]; i++) {
            const renderPage = await fetch(
                `https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=${i}&perPage=10&serviceKey=odwzSJ%2BgVLaO6kVbvhVD8PRSNEKy3mxX%2BTnVjjGOo0DKqIWnZjWtKAwzie4OgHNFWFMappAtURVCl8rlp2lboQ%3D%3D`
            ).then((response) => response.json());

            data.push(...renderPage["data"]);
        }
    } catch (e) {
        console.error(e);
    }
})();
// console.log(data[1]["위도"]);

function initMap() {
    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: jeju,
    });

    // 현재 지도의 기준점 (지도는 오름만 표시되어도 됨 따라서 없어도 될듯)
    // new google.maps.Marker({
    //     position: jeju,
    //     map: map,
    // });

    // new google.maps.Marker({
    //     position: { lat: 33.478135, lng: 126.57017 },
    //     map: map,
    // });

    // Marker 공부하기
    // 위도, 경도를 정확하게 표현하기 위해서 parseFloat을 사용함.
    let i = 0;
    while (i <= data.length) {
        new google.maps.Marker({
            position: {
                name: data[i]["위치"],
                lat: parseFloat(data[i]["위도"]),
                lng: parseFloat(data[i]["경도"]),
            },
            map: map,
        });
        i++;
        console.log(data[i]["오름명"]);
    }

    // const jeju = { lat: 33.3616658, lng: 126.5204118 };
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 15,
    //     center: jeju,
    // });

    // new google.maps.Marker({
    //     position: jeju,
    //     map: map,
    // });

    // new google.maps.Marker({
    //     position: { lat: 33.478135, lng: 126.57017 },
    //     map: map,
    // });

    // new google.maps.Marker({
    //     position: {
    //         lat: parseFloat(data[1]["위도"]),
    //         lng: parseFloat(data[1]["경도"]),
    //     },
    //     map: map,
    // });

    // new google.maps.Marker({
    //     position: {
    //         lat: parseFloat(data[2]["위도"]),
    //         lng: parseFloat(data[2]["경도"]),
    //     },
    //     map: map,
    // });

    // new google.maps.Marker({
    //     position: { lat: data[3]["위도"], lng: data[3]["경도"] },
    //     map: map,
    // });
}

initMap();
