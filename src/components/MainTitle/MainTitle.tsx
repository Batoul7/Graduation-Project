interface TitleProps {
  title: string;
  subtitle: string;
  button: boolean;
  btntext?: string,
  desc?: boolean,
  txt?: string,
  mobileTxt?: string,
  link?: string,
  btnbook?: boolean

}
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, selectActiveTab } from "../../Data/BookDataSlice";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MainTitle({ title, subtitle, button, btntext, desc, txt, mobileTxt, link, btnbook }: TitleProps) {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const [screen, setScreen] = useState(false)

  function handleResize() {
    if (window.innerWidth <= 768) {
      setScreen(true)
    } else {
      setScreen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screen])


  const handleTabChange = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <>
      <div className={`${desc ? '' : '2xl:py-[120px] md:py-[80px] py-10 px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-10'} text-white font-medium
    flex flex-col md:flex-row  md:justify-between md:items-center gap-7.5 ${btnbook ? "lg:flex-nowrap" : ""} flex-wrap`}>
        <div data-aos="zoom-in" className={`${desc ? 'w-full' : 'xl:w-[60%]'}`}>
          <h5 className={`${desc ? 'md:block hidden' : ''} text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 w-fit rounded-rad-4 mb-4`}>{subtitle}</h5>
          <h2 className="text-[28px] md:text-[44px] 2xl:text-[58px] font-kumbhSans ">{title}</h2>
        </div>
        {desc && <p data-aos="zoom-in" className="text-sm md:text-sm 2xl:text-lg font-inter text-myprimary-gray-60">
          {
            screen ? mobileTxt
              : txt
          }
        </p>}
        <div data-aos="zoom-in" >
          {button &&
            <Link to={link !== undefined ? link : ''}>
              <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={btntext}
                imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} widthSmall='w-full' />
            </Link>
          }
          {btnbook && (
            <div className="flex flex-wrap sm:flex-nowrap gap-[10px] p-2.5 bg-myprimary-dark-08 w-fit">
              <ButtonCommon
                ResourseDepthReportsActive={activeTab === "Whitepapers" ? "ResourseDepthReportsActive" : ""}
                ResourseDepthReports={activeTab !== "Whitepapers" ? "ResourseDepthReports" : ""}
                contentBtn="Whitepapers"
                hiddenArrow="hiddenArrow"
                hiddenEyes="hiddenEyes"
                onClick={() => handleTabChange("Whitepapers")}
              />
              <ButtonCommon
                ResourseDepthReportsActive={activeTab === "Ebooks" ? "ResourseDepthReportsActive" : ""}
                ResourseDepthReports={activeTab !== "Ebooks" ? "ResourseDepthReports" : ""}
                contentBtn="Ebooks"
                hiddenArrow="hiddenArrow"
                hiddenEyes="hiddenEyes"
                onClick={() => handleTabChange("Ebooks")}
              />
              <ButtonCommon
                ResourseDepthReportsActive={activeTab === "Reports" ? "ResourseDepthReportsActive" : ""}
                ResourseDepthReports={activeTab !== "Reports" ? "ResourseDepthReports" : ""}
                contentBtn="Reports"
                hiddenArrow="hiddenArrow"
                hiddenEyes="hiddenEyes"
                onClick={() => handleTabChange("Reports")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )

}
