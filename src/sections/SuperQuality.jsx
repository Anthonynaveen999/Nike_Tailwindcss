import Button from '../components/Button';
import { shoe8 } from '../assets/images';
const SuperQuality = () => {
  return (
    <section
      id='about-us'
      class='flex justify-between gap-10 w-full items-center max-container max-lg:flex-col'
    >
      <div class='flex flex-col flex-1'>
        <h2 class='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You <span class='text-coral-red'>Super Quality</span> Shoes
        </h2>
        <p class='info-text lg:max-w-lg mt-4 '>Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.</p>
        <p class='info-text lg:max-w-lg mt-4 '>Our dedication to detail and excellence ensures your satisfaction</p>
        <div class='mt-11'>
          <Button label="View details" />
        </div>
      </div>
      <div class='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="Shoe8" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality