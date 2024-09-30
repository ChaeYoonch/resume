'use client';
import React from 'react';
import { Section, SectionsContainer, Header } from 'react-fullpage';
import TopMenu from '../components/TopMenu';
import InfoAbout from '../components/InfoAbout';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';

const options = {
  anchors: ['sectionOne', 'setionTwo', 'sectionThree'],
};

const MainContainer = () => {
  return (
    <>
      <TopMenu />
      <SectionsContainer {...options}>
        <InfoAbout />
        <Experience />
        <Portfolio />
      </SectionsContainer>
    </>
  );
};

export default React.memo(MainContainer);
