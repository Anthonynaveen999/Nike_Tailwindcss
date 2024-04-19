import { star } from "../assets/icons";

const ReviewCard = ({ imgURL,customerName,rating,feedback }) => {
  return (
    <div class='flex flex-col justify-center items-center'>
        <img 
            src={imgURL} 
            alt="customer" 
            class=' rounded-full object-cover w-[120px] h-[120px]' 
        />
        <p class=' info-text mt-6 max-w-sm text-center'>{feedback}</p>
        <div class='flex gap-2.5 mt-3 justify-center items-center'>
            <img 
                src={star} 
                alt="rating" 
                width={24} 
                height={24} 
            /> 
            <p class='font-montserrat text-xl text-slate-gray'>({rating})</p>
        </div>
        <h3 class='mt-1 font-bold font-palanquin text-3xl text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard