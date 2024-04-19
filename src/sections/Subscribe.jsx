import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section class='max-container flex justify-between items-center max-lg:flex-col gap-10' id="contact-us">
      <h3 class='text-4xl text-center leading-[68px] font-palanquin font-bold lg:max-w-md'>Sign Up For <span class='text-coral-red'>Updates</span> & Newsletter</h3>
      <div class='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input 
          type="text" 
          placeholder="subscribe@nike.com" 
          class='input'
        />
        <div class='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
      
    </section>
    
      
  )
}

export default Subscribe