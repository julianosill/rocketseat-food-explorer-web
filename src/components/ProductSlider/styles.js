import styled from 'styled-components'

export const SwiperSlide = styled.div.attrs({ as: 'swiper-slide' })`
  height: auto;
`

export const NavButton = `
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    width: 14rem;
    height: 100%;
    margin: 0;

    color: white;

    transition: all 0.2s ease;

    @media (max-width: 768px) {
      width: 4rem;
    }
  }

  .swiper-button-prev svg, .swiper-button-next svg {
    width: auto;
    height: 4rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
`

export const PrevButton = `
  .swiper-button-prev {
    left: 0;
    background-image: linear-gradient(to left, rgba(0,15,15,0), rgba(0,10,15,1));

    justify-content: start;

    @media (max-width: 768px) {
      opacity: 0.5;
    }
  }
`

export const NextButton = `
  .swiper-button-next {
    right: 0;
    background-image: linear-gradient(to right, rgba(0,15,15,0), rgba(0,10,15,1));

    justify-content: end;
  }
`
