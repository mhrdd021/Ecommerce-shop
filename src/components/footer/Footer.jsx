import React from 'react'

//Style
import css from './Footer.module.css'

//Images
import Logo from '../../assets/logo.png'

//Icons
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter} style={{direction:"rtl"}}>
          <div className={css.logo}>
            <div style={{display: 'flex'}} className={css.logoContainer}>
              <img src={Logo} alt=""/>
              <span>MHRDD</span>
            </div>
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>

          <div className={css.block}>
            <div className={css.details}>
              <span className={css.headTitle}>لینک‌های پرکاربرد</span>

              <hr className={css.blockLine}/>

              <span className={css.pngLink}>
                <span>صفحه اصلی</span>
              </span>

              <span className={css.pngLink}>
                <span>محصولات</span>
              </span>

              <span className={css.pngLink}>
                <span>نظرات</span>
              </span>

              <span className={css.pngLink}>
                <span>جدیدترین ها</span>
              </span>

              <span className={css.pngLink}>
                <span>تخفیف دار ها</span>
              </span>

            </div>
          </div>

          <div className={css.block}>
            <div className={css.details}>
              <span className={css.headTitle}>ارتباط با ما</span>

              <hr className={css.blockLine2}/>

              <input placeholder='ایمیل را وارد کنید' className={css.contantInput}>
              </input>

              <span className={css.pngLine}>
                <MdOutlineLocationOn className={css.icon}/>
                <span>سهروردی-مجتمع بهار</span>
              </span>

              <span className={css.pngLine}>
                <BsTelephone className={css.icon}/>
                <span>09123456789</span>
              </span>

              <span className={css.pngLine}>
                <MdOutlineEmail className={css.icon}/>
                <span>mhrddmhrdd0@gmail</span>
              </span>


            </div>
          </div>

        </div>

        <div className={css.copyRight}>
          <span>Copyright @2023 already by MHRDD</span>
          <span>Alright Reserved</span>
        </div>
    </div>
  )
}

export default Footer