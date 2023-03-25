import {React, useState} from 'react'

//Data
import { ProductsData } from "../../data/products"

//Style
import css from './Products.module.css'

//Images
import Plane from '../../assets/plane.png'

//Animation
import {useAutoAnimate} from '@formkit/auto-animate/react'


const Products = () => {

const [parent] = useAutoAnimate()


const [MenuProducts , setMenuProducts] = useState(ProductsData)

const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type))
}
  return (
    <div className={css.container}>
        <img src={Plane} alt=""/>
        <h1>محصولات ویژه ما</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>همه</li>
                <li onClick={()=>filter("skin care")}>مرطوب کننده</li>
                <li onClick={()=>filter("conditioner")}>آب رسان</li>
                <li onClick={()=>filter("foundation")}>ضد چروک</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    MenuProducts.map((product, i) => (
                        <div className={css.product} key={i}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>

                                    <span>{product.price}$</span>
                                    <div>Show now</div>
                                </div>

                                <img src={product.img} alt="" className="img-p"/>    
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products