import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const SwiperContainer = styled.div.attrs({ as: 'swiper-container' })`
  @media (max-width: ${BREAKPOINTS.SM}) {
    left: -2.8rem;
    width: calc(100% + 5.6rem);
  }
`

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
      display: none;
    }
  }

  .swiper-button-prev svg, .swiper-button-next svg {
    width: auto;
    height: 2.75rem;
    transition: all 0.2s ease;
  }

  .swiper-button-prev:hover svg, .swiper-button-next:hover svg {
    color: #82F3FF;
    transform: scale(1.2);
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
  }
`

export const NextButton = `
  .swiper-button-next {
    right: 0;
    background-image: linear-gradient(to right, rgba(0,15,15,0), rgba(0,10,15,1));
    justify-content: end;
  }
`
