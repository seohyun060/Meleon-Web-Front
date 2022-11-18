import SearchBarContainer from '@components/common/SearchBar/containers/SearchBarContainer';
import React from 'react';
import { images } from 'src/assets/images';
import IllustratorNewSectionContainer from './containers/IllustratorNewSectionContainer';
import IllustratorRecommendSectionContainer from './containers/IllustratorRecommendSectionContainer';
import IllustratorSearchContainer from './containers/IllustratorSearchContainer';
import './styles/illustrator.styles.css';

type Props = {};

const Illustrator = ({}: Props) => {
  return (
    <div className='illustrator-root page-root'>
      <IllustratorSearchContainer />
      <main className='main-section'>
        <IllustratorRecommendSectionContainer />
        <IllustratorNewSectionContainer />
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default Illustrator;
