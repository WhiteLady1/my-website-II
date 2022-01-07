/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Introduction, Navigation } from '../../components';
import { Contakct } from '../../components/contact';

export const HomepageLayut = () => {
  console.log('Nevigation layout');

  return (
    <div>
      <Navigation
        links={[
          {
            id: 'skils',
            name: 'Dovednosti',
          },
          {
            id: 'about',
            name: 'O mě',
          },
          {
            id: 'projects',
            name: 'Projekty',
          },
          {
            id: 'contact',
            name: 'Kontakt',
          },
        ]}
      />
      <Introduction
        // picture={picture}
        name="Blanka Semanová"
        position="Frontend Developer"
        text="Krátké shrnutí toho kdo jsem, kde jsem se tu vzala a kam směřuju"
      />
      <Contakct />
      <div>
        <ul>
          <li id="skils">Dovednosti</li>
        </ul>
      </div>
    </div>
  );
};
