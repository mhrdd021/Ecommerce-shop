import React from 'react'

//Data
import {TestimonialsData} from  '../../data/testimonials'

//Swiper
import {Swiper, SwiperSlide} from 'swiper/react'

//Style
import css from './Testimonials.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

//Images
import Hero from '../../assets/testimonialHero.png'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>نظر برتر</span>
                <span>
                    قیمت‌های مناسب و منصفانه بهمراه کیفیت عالی و ارسال منظم.
                </span>
            </div>
        

            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100K</span>
                <span>خرید لذت‌بخش از ما</span>
            </div>
        </div>

        <div className={css.reviews}>نظرات</div>

        <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                856: {
                    slidesPerView : 3
                },
                640: {
                    slidesPerView : 2
                },
                0: {
                    slidesPerView : 1
                }
            }}
            >
                {
                    TestimonialsData.map((testimonial,i) => (
                        <SwiperSlide key={i}>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt=""/>
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials