import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    overflow-y: hidden;
    top: 12%;
    left: 32%;
    border-radius: 20px;

    img {
      width: 100%;
    }
  }
`;

const PhoneSlider = () => {
  return (
    <Wrapper>
      <img
        className="laptop"
        src="../../../phon.svg"
        alt="MacBook Computer Apple"
      />
      <div className="preview">
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="../zaloguj_sie.png" alt="Screen 1"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../onboarding1.png" alt="Screen 2"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../onboarding2.png" alt="Screen 3"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../onboarding3.png" alt="Screen 4"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../onboarding4.png" alt="Screen 5"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../dodaj_dziecko.png" alt="Screen 6"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../home.png" alt="Screen 8"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../profil.png" alt="Screen 7"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default PhoneSlider;
