/* global kakao */
import React, { useEffect, useRef } from "react";



function KakaoMap(){
  const container=useRef(null)
  const options={center:new kakao.maps.LatLng(33.450701,126.570667),level:5}
  useEffect(()=>{
    new kakao.maps.Map(container.current,options); return ()=> {};
  },[])
  return(
    <div id='map' ref={container} style={{width:'50vw', height:'50vh'}}>
    </div>
    )

}
export default KakaoMap