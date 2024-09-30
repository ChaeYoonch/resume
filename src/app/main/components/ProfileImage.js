import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return <div className={className}></div>;
};

const StyledProfileImage = styled(ProfileImage)`
  background: #dbdbdb;
  height: 350px;
  padding: 50px 30px 10px;
`;

export default React.memo(StyledProfileImage);
