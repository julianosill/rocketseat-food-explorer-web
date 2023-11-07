import PropTypes from 'prop-types'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

import { ProductCard } from '../ProductCard'

import * as S from './styles'

register()

export function ProductSlider({ data }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const swiperParams = {
      navigation: true,
      injectStyles: [S.NavButton, S.PrevButton, S.NextButton],
      breakpoints: {
        0: { slidesPerView: 1.25, spaceBetween: 16 },
        425: { slidesPerView: 1.25, spaceBetween: 22 },
        768: { slidesPerView: 2.5, spaceBetween: 28 },
        1024: { slidesPerView: 3.5, spaceBetween: 28 },
      },
    }
    Object.assign(swiperContainer, swiperParams)
    swiperContainer.initialize()
  }, [])

  return (
    <swiper-container ref={swiperRef} init="false">
      {data.map(product => {
        return (
          <S.SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </S.SwiperSlide>
        )
      })}
    </swiper-container>
  )
}

ProductSlider.propTypes = {
  data: PropTypes.array.isRequired,
}
