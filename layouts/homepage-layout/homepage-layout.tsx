/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Introduction, Navigation } from '../../components';
import { Contakct } from '../../components/contact';
import { SkillsList } from '../../components/skills';

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
      <SkillsList
        skills={[
          {
            skillName: 'CSS, SCSS, Styled-component',
            skillDescription: 'Dokážu nastylovat jakoukoliv stránku při dodržování konvence BEM',
          },
          {
            skillName: 'REACT, NEXT.js, TypeScript',
            skillDescription: 'Programuii v Reactu a poslední dobrou se zaměřuji na NEXT.js s kombinací s Typescriptem',
          },
          {
            skillName: 'EsLint',
            skillDescription: 'V projektech používám systélu EsLint, kde si nastavuji vlastní pravidla',
          },
        ]}
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
