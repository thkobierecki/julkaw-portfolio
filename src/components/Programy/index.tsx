import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import { nunito } from "@/app/fonts";
import theme from "@/styles/theme";
import ai from "../../../public/ai.png";
import animator from "../../../public/animator.png";
import canva from "../../../public/canva.png";
import figma from "../../../public/figma.png";
import framer from "../../../public/framer.png";
import incscape from "../../../public/incscape.png";
import ps from "../../../public/ps.png";
import Image from "next/image";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m}px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight[3]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  img {
    margin: 10px 20px;
  }
`;

const Programy = () => {
  return (
    <Container>
      <SectionHeading color={theme.colors.purpleSecondary}>
        Programy
      </SectionHeading>
      <SubHeading className={nunito.className}>
        Wszystkie programy wykorzystane w tworzeniu przedstawionych poniżej
        projektów.
      </SubHeading>
      <Wrapper>
        <Image src={ai} alt="Adobe Ilustrator" width={80} height={80} />
        <Image src={figma} alt="Figma" width={80} height={80} />
        <Image src={ps} alt="PS" width={80} height={80} />
        <Image src={framer} alt="Framer" width={80} height={80} />
        <Image src={canva} alt="Canva" width={80} height={80} />
        <Image src={incscape} alt="Inscape" width={100} height={80} />
        <Image src={animator} alt="Animator" width={80} height={80} />
      </Wrapper>
    </Container>
  );
};

export default Programy;
