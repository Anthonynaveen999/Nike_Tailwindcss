import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className='flex flex-wrap items-center max-lg:flex-col-reverse max-container gap-10'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='w-full object-contain'/>
      </div>
      <div className='flex flex-col flex-1'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='info-text  mt-4'>Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
        <p className='info-text  mt-4 '>Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
    
      
  )
}

export default SpecialOffers