"use client";

import Hero from "@/components/Pupr/Hero";
import Image from "next/image";
import styled from "styled-components";
import wave from "../../../../public/purpfot.svg";
import fbpurp from "../../../../public/fb_purp.png";
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
              Stare logo przeszło subtelne odświeżenie, które polegało na
              wprowadzeniu nowej palety kolorów, będących teraz głównymi barwami
              identyfikacji wizualnej. Pomimo tych zmian, zachowany został wzór
              logo, co pozwoli na kontynuację skojarzeń z renomowaną marką wśród
              stałych klientów.
            </Body>
            <Body className={nunito.className}>
              Kluczowym elementem odświeżonej kolorystyki jest ciemna butelkowa
              zieleń, która nadaje marce profesjonalny charakter i powagę.
              Jednocześnie jasna miętowa zieleń, która stanowi uzupełnienie,
              dodaje jasności i czytelności. Wprowadzenie tych kolorów do
              identyfikacji wizualnej ma na celu zwiększenie atrakcyjności i
              spójności marki w oczach klientów.
            </Body>
          </Card>
          <ImgContainer url={"../purplogos.svg"}></ImgContainer>
        </ProjectRow>
        <ProjectRow>
          <ImgContainer url={"../purplandbg.svg"}>
            <Phone image={{ src: "../purp_telefon.png", alt: "purp mobile" }} />
          </ImgContainer>
          <Card>
            <Heading>Landing Page</Heading>
            <Body className={nunito.className}>
              Główna rola strony to rozszerzona wizytówka. Zaraz pod nawigacją
              umieszczona jest opcja przeniesienia się bezpośrednio do
              formularza kontaktowego.
            </Body>
            <Body className={nunito.className}>
              Niżej znajdują się sekcje informacyjne, które prezentują charakter
              firmy oraz oferowane usługi. Aby dodatkowo przekonać potencjalnych
              klientów do nawiązania kontaktu, pojawiają się opinie klientów
              oraz informacje o dotychczasowych współpracach. Na dole strony
              znajduje się zaproszenie do zapisania się do newslettera.
              Wszystkie te elementy tworzą spójną całość, która służy
              prezentacji marki oraz zachęcaniu odwiedzających do korzystania z
              oferty.
            </Body>
          </Card>
        </ProjectRow>
        <ProjectRow>
          <Card>
            <Heading>Social Media</Heading>
            <Body className={nunito.className}>
              W celu pełnego uzupełnienia brandingu, motyw kolorystyczny został
              także przeniesiony na profile w mediach społecznościowych. W
              przypadku social mediów, większy nacisk położony został na użycie
              ciemniejszego odcienia z wcześniej ustalonej palety kolorów. To
              pozwoliło na stworzenie wyrazistego kontrastu, co przyciąga wzrok
              odwiedzających.
            </Body>
            <Body className={nunito.className}>
              W tle profili społecznościowych umieszczone zostały kluczowe
              informacje, które mają za zadanie zachęcić użytkowników do
              odwiedzenia strony internetowej lub nawiązania bezpośredniego
              kontaktu.
            </Body>
          </Card>
          <ImgContainer url={"../purpscbg.svg"}>
            <Image
              src={fbpurp}
              alt="Funtales Projekt"
              width={450}
              height={320}
              style={{
                border: "2px solid white",
                borderRadius: 8,
                marginTop: 30,
                marginLeft: 30,
              }}
              // layout="responsive"
            />
          </ImgContainer>
        </ProjectRow>
        <Kontakt color={theme.colors.lightGreen} />
        <Footer />
      </ContentWrapper>
    </TemplateContainer>
  );
}
