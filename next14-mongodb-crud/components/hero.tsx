import Image from 'next/image';
import React from 'react';

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="flex jsutify-center items-center absolute inset-0">
        <h1 className="text-8xl text-black">{props.heading}</h1>
      </div>
    </div>
  );
};

export default Hero;
