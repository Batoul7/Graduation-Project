import ButtonCommon from '../ButtonCommon/ButtonCommon';
import imgArrowHero from '../../assets/images/Arrows/goArrow.png';
import { Link } from 'react-router-dom';
import iconTwitter from '/src/assets/images/Footer/twitter.png'
import iconYoutube from '/src/assets/images/Footer/icon.png'
import iconlinkedin from '/src/assets/images/Footer/LinkedIn.png'


export default function B_HeroContact() {
  const data = [
    {
      title: "General Inquiries",
      buttons: ["contact@ai-podcasts.com", "+1 (123) 456-7890"]
    },
    {
      title: "Technical Support",
      buttons: ["contact@ai-podcasts.com", "+1 (123) 456-7890"]
    },
    {
      title: "Our Office",
      address: "Address: 123 AI Tech Avenue, Techville, 54321",
      buttons: ["Get Directions"]
    },
    {
      title: "Connect with Us",
      buttons: [
        { icon: iconTwitter, link: "https://twitter.com" },
        { icon: iconYoutube, link: "https://youtube.com" },
        { icon: iconlinkedin, link: "https://linkedin.com" }
      ]
    }
  ];

  return (
    <div className='h-auto 2xl:h-2xl-hero md:h-md-hero 2xl:mt-[107px] mt-[77px] px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 text-white h- items-center
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 lg:gap-x-7.5 2xl:gap-[50px] xl:flex-nowrap divide-y md:divide-y-0 divide-neutral-800 border-t border-neutral-800'>
      {data.map((item, index) => (
          <div key={index}  
          data-aos="zoom-in-right"
          className='md:flex-1 w-full lg:max-w-[275px] 2xl:max-w-[374px] py-5 md:py-0 '>
            <h3 className='mb-5 lg:mb-7.5 2xl:mb-[50px] text-base lg:text-lg 2xl:text-xl font-medium'>{item.title}</h3>         
            {item.address && (
              <p className='text-base 2xl:text-lg text-myprimary-gray-60 mb-3 2xl:mb-[15px] max-w-[308px] md:max-w-full'>
                {item.address}
              </p>
            )}
            <div className={` 
            ${index === data.length -1
                  ? "flex flex-row flex-wrap sm:flex-nowrap gap-2.5 2xl:gap-5 pb-5 " 
                  : "flex flex-col gap-2.5 2xl:gap-[15px] justify-center"
              }`}>
            {item.buttons.map((btn, i) => {
              if (typeof btn === 'string') {
                return (
                  <ButtonCommon
                    key={i}
                    herobtnAndCommon={'herobtnAndCommon'}
                    contentBtn={btn}
                    imgArrowbtn={imgArrowHero}
                    altimagebtn={'arrow'}
                    hiddenEyes={"hiddenEyes"}
                    ContactRadius="ContactRadius"
                  />
                );
              } else {
                return (
                  <Link
                    key={i}
                    to={btn.link}
                    className='w-[96px] h-[48px] lg:w-[84px] 2xl:h-[60px] bg-neutral-800 rounded-md flex  items-center justify-center hover:bg-myprimary-yellow-55' >
                    <img src={btn.icon} alt="Social icon" className='transition-transform duration-200 ease-in-out transform hover:scale-150' />
                  </Link>
                );
              }
            })}
            </div>
            </div>
       
        ))}
    </div>
  );
}
