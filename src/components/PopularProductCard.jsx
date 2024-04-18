import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL,name,price }) => {
  return (
    <div class='flex flex-col flex-1 w-full max-sm:w-full'>
        <img src={imgURL} alt={name} class='w-[280px] h-[280px]'/>
        <div class='flex gap-2.5 mt-8 justify-start'>
            <img src={star} alt="rating" width={24} height={24}/>
            <p class='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 class=' font-semibold font-palanquin mt-2 text-2xl leading-normal'>{name}</h3>
        <p class='text-coral-red font-montserrat font-semibold text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard