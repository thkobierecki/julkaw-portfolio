"use client";

import Hero from "@/components/MCH/Hero";
import Image from "next/image";
import styled from "styled-components";
import wave from "../../../../public/mchft.svg";
import wizytowki from "../../../../public/mchwz.png";
import Kontakt from "@/components/Kontakt";
import theme from "@/styles/theme";
import Phone from "@/components/Phone";
import { nunito } from "@/app/fonts";

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

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 80px 30px;
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 8px 2px #00000011;
  margin: 20px 20px;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight[5]};
`;
const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l}px;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight[5]};
`;
const Body = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
`;

const ImgContainer = styled.div<{ url: string }>`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  min-height: 500px;
  max-height: 650px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    min-width: 200px;
    min-height: 240px;
    display: none;
  }

  .caruselContainer {
    width: 80%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 20px;
    height: 20px;
  }
  .swiper-button-prev {
    background-image: url(../arrow-left.svg) !important;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }
  .swiper-button-next {
    background-image: url(../arrow-right.svg) !important;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }
  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev::after {
    display: none;
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
        <ProjectRow>
          <Card>
            <Heading>Logo i kolorystyka</Heading>
            <Body className={nunito.className}>
              W przypadku usług związanych z rynkiem nieruchomości, oczekiwania
              klientów oscylują wokół doświadczenia premium na najwyższym
              poziomie. Dlatego w projekcie kolorystyka ma przede wszystkim
              emanować profesjonalizmem i elegancją, odpowiadając na te
              oczekiwania.
            </Body>
            <Body className={nunito.className}>
              Kombinacja ciemnogranatowego i złotego tworzy spójną i elegancką
              paletę kolorów, która doskonale oddaje profesjonalne i dopasowane
              podejście do obsługi klienta na rynku nieruchomości oraz wyznacza
              markę jako godną zaufania i ekskluzywną.
            </Body>
          </Card>
          <ImgContainer url={"../mchlogo.svg"}></ImgContainer>
        </ProjectRow>
        <ProjectRow>
          <ImgContainer url={"../mchldbg.svg"}>
            <Phone image={{ src: "../mch_telefon.png", alt: "mch mobile" }} />
          </ImgContainer>
          <Card>
            <Heading>Landing Page</Heading>
            <Body className={nunito.className}>
              Strona została starannie przygotowana w wersjach desktopowej i
              mobilnej, by zapewnić czytelność i wygodę użytkowania na różnych
              urządzeniach. Głównym celem jest prezentacja szerokiej oferty
              związanej z zarządzaniem nieruchomościami.
            </Body>
            <Body className={nunito.className}>
              Sekcja `O Nas` pozwala lepiej przedstawić firmę i charakter jej
              usług. Na samej górze strony znajduje się strategiczny odnośnik
              zachęcający do kontaktu, umożliwiający intuicyjny kontakt zarówno
              dla nowych, jak i potencjalnych klientów. Strona została
              zaprojektowana z myślą o dostarczeniu kompleksowej informacji i
              ułatwieniu interakcji z firmą.
            </Body>
          </Card>
        </ProjectRow>
        <ProjectRow>
          <Card>
            <Heading>Projekt wizytówki</Heading>
            <Body className={nunito.className}>
              Stworzona została także wizytówka, która doskonale współgra stylem
              z stroną internetową. Głównym celem było skomponowanie wizytówki,
              która jest nie tylko minimalistyczna, ale także bardzo czytelna,
              zawierając jedynie niezbędne informacje kontaktowe.
            </Body>
            <Body className={nunito.className}>
              Projekt wizytówki jest konsekwentny z podejściem do prostoty i
              elegancji. Wizytówka zawiera tylko niezbędne informacje
              kontaktowe, co sprawia, że jest przejrzysta i łatwa do odczytania.
              Ta spójność między stroną internetową a wizytówką pomaga w
              budowaniu rozpoznawalności marki i pozostawia pozytywne wrażenie u
              klientów.
            </Body>
          </Card>
          <ImgContainer url={"../mchscbg.svg"}>
            <Image
              src={wizytowki}
              alt="Funtales Projekt"
              width={450}
              height={350}
              // layout="responsive"
            />
          </ImgContainer>
        </ProjectRow>
        <Kontakt color={theme.colors.gold} />
        <Footer />
      </ContentWrapper>
    </TemplateContainer>
  );
}
