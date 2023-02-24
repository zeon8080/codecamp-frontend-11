import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script"); //  <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3e13da03fd7eb9d881db4bfe5ace6258";

    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(37.55439, 126.922444), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        var imageSrc = "/knife.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        const markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(37.55439, 126.922444); // 마커가 표시될 위치입니다
        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          // position: map.getCenter(),
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            const message =
              "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            const resultDiv = document.getElementById("clickLatlng");
            resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <div id="clickLatlng"></div>
    </>
  );
}
