import { FooterData, icons } from "../../Data/FooterData"
import ButtonCommon from "../ButtonCommon/ButtonCommon"
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'

export default function FM_Footer() {
    return (
        <footer className="bg-myprimary-dark-08 2xl:px-mainpaddinglarge xl:px-[80px] px-4">
            <div className="2xl:py-20 md: py-[60px] grid xl:grid-cols-5 gap-y-6 gap-20 grid-cols-2 border-b border-mysecondary-dark-40">
                {FooterData.map((e, index) => {
                    return (
                        <div key={index} >
                            <h3 className="text-white font-inter 2xl:text-xl md:text-lg font-medium 2xl:mb-9 text-base md:mb-6 mb-4">{e.title}</h3>
                            <div className="flex flex-col gap-2 md:gap-3 2xl:gap-[18px]">
                                {e.txts.map((n, i) => {
                                    return (
                                        n.btn ?
                                            <ButtonCommon key={i} footerBtn='footerBtn' hiddenEyes={"hiddenEyes"} contentBtn={n.txt} imgArrowbtn={imgArrowHero} altimagebtn={'image'} />
                                            : <p key={i} className="text-mysecondary-dark-40 text-sm md:text-base 2xl:text-lg">
                                                {n.txt}
                                                {n.new && <span className="text-white text-xs md:text-sm font-normal border-[1px] border-myborder-dark-color rounded-[4px] px-[10px] py-[2px] ms-2">
                                                    New
                                                </span>}
                                            </p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="py-6 2xl:py-10 flex flex-col justify-between gap-y-5 md:flex-row md:items-start items-center">
                <p className="text-mysecondary-dark-40 text-sm md:text-base 2xl:text-lg md:order-1 order-2">
                    Terms & Conditions | Privacy Policy
                </p>
                <div className="flex gap-4 md:order-2 order-1">
                    {icons.map((e,index) => {
                        return (
                            <img key={index} src={e.icon} alt="icon" />
                        )
                    })}
                </div>
                <p className="text-mysecondary-dark-40 text-sm md:text-base 2xl:text-lg order-3">
                    © 2024 FutureTech. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
