import buttonArrow from '../../assets/images/Arrows/Button.png'

interface BCardProps {
    icon:string;
    title: string;
    subtitle: string;
    text: string;
}
export default function BCard({icon,title,subtitle,text} : BCardProps) {
  return (
    <div className='bg-myprimary-dark-08 flex flex-col gap-7.5 py-7.5 lg:py-10 xl:py-[50px] 
    w-full sm:max-w-[700px] xl:w-[360px] 3xl:w-[425.33px] '>
        <div>
        <img src={icon} alt='icon'/>
        </div>
      <div className='flex gap-4 lg:gap-5 justify-between items-center'>
        <div>
            <h3 className='text-white text-base lg:text-lg 2xl:text-xl font-medium'>{title}</h3>
            <h5 className='lg:text-lg text-myprimary-gray-50 mt-1'>{subtitle}</h5>
        </div>
        <button className='cursor-pointer'><img src={buttonArrow} alt="" /></button>
      </div>
      <p className='lg:text-xl text-myprimary-gray-60'>{text}</p>
    </div>
  )
}
