import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section class='max-container'>
      <h3 class='font-palanquin text-4xl font-bold text-center '>
        What Our <span class='text-coral-red'>Customers</span> Say?
      </h3>

      <p class='info-text max-w-lg text-center m-auto mt-4'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div class='flex flex-1 gap-14 mt-24 justify-evenly items-center max-lg:flex-col'>
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