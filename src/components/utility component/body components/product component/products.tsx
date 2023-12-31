
import CartButton from "../../carts component/cartButton"
import ProductAmmountContainer from "./product ammount/productAmmountContainer"
import ProductAmmountCounter from "./product ammount/productCounter"
import { product } from "../../../../assets/util/data"


const Products : React.FC = () =>{

    

    return (
      <>
        {product.map((item, index)=>{
            return (
                <div key={index} className='flex flex-col gap-3'>
                    <div className=' text-orange-500'>{item.company.toLocaleUpperCase()}</div>
                    <div className=' font-bold text-4xl'>{item.title}</div>
                    <div className=' leading-7 lea'>{item.description}</div>
                    <div className='flex gap-4 justify-between items-center'>
                        <div className='flex gap-4 items-center'>      
                            <div className='font-bold text-3xl'>{item.price}</div>
                            <div className='text-orange-400 font-extrabold p-1 text-xs rounded-md bg-orange-200 fill-transparent'>{item.percentage}</div>
                        </div>
                        <div className=' text-gray-300 font-semibold line-through'>{item.previousPrice}</div>
                    </div>
                    <ProductAmmountContainer>
                        <ProductAmmountCounter data={item}/>
                    </ProductAmmountContainer>
                    <CartButton data={item}  />
                </div>
            )
        })}
      </>
    )
}
export default Products