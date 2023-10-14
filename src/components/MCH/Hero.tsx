import { nunito } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ai from "../../../public/ai.png";
import canva from "../../../public/canva.png";
import figma from "../../../public/figma.png";
import incscape from "../../../public/incscape.png";
import ps from "../../../public/ps.png";
import Image from "next/image";
import Laptop from "../Laptop";

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
  text-decoration: none !important;
  color: ${({ theme }) => theme.colors.textPrimary};
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  img {
    margin: 0;
    margin-top: 0px;
    margin-right: 10px;
  }
`;

const RightSection = styled.div`
  transform: translate(0, -30px);
  max-height: 650px;
  flex: 1;
  background-image: url(../mchhero.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

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
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
`;

const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <Navigation>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Title>Julia Kawczynska</Title>
          </Link>
          <Links>
            <Link href="#projekty">Projekty</Link>
            <Link href="#kontakt">Kontakt</Link>
          </Links>
        </Navigation>
        <PageTitle className={nunito.className}>LANDING PAGE</PageTitle>
        <Heading>
          <b>MCH Nieruchomość </b>
        </Heading>
        <SubHeading className={nunito.className}>
          Kolejny projekt, gdzie pojawiła się świetna możliwość stworzenia
          brandingu od podstaw. Spełnienie wizji marki w postaci strony i
          wizytówek to sama przyjemność. Więcej szczegółów poniżej.
        </SubHeading>
        <SubHeading className={nunito.className} style={{ marginBottom: 20 }}>
          Programy użyte przy tworzeniu projektu:
        </SubHeading>
        <Wrapper>
          <Image src={ai} alt="Adobe Ilustrator" width={40} height={40} />
          <Image src={figma} alt="Figma" width={40} height={40} />
          <Image src={ps} alt="PS" width={40} height={40} />
          <Image src={incscape} alt="Inscape" width={50} height={40} />
          <Image src={canva} alt="Canva" width={40} height={40} />
        </Wrapper>
      </LeftContainer>
      <RightSection>
        <Laptop
          image={{
            src: "../mch_laptop.png",
            alt: "PURP project",
          }}
        />
      </RightSection>
    </HeroContainer>
  );
};

export default Hero;
