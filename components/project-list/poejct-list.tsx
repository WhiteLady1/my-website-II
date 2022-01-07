import React from 'react';

interface ProjectProps {
  name: string,
  description: string;
  picture?: string;
};

interface ProjectListProps {
  projectList: ProjectProps[];
};

export const ProjectList:React.FC<ProjectListProps> = ({
  projectList,
}) => (
  <div className="project-list" id="projects">
    <h2 className="project-list__title">Projekty na kterých jsem pracovala</h2>
    <ul className="project-list__list">
      {projectList.map((project, index) => <li className="project-list__list__item" key={index}>
        <h3 className="project-list__list__item__title">{project.name}</h3>
        <p className="project-list__list__item__description">{project.description}</p>
      </li>)}
    </ul>
  </div>
);
