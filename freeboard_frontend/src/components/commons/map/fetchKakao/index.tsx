// import { Modal } from "antd";
// import { useEffect, useState } from "react";
// import DaumPostcodeEmbed from "react-daum-postcode";
// import type { Address } from "react-daum-postcode";
// declare const window: typeof globalThis & {
//   kakao: any;
// };

// export default function KakaoPage(): JSX.Element {
//   const [isOpen, setIsOpen] = useState(false);
//   const [zipcode, setZipcode] = useState("");
//   const [address, setAddress] = useState("");

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3e13da03fd7eb9d881db4bfe5ace6258&libraries=services";

//     document.head.appendChild(script);
//     script.onload = () => {
//       window.kakao.maps.load(function () {
//         var mapContainer = document.getElementById("map"), // 지도를 표시할 div
//           mapOption = {
//             center: new kakao.maps.LatLng(37.5576, 126.9245), // 지도의 중심좌표
//             level: 3, // 지도의 확대 레벨
//           };

//         // 지도를 생성합니다
//         var map = new kakao.maps.Map(mapContainer, mapOption);
//         var imageSrc = "/markerBlue.png", // 마커이미지의 주소입니다
//           imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//           imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//         const markerImage = new kakao.maps.MarkerImage(
//             imageSrc,
//             imageSize,
//             imageOption
//           ),
//           markerPosition = new kakao.maps.LatLng(37.55439, 126.922444); // 마커가 표시될 위치입니다
//         // 지도를 클릭한 위치에 표출할 마커입니다
//         const marker = new window.kakao.maps.Marker({
//           // 지도 중심좌표에 마커를 생성합니다
//           // position: map.getCenter(),
//           position: markerPosition,
//           image: markerImage, // 마커이미지 설정
//         });
//         // 지도에 마커를 표시합니다
//         marker.setMap(map);
//         // 주소-좌표 변환 객체를 생성합니다
//         var geocoder = new kakao.maps.services.Geocoder();

//         // 주소로 좌표를 검색합니다
//         geocoder.addressSearch(
//           address,

//           function (result: any, status: any) {
//             // 정상적으로 검색이 완료됐으면
//             if (status === kakao.maps.services.Status.OK) {
//               var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//               // 결과값으로 받은 위치를 마커로 표시합니다
//               var marker = new kakao.maps.Marker({
//                 map: map,
//                 position: coords,
//                 image: markerImage, // 마커이미지 설정
//               });

//               // 인포윈도우로 장소에 대한 설명을 표시합니다
//               // var infowindow = new kakao.maps.InfoWindow({
//               //   content:
//               //     '<div style="width:150px;text-align:center;padding:6px;"> </div>',
//               // });
//               // infowindow.open(map, marker);

//               // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//               map.setCenter(coords);
//             }
//           }
//         );
//       });
//     };
//   }, [address]);

//   const onCompleteAddress = (data: Address) => {
//     // console.log(data);
//     setAddress(data.address);
//     setZipcode(data.zonecode);
//     setIsOpen((prev) => !prev);
//   };
//   function onClickAddress() {
//     setIsOpen((prev) => !prev);
//   }

//   return (
//     <>
//       <button style={{ marginBottom: "40px" }} onClick={onClickAddress}>
//         dhfsadijho
//       </button>
//       <div id="map" style={{ width: 500, height: 400 }}></div>

//       {isOpen && (
//         <Modal open={true} onOk={onClickAddress} onCancel={onClickAddress}>
//           <DaumPostcodeEmbed onComplete={onCompleteAddress} />
//         </Modal>
//       )}
//     </>
//   );
// }
