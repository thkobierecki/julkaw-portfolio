import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 700px;

  .laptop {
    width: 100%;
  }
  .preview {
    position: absolute;
    width: 68%;
    height: 55%;
    overflow-y: scroll;
    top: 18%;
    left: 16%;

    img{
      width:100%;
    }
  }
`;

const Laptop = ({image}:any) => {
  return (
    <Wrapper>
      <img
        className="laptop"
        src="../../../laptop.svg"
        alt="MacBook Computer Apple"
      />
      <div className="preview">
        <img
          src={image.src}
          alt={image.alt}
        ></img>
      </div>
    </Wrapper>
  );
};

export default Laptop;
