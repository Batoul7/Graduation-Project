
import ContactForm from '../B_Form/ContactForm'
import LeftCard from '../LeftCard/LeftCard'
import icon from '../../assets/images/ContactPage/icon-1.png'
export default function FormSection() {
  return (
    <div className='px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex items-start  justify-start flex-col lg:flex-row border-y border-neutral-800'>
        <div className='py-10 pr-5 '>
            <LeftCard
                title='Get in Touch with AI Podcasts'
                description={""}
                icon={icon}
                pageType={"contact"} 
                form={true} />
        </div>
    
        <ContactForm/>
    </div>
  )
}
