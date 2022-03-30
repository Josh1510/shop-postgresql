import React from 'react';
import BannerImg from '../../images/amd-ryzen.webp';
import styled from 'styled-components';

export default function Banner() {
  return (
    <PageContainer>
      <BannerContainer>
        <Styledp>AMD RYZEN 5000 Series</Styledp>
        <Styledp>Now Available!</Styledp>
        <StyledLink href="/shop">SHOP NOW</StyledLink>
      </BannerContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-width: 100vw;
  background-color: #0b0c10;
`;

const BannerContainer = styled.div`
  background: url(${BannerImg}) no-repeat;
  height: 85vh;
  max-width: 1400px;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 120px;
  align-content: center;
`;

const Styledp = styled.p`
  font-size: xx-large;
  background-color: white;
`;

const StyledLink = styled.a`
  padding: 10px 30px;
  color: white;
  background-color: black;
  margin-top: 35px;
  text-decoration: none;
  font-size: xx-large;
  border: white solid 2px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.9) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.9) 0px 1px 3px 1px;
    border: black solid 2px;
    color: black;
    background-color: white;
  }
`;
