import theme from "@/styles/theme";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import funtales from "../../../public/funtales_projekty.png";
import purp from "../../../public/purp_projekty.svg";
import mch from "../../../public/mch_projekty.svg";
import Image from "next/image";
import Link from "next/link";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  width: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.s}px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
`;

const ActionButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 30px;
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

const ImgContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
`;

const Projekty = () => {
  return (
    <Container id="projekty">
      <SectionHeading color={theme.colors.purpleSecondary}>
        Projekty
      </SectionHeading>
      <ProjectRow>
        <Card>
          <Heading>FunTales</Heading>
          <SubHeading>Aplikacja dla dzieci</SubHeading>
          <Body>
            Możliwość tworzenia kolorowej aplikacji dla dzieci z
            persjonalizowanymi bajkami to ogromne pole do popisu. Zajrzyj co
            udało się stworzyć!
          </Body>
          <Link href="/projects/funtales">
            <ActionButton> Zobacz projekt</ActionButton>
          </Link>
        </Card>
        <ImgContainer>
          <Image
            src={funtales}
            alt="Funtales Projekt"
            width={600}
            height={500}
            layout="responsive"
          />
        </ImgContainer>
      </ProjectRow>
      <ProjectRow>
        <ImgContainer>
          <Image
            src={purp}
            alt="Purp Projekt"
            width={600}
            height={500}
            layout="responsive"
          />
        </ImgContainer>
        <Card>
          <Heading>PURP</Heading>
          <SubHeading>strona agencji pośrednictwa pracy</SubHeading>
          <Body>
            Projekt obejmuje stworzenie landing page oraz nowego brandingu dla
            firmy zajmującej się pośrednictwem pracy. Zapoznaj się ze
            szczegółami procesu odświeżenia wizerunku.
          </Body>
          <Link href="/projects/purp">
            {" "}
            <ActionButton> Zobacz projekt</ActionButton>
          </Link>
        </Card>
      </ProjectRow>
      <ProjectRow>
        <Card>
          <Heading style={{ fontSize: 35 }}>MCH Nieruchomości</Heading>
          <SubHeading>strona agencji nieruchomości</SubHeading>
          <Body>
            Celem projektu jest przedstawienie oferty agencji zajmującej się
            zarządzaniem nieruchomościami przy jednoczesnym stworzeniu całego
            brandingu od podstaw.
          </Body>
          <Link href="/projects/mch_nieruchomosci">
            <ActionButton> Zobacz projekt</ActionButton>
          </Link>
        </Card>
        <ImgContainer>
          <Image
            src={mch}
            alt="Michal Chojnacki Projekt"
            width={600}
            height={500}
            layout="responsive"
          />
        </ImgContainer>
      </ProjectRow>
    </Container>
  );
};

export default Projekty;
