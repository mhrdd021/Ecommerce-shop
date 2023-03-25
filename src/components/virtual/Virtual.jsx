import React from 'react'

//Package
import ReactCompareImage from 'react-compare-image'

//Style
import css from './Virtual.module.css'

//Images
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>تفاوت را حس کنید</span>
            <span>هرگز محصولات تقلبی را دوباره نخرید!</span>
            <span>همین حالا امتحان کنید!</span>
            <img src={Shade} alt=""/>
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage 
                leftImage={Before} 
                rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Virtual