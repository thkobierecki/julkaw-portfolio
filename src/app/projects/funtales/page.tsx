"use client";

import Hero from "@/components/Funtales/Hero";
import Image from "next/image";
import styled from "styled-components";
import wave from "../../../../public/footerblue.svg";
import wrozka from "../../../../public/wrozka_pom+ziel.png";
import wrozkaBl from "../../../../public/wrozka_blond_nieb.png";
import hero from "../../../../public/superhero.png";
import lisek from "../../../../public/lisek_adventures_bezcienia.png";
import thinking from "../../../../public/thinkingfoxy.png";
import mysz from "../../../../public/mysz.png";
import dino from "../../../../public/dino.png";
import funtales_ig from "../../../../public/funtales_ig.png";
import Kontakt from "@/components/Kontakt";
import theme from "@/styles/theme";
import Phone from "@/components/Phone";
import { nunito } from "@/app/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import PhoneSlider from "@/components/Phone/Slider";

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
    display:none;
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

const IlustrationCarousel = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper
      {...params}
      navigation
      centeredSlides
      watchSlidesProgress={true}
      modules={[Navigation, EffectCoverflow]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.4,
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <Image
          src={wrozka}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={wrozkaBl}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={hero}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={lisek}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={mysz}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={thinking}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={dino}
          alt="wave"
          width={200}
          height={250}
          // layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  );
};

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
              Projekt logo stanowi centralny element identyfikacji wizualnej,
              którego motywem jest postać sympatycznego liska. Lisek ten odgrywa
              kluczową rolę jako przewodnik w aplikacji, łącząc świat zabawy i
              nauki. Logo jest utrzymane w minimalistycznym stylu,
              przedstawiając liska obok otwartej książki, co ma na celu wyraźnie
              podkreślić tematykę aplikacji, w której nauka idzie w parze z
              rozrywką.
            </Body>
            <Body className={nunito.className}>
              Kolory zostały wybrane z myślą o stworzeniu przyjaznego i
              dostosowanego do dzieci klimatu, w którym akcentuje się radość
              oraz zachęca do odkrywania i eksploracji.{" "}
            </Body>
          </Card>
          <ImgContainer url={"../ftlogos.svg"}></ImgContainer>
        </ProjectRow>
        <ProjectRow>
          <ImgContainer
            url={"../ftcarbg.svg"}
            style={{ justifyContent: "flex-start" }}
          >
            <div className="caruselContainer">
              <IlustrationCarousel />
            </div>
          </ImgContainer>
          <Card>
            <Heading>Ilustracje</Heading>
            <Body className={nunito.className}>
              Wszystkie ilustracje użyte w projekcie są mojego autorstwa i
              zostały wykonane w programie Illustrator. Dzięki zapisie
              wektorowym można ich używać w różnych miejscach i skalować
              dowolnie. Jest to szczególnie przydatne, ponieważ zależnie od
              wyboru postacie pojawiają się wraz ze stworzoną historią, aby
              dziecko mogło bardziej się z nimi utożsamić, a co za tym idzie -
              lepiej skupić się na przekazywanej historii i wartościach.
            </Body>
            <Body className={nunito.className}>
              Postacie są proste, wraz z rozwojem aplikacji będzie ich więcej, w
              przyszłości również pojawi się możliwość edycji poszczególnych
              elementów wyglądu bohaterów.
            </Body>
          </Card>
        </ProjectRow>
        <ProjectRow>
          <Card>
            <Heading>Landing Page</Heading>
            <Body className={nunito.className}>
              Strona landingowa została stworzona w dwóch kluczowych celach. Po
              pierwsze, jej głównym zadaniem jest prezentacja aplikacji osobom
              zainteresowanym. Po drugie, stanowi platformę do zbierania adresów
              e-mail do newslettera. Dzięki newsletterowi będzie możliwość
              utrzymywania kontaktu z użytkownikami, dostarczając im regularne
              aktualizacje na temat postępów w tworzeniu aplikacji oraz
              wysyłając próbne historie. To działanie ma na celu zbudowanie bazy
              potencjalnych klientów jeszcze przed oficjalnym uruchomieniem
              aplikacji oraz otwiera możliwość otrzymywania cennych informacji i
              sugestii od przyszłych użytkowników.
            </Body>
          </Card>
          <ImgContainer url={"../ftlandbg.svg"}>
            <Phone
              image={{ src: "../funtales_telefon.png", alt: "Funtales mobile" }}
            />
          </ImgContainer>
        </ProjectRow>
        <ProjectRow>
          <ImgContainer url={"../ftappbg.svg"}>
            <PhoneSlider />
          </ImgContainer>
          <Card>
            <Heading>App Design</Heading>
            <Body className={nunito.className}>
              W tym obszarze możesz zobaczyć fragment projektu aplikacji, nad
              którym wciąż trwają prace. Celem jest stworzenie jak najbardziej
              intuicyjnego narzędzia dla rodziców, którzy chcą wspólnie z
              dziećmi tworzyć własne opowieści. W tym procesie nieustannie
              wspiera nas przewodnik aplikacji, sympatyczny rudy lis. Nie tylko
              udziela on wskazówek dotyczących korzystania z aplikacji, ale
              dostarcza także ciekawych informacji opartych na badaniach
              naukowych dotyczących wpływu czytania historii na rozwój dziecka.
              Poza tą ważną rolą, lis ma być także przyjacielską maskotką, do
              której dzieci chętnie będą wracać wieczór po wieczorze!
            </Body>
          </Card>
        </ProjectRow>
        <ProjectRow>
          <Card>
            <Heading>Social Media</Heading>
            <Body className={nunito.className}>
              Wszystkie kanały społecznościowe utrzymują spójność w zakresie
              kolorystyki, co pomaga budować rozpoznawalność marki. Jednym z
              kluczowych elementów postów jest obecność wspomnianego wcześniej
              liska, który towarzyszy w komunikacji. To zapewnia spójność
              wszystkich prezentowanych treści, które nie tylko przyciągają
              uwagę potencjalnych użytkowników aplikacji, ale także niosą ze
              sobą wartościowe treści z zakresu parentingu, skupiając się na
              korzyściach płynących z czytania dzieciom od najmłodszych lat.
              Treści na mediach społecznościowych to nie tylko promocja
              aplikacji, ale również edukacja i wsparcie dla rodziców w ich roli
              wychowawczej.
            </Body>
          </Card>
          <ImgContainer url={"../ftscbg.svg"}>
            <Image
              src={funtales_ig}
              alt="Funtales Projekt"
              width={400}
              height={400}
              style={{border:"2px solid white", borderRadius: 8, marginTop: 30, marginLeft: 30}}
              // layout="responsive"
            />
          </ImgContainer>
        </ProjectRow>
        <Kontakt color={theme.colors.lightBlue} />
        <Footer />
      </ContentWrapper>
    </TemplateContainer>
  );
}
