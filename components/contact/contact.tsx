import React from 'react';
import Image from 'next/image';
import PhotoContact from './img/photo-contact.jpg';

export const Contakct = () => (
  <div className="contact" id="contact">
    <div className="contact__photo">
      <Image src={PhotoContact} alt="LinkedIn" layout="fill" objectFit="cover" />
    </div>
    <div className="contact__container">
      <p className="contact__container__text">Hodím se k Vám do týmu? Neváhejte mě kontaktovat na</p>
      <a
        className="contact__container__link"
        href="mailto: blanka.seman@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="contact__container__link__text">
          blanka.seman@gmail.com
        </h3>
      </a>
    </div>
  </div>
);
