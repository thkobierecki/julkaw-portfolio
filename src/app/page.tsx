"use client";

import Hero from "@/components/HeroSection";
import Kontakt from "@/components/Kontakt";
import Programy from "@/components/Programy";
import Projekty from "@/components/Projekty";
import Image from "next/image";
import styled from "styled-components";
import wave from "../../public/footerPurple.svg";
import theme from "@/styles/theme";

const TemplateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 28px;
`;
const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Copy = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  position: absolute;
  bottom: 130px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    bottom: 60px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Copy>Julia Kawczyńska 2023</Copy>
      <Image
        src={wave}
        alt="wave"
        width={600}
        height={500}
        layout="responsive"
      />
    </Wrapper>
  );
};

export default function Home() {
  return (
    <TemplateContainer>
      <ContentWrapper>
        <Hero />
        <Programy />
        <Projekty />
        <Kontakt color={theme.colors.purpleSecondary} />
        <Footer />
      </ContentWrapper>
    </TemplateContainer>
  );
}
