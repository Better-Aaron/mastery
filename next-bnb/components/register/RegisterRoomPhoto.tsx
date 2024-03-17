'use client';
import React from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { isEmpty } from 'lodash';
import Button from '../common/Button';
import UploadIcon from '@/public/static/svg/register/upload.svg';
import { uploadFileAPI } from '@/lib/api/file';
import { setPhotos } from '@/store/features/room/registerRoomSlice';
import RegisterRoomPhotoCardList from './RegisterRoomPhotoCardList';

const RegisterRoomPhoto = () => {
  const photos = useAppSelector((state) => state.registerRoom.photos);

  const dispatch = useAppDispatch();

  //* 이미지 업로드 하기
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      try {
        const { path } = await uploadFileAPI(formData);
        if (path) {
          dispatch(setPhotos([...photos, path]));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">숙소 사진 올리기</h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">7단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        게스트가 사진을 보고 숙소의 느낌을 생생히 떠올려볼 수 있도록 해주세요.
        우선 사진 1장을 업로드하고 숙소를 등록한 수에 추가할 수 있습니다.
      </p>
      {isEmpty(photos) && (
        <div className="w-[858px] h-[433px] m-auto relative flex justify-center items-center border-2 border-dashed border-gray_bb rounded-md">
          <>
            <input
              className="absolute w-full h-full opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={uploadImage}
            />
            <Button icon={<UploadIcon />} color="bittersweet" width="167px">
              사진 업로드
            </Button>
          </>
        </div>
      )}
      {!isEmpty(photos) && <RegisterRoomPhotoCardList photos={photos} />}
      <RegisterRoomFooter
        prevHref="/room/register/conveniences"
        nextHref="/room/register/description"
        isValid={photos.length > 0}
      />
    </div>
  );
};

export default RegisterRoomPhoto;
