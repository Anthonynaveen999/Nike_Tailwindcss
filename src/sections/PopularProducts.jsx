import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section 
      id="products" 
      class='max-container max-sm:mt-12'
    >
      <div class='flex flex-col justify-start gap-5'>
        <h2 class='text-4xl font-palanquin font-bold'>Our <span class='text-coral-red'>Popular</span> Products</h2>
        <p class=' lg:max-w-lg mt-2 text-slate-gray text-lg leading-8 font-montserrat'> Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value </p>
      </div>
      <div class='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {
          products.map((product) => (
            <PopularProductCard 
              key={product.name} {...product}
            />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts