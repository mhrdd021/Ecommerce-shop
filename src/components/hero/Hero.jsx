import React from 'react'

//Animation
import {motion} from 'framer-motion'

//Style
import css from './Hero.module.css'

//Images
import HeroImg from '../../assets/hero.png'

//Icons
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {

    const transition = {duration: 3 , type: "spring"}

  return (
    <div className={css.container}>

        {/* Left Side */}
        <div className={css.h_sides}>
            <span className={css.text1}>محصولات مراقبتی از پوست</span>

            <div className={css.text2}>
                <span>کالکشن جدید</span>
                <span>کالکشن جدید از محصولات مراقبتی از پوست و لوسیون های متنوع بدن    
                </span>
            </div>
        </div>

        {/* Middle Side */}
        <div className={css.wrapper}>
            <motion.div
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            className={css.blueCircle}
            transition={transition}
            >
            </motion.div>

            <motion.img 
            src={HeroImg} 
            alt=""
            transition={transition}
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            width={600}
            />

            <motion.div 
            className={css.cart2}
            transition={transition}
            initial={{right: "4%"}}
            whileInView={{right: "-10%"}}
            >
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>همین حالا ثبتنام کنید</span>
                    
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>

            </motion.div>
        </div>

        {/* Right Side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5M</span>
                <span>بازدید ماهانه</span>
            </div>

            <div className={css.customers}>
                <span>100K</span>
                <span>مشتری جدید</span>
            </div>
        </div>

    </div>
  )
}

export default Hero