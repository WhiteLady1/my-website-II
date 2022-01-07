import React from 'react';
import Image from 'next/image';
import ProfilImg from './img/profil.jpeg';
import LinkedIn from './img/in.svg';
import GitHub from './img/git.svg';
import Gmail from './img/gmail.svg';

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
    <div className="introduction__ikons">
      <a
        className="introduction__ikons__ikon"
        href="https://www.linkedin.com/in/blanka-semanová"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={LinkedIn} alt="LinkedIn" layout="fill" objectFit="contain"/>
      </a>
      <a
        className="introduction__ikons__ikon"
        href="https://github.com/WhiteLady1"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={GitHub} alt="GitHub" layout="fill" objectFit="contain"/>
      </a>
      <a
        className="introduction__ikons__ikon"
        href="mailto: blanka.seman@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Gmail} alt="Gmail" layout="fill" objectFit="contain"/>
      </a>
    </div>
  </div>
);
