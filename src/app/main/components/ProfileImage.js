import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return <div className={className}></div>;
};

const StyledProfileImage = styled.a(ProfileImage)`

`;

export default React.memo(StyledProfileImage);
