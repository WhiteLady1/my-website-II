/* eslint-disable import/extensions */
import React from 'react';
import { Skill } from './skill';

interface SkillProps {
  skillName: string;
  skillDescription?: string;
  skillLevel?: number;
};

interface SkillsListProps {
  skills: SkillProps[];
};

export const SkillsList:React.FC<SkillsListProps> = ({
  skills,
}) => (
  <div className="skills-list">
    {skills.map((skill, index) => <Skill
      key= {index}
      name={skill.skillName}
      text={skill.skillDescription}
    />)}
  </div>
);
