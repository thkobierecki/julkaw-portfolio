import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 500px;
  margin-left: 30px;
  margin-top: 10px;
  .laptop {
    width: 100%;
  }
  .preview {
    position: absolute;
    width: 36%;
    height: 75%;
    overflow-y: scroll;
    top: 12%;
    left: 32%;
    border-radius: 20px;

    img{
      width:100%;
    }
  }
`;

const Phone = ({image}:any) => {
  return (
    <Wrapper>
      <img
        className="laptop"
        src="../../../phone.svg"
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

export default Phone;
