'use client';
import {
  setLatitude,
  setLongitude,
} from '@/store/features/room/registerRoomSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import throttle from 'lodash/throttle';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';

//* 구글 지도 script 불러오기
const loadMapScript = () => {
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&loading=async&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      resolve();
    };
  });
};

declare global {
  interface Window {
    initMap: any;
  }
}

const RegisterRoomGeometry = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mapRef = useRef<HTMLDivElement>(null);
  const latitude = useAppSelector((state) => state.registerRoom.latitude);
  const longitude = useAppSelector((state) => state.registerRoom.longitude);

  const dispatch = useAppDispatch();

  const loadMap = async () => {
    await loadMapScript();
  };

  window.initMap = async () => {
    //* 지도 불러오기
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: latitude || 37.5666784,
          lng: longitude || 126.9778436,
        },
        zoom: 14,
      });

      const marker = new window.google.maps.Marker({
        position: {
          lat: latitude || 37.5666784,
          lng: longitude || 126.9778436,
        },
        map,
      });
      map.addListener(
        'center_changed',
        throttle(() => {
          const centerLat = map.getCenter().lat();
          const centerLng = map.getCenter().lng();
          marker.setPosition({ lat: centerLat, lng: centerLng });
          dispatch(setLatitude(centerLat));
          dispatch(setLongitude(centerLng));
        })
      );
    }
  };

  useEffect(() => {
    if (mounted) {
      loadMap();
    }
  }, [mounted]);

  return (
    <>
      <div className="">
        <h2>핀이 놓인 위치가 정확한가요?</h2>
        <h3>4 단계</h3>
        <p>필요한 경우 핀이 정확한 위치에 자리하도록 조정할 수 있어요.</p>
        <div className="w-[487px] h-[280px] mt-[24px] ">
          <div id="map" ref={mapRef} className="w-full h-full" />
        </div>
        <RegisterRoomFooter
          prevHref="/room/register/location"
          nextHref="/room/register/amentities"
          isValid
        />
      </div>
    </>
  );
};

export default RegisterRoomGeometry;
