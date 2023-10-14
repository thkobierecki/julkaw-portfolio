import React from "react";
import styled from "styled-components";

const HeadingContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const HeadingText = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight[5]};
  z-index: 10;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 22px;
  left: 25%;
  width: 80%;
  height: 10px;
  border-radius: 6px;
  background-color: ${({ color, theme }) => color || theme.colors.textPrimary};
  z-index: 1;
`;

const SectionHeading = ({ children, color }: any) => {
  return (
    <HeadingContainer>
      <HeadingText color={color}>{children}</HeadingText>
      <Underline color={color} />
    </HeadingContainer>
  );
};

export default SectionHeading;
