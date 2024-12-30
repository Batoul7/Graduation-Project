import B_HeroContact from "../components/B_HeroContact/B_HeroContact";
import FormSection from "../components/B_FormSection/FormSection";
import CommonQuestions from "../components/CommonQuestions/CommonQuestions";
// import DisplayFormData from "../components/B_Form/DisplayFormData";

export default function ContactPage() {

  return (
        <div>
            <B_HeroContact/>
            <FormSection/>
            {/* <DisplayFormData/> */}
            <CommonQuestions />
        </div>
  )
}
