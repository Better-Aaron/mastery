import Image from 'next/image';
import React from 'react';

import PencilIcon from '@/public/static/svg/register/photo/pencil.svg';
import TranshCanIcon from '@/public/static/svg/register/photo/trash_can.svg';
import GrayPlusIcon from '@/public/static/svg/register/photo/gray_plus.svg';
import { useAppDispatch } from '@/store/hooks';
import { uploadFileAPI } from '@/lib/api/file';
import { setPhotos } from '@/store/features/room/registerRoomSlice';
interface IProps {
  photos: string[];
}
const RegisterRoomPhotoCardList: React.FC<IProps> = ({ photos }) => {
  const dispatch = useAppDispatch();

  //* 사진 추가하기
  const addPhoto = () => {
    const el = document.createElement('input');
    el.type = 'file';
    el.accept = 'image/*';
    el.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (files && files.length > 0) {
        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        uploadFileAPI(formData)
          .then(({ path }) => {
            dispatch(setPhotos([...photos, path]));
          })
          .catch((e) => console.log(e));
      }
    };
    el.click();
  };

  //* 사진 삭제하기
  const deletePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    dispatch(setPhotos(newPhotos));
  };

  //* 사진 수정하기
  const editPhoto = (index: number) => {
    const el = document.createElement('input');
    el.type = 'file';
    el.accept = 'image/*';
    el.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (files && files.length > 0) {
        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        uploadFileAPI(formData)
          .then(({ path }) => {
            const newPhotos = [...photos];
            newPhotos[index] = path;
            dispatch(setPhotos(newPhotos));
          })
          .catch((e) => console.log(e));
      }
    };
    el.click();
  };
  return (
    <ul className="w-[858px] m-auto">
      {photos.map((photo, index) => (
        <li
          className={`${
            index === 0
              ? 'w-[858px] h-[433px] mt-0 mx-auto mb-[24px] relative flex justify-center items-center overflow-hidden rounded-md '
              : 'relative inline-block w-[calc((100%_-_48px)/3)] h-[180px] rounded-md overflow-hidden mr-6 mb-6 '
          } ${index > 1 && index % 3 === 0 ? 'mr-0' : ''}`}
          key={index}
        >
          <Image
            className="peer absolute top-0 left-0 w-full h-full"
            src={`${photo.replace('public', '')}`}
            alt=""
            width={858}
            height={433}
          />
          <div className="hidden hover:flex peer-hover:flex absolute top-2 right-2">
            <button
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-pointer border-0 outline-none shadow first:mr-2"
              type="button"
              onClick={() => {
                deletePhoto(index);
              }}
            >
              <TranshCanIcon />
            </button>
            <button
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-pointer border-0 outline-none shadow first:mr-2"
              type="button"
              onClick={() => {
                editPhoto(index);
              }}
            >
              <PencilIcon />
            </button>
          </div>
        </li>
      ))}
      <li
        className={`relative inline-block w-[calc((100%_-_48px)/3)] h-[180px] rounded-md overflow-hidden mr-6 mb-6 ${
          photos.length % 3 === 2 ? '' : 'mr-0'
        }`}
        role="presentation"
        onClick={addPhoto}
      >
        <div className="relative flex flex-col justify-center items-center w-full h-full border-2 border-dashed border-gray_bb rounded-md cursor-pointer overflow-hidden mr-6 mb-6">
          <GrayPlusIcon className="mb-3" />
          <div className="">추가하기</div>
        </div>
      </li>
    </ul>
  );
};

export default RegisterRoomPhotoCardList;
