import React from "react";
import styled from "styled-components";
import Wave from "./Wave";

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
);

export default Section;

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 820px;
  }
`;
const WaveBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: -6px;
`;
const WaveTop = styled.div`
  width: 100%;
  position: absolute;
  top: -6px;
  transform: rotate(180deg);
`;
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`;
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 720px) {
    font-weight: 40px;
  }
`;
const SectionText = styled.p`
  color: white;
`;
