import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;

  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }

  .item + .item {
    margin-left: 20px;
  }
`;

const Experience = () => {
  return (
    /* react-icons 로 아이콘 활용 추천 */
    <Section>
      <Wrapper className="layout-width first">
        <Item title="EDUCATION" alt="전공"></Item>
        <Item title="WORK EXPERIENCE" alt="경력"></Item>
      </Wrapper>
      <Wrapper className="layout-width">
        <Item title="CERTIPICATE" alt="자격증"></Item>
        <Item title="SKILL" alt="스킬) JAVA, SPRING 등"></Item>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Experience);
