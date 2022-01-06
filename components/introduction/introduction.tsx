import React from 'react';
import Image from 'next/image';
import ProfilImg from './img/profil.jpeg';

interface IntroductionProps {
  // picture: StaticImageData;
  name: string;
  position: string;
  text: string;
};

export const Introduction: React.FC<IntroductionProps> = ({
  // picture,
  name,
  position,
  text,
}) => (
  <div className="introduction">
    <div className="introduction__photo">
      <Image src={ProfilImg} alt={name} layout="fill" objectFit="cover"/>
    </div>
    <div className="introduction__container">
      <h1 className="introduction__container__name">{name}</h1>
      <h2 className="introduction__container__position">{position}</h2>
      <p className="introduction__container__text">{text}</p>
    </div>
  </div>
);
