import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg,setBigshoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className='flex flex-col xl:flex-row p-2 min-h-screen justify-center w-full gap-10 max-container'
    >
    <div className='relative flex-col flex xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className='text-coral-red font-montserrat text-xl'>Our Summer Collections</p>
      <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
        <span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
      </h1>
      <p className='text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="Shop now" iconURL={arrowRight}/>
      <div>
        <div className=' flex justify-start items-start flex-wrap gap-16 mt-20'>
        {
          statistics.map((stat) => (
            <div key={stat.label}>
              <p className=' text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
    <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-white bg-hero bg-cover bg-center'>
      <img 
        src={bigShoeImg}
        alt='shoe collection'
        width={610}
        height={500}
        className=' object-contain relative z-10'
      />
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6' >
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage = { (changedImg) => {setBigshoeImg(changedImg)}}
              bigShoeImage={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Hero