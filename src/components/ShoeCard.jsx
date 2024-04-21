// import { bigShoe1,bigShoe2,bigShoe3 } from "../assets/images"

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImage}) => {
    const handleClick = () => {
        if(imgURL.bigShoe !== bigShoeImage){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div 
        className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}  cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl'>
            <img src={imgURL.thumbnail} alt="shoe Collection" width={127} height={103} className='object-contain '/>
        </div>
    </div>
  )
}

export default ShoeCard