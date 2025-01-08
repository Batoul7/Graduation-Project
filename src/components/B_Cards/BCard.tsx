import buttonArrow from '../../assets/images/Arrows/Button.png'

export interface BCardProps {
  icon?: string;
  title: string;
  subtitle?: string;
  text: string;
  BePart: boolean;
  delay?: number
}
export default function BCard({ icon, title, subtitle, text, BePart, delay }: BCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`flex flex-col gap-7.5 md:w-[32.5%] 
        ${BePart ? 'w-full bg-myprimary-dark-10 rounded-xl border-[1px] border-myprimary-dark-20 2xl:p-10 md:p-[30px] p-6 justify-between'
        : 'bg-myprimary-dark-08 py-7.5 lg:py-10 xl:py-[50px] w-full sm:max-w-[700px] xl:w-[360px] 3xl:w-[425.33px]'}`}>
      {BePart == false && <div>
        <img src={icon} alt='icon' />
      </div>}
      <div className='flex gap-[10px] xl:gap-4 2xl:gap-5 justify-between items-center'>
        <div>
          <h3 className='text-white text-base lg:text-lg 2xl:text-xl font-medium'>{title}</h3>
          {BePart == false && <h5 className='lg:text-lg text-myprimary-gray-50 mt-1'>{subtitle}</h5>}
        </div>
        <button className='cursor-pointer'><img src={buttonArrow} alt="arrow" /></button>
      </div>
      <p className=' text-sm 2xl:text-lg text-myprimary-gray-60'>{text}</p>
    </div>
  )
}
