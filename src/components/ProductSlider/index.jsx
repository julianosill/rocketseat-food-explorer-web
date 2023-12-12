import PropTypes from 'prop-types'
import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

import { useAuth } from '../../hooks/auth.useAuth'

import { ProductCard } from '../ProductCard'
import * as S from './styles'

register()

export function ProductSlider({ data }) {
  const { isAdmin } = useAuth()
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const swiperParams = {
      navigation: true,
      injectStyles: [S.NavButton, S.PrevButton, S.NextButton],
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 16,
          slidesOffsetBefore: 28,
          slidesOffsetAfter: 28,
        },
        320: {
          slidesPerView: 1.8,
          spaceBetween: 16,
          slidesOffsetBefore: 28,
          slidesOffsetAfter: 28,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
          slidesOffsetBefore: 28,
          slidesOffsetAfter: 28,
        },
        768: { slidesPerView: 2.5, spaceBetween: 28 },
        1024: { slidesPerView: 3.4, spaceBetween: 28 },
      },
    }
    Object.assign(swiperContainer, swiperParams)
    swiperContainer.initialize()
  }, [])

  return (
    <S.SwiperContainer ref={swiperRef} init="false">
      {data.map(product => {
        return (
          <S.SwiperSlide key={product.id}>
            <ProductCard.Root product={product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Description />
              <ProductCard.Price />
              {!isAdmin && <ProductCard.Actions />}
              <ProductCard.Bookmark />
            </ProductCard.Root>
          </S.SwiperSlide>
        )
      })}
    </S.SwiperContainer>
  )
}

ProductSlider.propTypes = {
  data: PropTypes.array.isRequired,
}
