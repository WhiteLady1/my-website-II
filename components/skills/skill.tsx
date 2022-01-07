import React from 'react';

interface SkillProps {
  name: string;
  text?: string;
  level?: number;
}

export const Skill:React.FC<SkillProps> = ({
  name,
  text,
}) => (
  <div className="skill">
    <h3 className="skill__name">{name}</h3>
    <p className="skill__text">{text}</p>
  </div>
);
