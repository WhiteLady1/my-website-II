import React from 'react';
import Link from 'next/link';

interface LinksProps {
  id: string;
  name: string;
}

interface NavigationProps {
  links: LinksProps[];
}

export const Navigation: React.FC<NavigationProps> = ({
  links,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const clickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('click', clickOutside, true);
    return () => {
      document.removeEventListener('click', clickOutside, true);
    };
  });

  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <Link href="/">
          <a className="navigation__wrapper__text">Blanka Semanová</a>
        </Link>
        <div className={`navigation__wrapper__hamburger${isOpen === true ? ' navigation__wrapper__hamburger--is-open' : ''}`} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul className={`navigation__menu${isOpen === true ? ' navigation__menu--is-open' : ''}`}>
        {links.map((item, index) => (
          <li className="navigation__menu__item" key={index}>
            <Link href={`/#${item.id}`} scroll>
              <a className="navigation__menu__item__link">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
