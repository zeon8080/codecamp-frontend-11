import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3e13da03fd7eb9d881db4bfe5ace6258";

    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"),
          mapOption = {
            center: new window.kakao.maps.LatLng(37.55439, 126.922444),
            level: 3,
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        var imageSrc = "/marker.png",
          imageSize = new kakao.maps.Size(64, 69),
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        const markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(37.55439, 126.922444);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        marker.setMap(map);
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            const message =
              "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            // const resultDiv = document.getElementById("clickLating");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
      {/* <div id="clickLating"></div> */}
    </>
  );
}
