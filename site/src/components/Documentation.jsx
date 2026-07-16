import React from 'react';
import './Documentation.css';
import Intro from '../pages/Intro';
import Colors from '../pages/Colors';
import Typography from '../pages/Typography';
import Spacing from '../pages/Spacing';
import Radius from '../pages/Radius';
import Iconography from '../pages/Iconography';
import ButtonPage from '../pages/components/Button';
import TagPage from '../pages/components/Tag';

const PAGES = {
  intro: { title: 'Introduction', render: (props) => <Intro {...props} /> },
  colors: { title: 'Colors', render: () => <Colors /> },
  typography: { title: 'Typography', render: () => <Typography /> },
  spacing: { title: 'Spacing', render: () => <Spacing /> },
  radius: { title: 'Radius', render: () => <Radius /> },
  iconography: { title: 'Iconography', render: () => <Iconography /> },
  'component-button': { title: 'Button', render: () => <ButtonPage /> },
  'component-tag': { title: 'Tag', render: () => <TagPage /> },
};

const Documentation = ({ activeTab, setActiveTab }) => {
  const page = PAGES[activeTab] ?? PAGES.intro;
  return (
    <main className="documentation">
      <header className="doc-header">
        <div className="breadcrumbs">Bricks / {page.title}</div>
      </header>
      <div className="doc-content">
        {page.render({ setActiveTab })}
      </div>
    </main>
  );
};

export default Documentation;
