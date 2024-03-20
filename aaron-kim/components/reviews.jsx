'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

//* import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//* import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//* import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/assets/reviews/avatar-1.png',
    name: '홍길동',
    job: '도사',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
  {
    avatar: '/assets/reviews/avatar-2.png',
    name: '장길산',
    job: '등산가',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
  {
    avatar: '/assets/reviews/avatar-3.png',
    name: '이순신',
    job: '장군',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
  {
    avatar: '/assets/reviews/avatar-4.png',
    name: '전우치',
    job: '도사',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
  {
    avatar: '/assets/reviews/avatar-5.png',
    name: '율곡',
    job: '학자',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
  {
    avatar: '/assets/reviews/avatar-6.png',
    name: '유진초이',
    job: '사랑꾼',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint laborum blanditiis eius fugiat accusamus.',
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-12">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
