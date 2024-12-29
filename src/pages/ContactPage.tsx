// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import ButtonCommon from "../components/ButtonCommon/ButtonCommon";
import imgArrowHero from './../assets/images/Arrows/goArrow.png'
import imgEyesBtn from './../assets/images/common/eye-yellow.png'

export default function ContactPage() {

  // const faq = useSelector((state: RootState) => state.faq);
  return (
    <div>
      {/* وزرsend بقسم form   زر الناف */}
      <ButtonCommon navbtn={true} contentBtn={'Contact Us'}  hiddenArrow='hiddenArrow' hiddenEyes={"hiddenEyes"}  />

      {/* الزر اللي موجود بالعنوان المشترك و موجود بقسم الفلترة جوا الكارد */}
      <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'View All Blogs'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"}  />

      {/* الزر الموجود في الفلترة لاختيار القسم  */}
      {/* اذا بكون active */}
      <ButtonCommon filterBtnActive='filterBtnActive' contentBtn='All' hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* الزر الموجود بقسم الفلترة بلا active */}
      <ButtonCommon filterBtn='filterBtn' contentBtn='Quantum Computing' hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* الزر بقسم الكتب  */}
      <ButtonCommon contentBtn={'Download Ebooks Now'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} EbookHome='EbookHome'  />

      {/* الزر بقسم الكتب اللي في ايكون عين  */}
      <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} EyesRadius='EyesRadius' contentBtn={'Preview'} hiddenArrow='hiddenArrow' altimagebtn={'image'} imgEyes={imgEyesBtn} />

      {/* ازرار الفوتر  */}
      <ButtonCommon footerBtn='footerBtn' hiddenEyes={"hiddenEyes"} contentBtn={'Whitepapers'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} />

      {/* في صفحة new  زر Readmore قسم اخر الكتب  */}
      <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'Read More'} hiddenArrow={'hiddenArrow'}  hiddenEyes={"hiddenEyes"}   />

      {/* في صفحة REesourse page  قسم   In-Depth Reports and Analysis :  في حال كان active */}
      <ButtonCommon ResourseDepthReportsActive='ResourseDepthReportsActive' contentBtn='Whitepapers'  hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* في صفحة REesourse page  قسم   In-Depth Reports and Analysis :  */}
      <ButtonCommon ResourseDepthReports='ResourseDepthReports' contentBtn='Ebooks'  hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* في صفحة REesourse page  قسم   card book  : في خال كان active */}
      <ButtonCommon ResourseCardBookActive='ResourseCardBookActive' contentBtn='View Details'  hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* في صفحة REesourse page  قسم   card book  : في خال كان active */}
      <ButtonCommon ResourseCardBook='ResourseCardBook' contentBtn='Download PDF Now'  hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />

      {/* زر contact hero: */}
      <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'contact@ai-podcasts.com'}  imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} ContactRadius='ContactRadius'  />
    </div>
  )
}
