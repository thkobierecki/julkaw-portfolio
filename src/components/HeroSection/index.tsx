import { nunito } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  padding-left: 30px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 650px;
`;

const Navigation = styled.div`
  flex: 1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s}px;
`;

const Links = styled.div`
  a {
    text-decoration: none;
    color: #333;
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSize.s}px;
  }
  a:last-child {
    margin-right: 0;
  }
  a:hover {
    text-decoration: underline;
    transition: all 2s ease;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl}px;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight[3]};
  max-width: 530px;
`;

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m}px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
  max-width: 530px;
`;

const ActionButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.purpleSecondary};
  color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.purpleSecondary};
  border-radius: 6px;
  cursor: pointer;
  min-width: 80px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
    transition: all 2s ease-in;
  }
`;
const ActionButtonOutlined = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purpleSecondary};
  border: 2px solid ${({ theme }) => theme.colors.purpleSecondary};
  border-radius: 6px;
  cursor: pointer;
  min-width: 80px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
    transition: all 2s ease-in;
  }
`;

const RightImage = styled.img`
  transform: translate(0, -30px);
  max-height: 600px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 500px;
  }
`;

const PageTitle = styled.h3`
  margin-top: 40px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l}px;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
`;

const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <Navigation>
          <Title>Julia Kawczynska</Title>
          <Links>
            <Link href="#projekty">Projekty</Link>
            <Link href="#kontakt">Kontakt</Link>
          </Links>
        </Navigation>
        <PageTitle className={nunito.className}>GRAPHIC DESIGN</PageTitle>
        <Heading>
          <b>Cześć</b>, zapraszam Cię do zapoznania się z moim <b>portfolio!</b>
        </Heading>
        <SubHeading className={nunito.className}>
          Grafika komputerowa to dla mnie świetna przestrzeń do połączenia
          umiejętności ścisłych z kreatywnymi. W swoich projektach stawiam na
          minimalizm i czytelność uzupełnioną charakterystycznym akcentem
          nadającym całości osobowości.
        </SubHeading>
        <div>
          <ActionButtonOutlined>LinkedIn</ActionButtonOutlined>
          <ActionButton>CV</ActionButton>
        </div>
      </LeftContainer>
      <RightImage src="profile.png" alt="Background" />
    </HeroContainer>
  );
};

export default Hero;
