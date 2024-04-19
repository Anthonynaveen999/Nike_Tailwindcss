import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div class='flex flex-wrap justify-between items-start gap-20 max-lg:flex-col'>
        <div class='flex flex-col items-start'>
          <a href="/">
            <img 
              src={footerLogo}
              width={150} 
              height={46}
            />
          </a>
          <p class='mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm text-base'>Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
          <div class='flex items-center gap-5 mt-8'>
            {
              socialMedia.map((icon) => (
                <div class='flex gap-2 justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img 
                  src={icon.src} 
                  alt={icon.alt}
                  height={24}
                  width={24}
                />
                </div>
              ))
            }
          </div>
        </div>
        <div class='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 class='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                <ul>
                {
                  section.links.map((link) => (
                    <li 
                      class='text-white-400 mt-2.5 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))
                }
                </ul>
                
              </div>
            ))
          }
        </div>
      </div>
      <div class='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div class='flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer'>
          <img 
            src={copyrightSign} 
            alt="copy-right-sign" 
            width={20} 
            height={20}
            class='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p class='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer