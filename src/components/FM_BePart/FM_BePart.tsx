import MainTitle from "../MainTitle/MainTitle";
import logo from '../../assets/images/TechRevolution/Logo.png'
import { BePartCardData } from "../../Data/BePartCardData";
import BCard from "../BCards/BCard";

export default function FM_BePart() {
    return (
        <section className="bg-myprimary-dark-10 2xl:px-mainpaddinglarge xl:px-[80px] px-4 py-10 md:py-[80px] 2xl:py-[120px] fl">
            <div className="flex flex-col items-start md:flex-row md:items-center gap-5 md:gap-[60px] 2xl:gap-20 2xl:mb-[100px] md:mb-[50px] mb-[40px]">
                <div className="md:w-[300px] flex items-center gap-5">
                    <img src={logo} className="w-[80px] md:w-full" alt="logo" />
                    <h5 className='md:hidden block text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 rounded-rad-4 mb-4 text-white'>Learn, Connect, and Innovate</h5>
                </div>
                <MainTitle
                    link=""
                    title="Be Part of the Future Tech Revolution"
                    subtitle="Learn, Connect, and Innovate"
                    button={false}
                    desc={true}
                    txt="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
                />
            </div>
            <div className="flex flex-wrap gap-y-[10px] 2xl:gap-y-5 justify-between bg-myprimary-dark-08 p-[10px] 2xl:p-5 rounded-[10px] border-[1px] border-myprimary-dark-20">
                {BePartCardData.map((item, index) => {
                    return (
                        <BCard key={index} title={item.title} text={item.desc} BePart={true} />
                    )
                })}
            </div>


        </section>
    )
}
