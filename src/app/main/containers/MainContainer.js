'use client';
import React from 'react';
import { Section, SectionsContainer, Header } from 'react-fullpage';

const options = {
  anchors: ['sectionOne', 'setionTwo', 'sectionThree'],
};

const MainContainer = () => {
  return (
    <>
      <SectionsContainer {...options}></SectionsContainer>
    </>
  );
};

export default React.memo(MainContainer);
