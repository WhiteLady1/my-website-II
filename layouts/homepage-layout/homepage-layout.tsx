/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigation } from '../../components';

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
      <div>
        <ul>
          <li id="skils">Dovednosti</li>
        </ul>
      </div>
    </div>
  );
};
