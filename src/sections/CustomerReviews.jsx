import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl font-bold text-center '>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>

      <p className='info-text max-w-lg text-center m-auto mt-4'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='flex flex-1 gap-14 mt-24 justify-evenly items-center max-lg:flex-col'>
        {
          reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews