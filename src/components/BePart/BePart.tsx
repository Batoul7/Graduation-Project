import CardBePart from "../CardBePart/CardBePart"
import iconBePart from '../../assets/images/TechRevolution/Logo.png'

const BePart = () => {
  return (
    <div className="bg-myprimary-dark-10 px-4 xl:px-20 2xl:px-mainpaddinglarge py-[120px]">
        <div className="flex justify-between md:items-center  lg:items-center pb-[100px] ">
            <div className="lg:pr-20 md:pr-[60px] pr-[15.5px]">
                <img src={iconBePart} alt="iconBePart" />
            </div>
            <div>
           <p className="bg-myprimary-dark-20 w-max font-medium lg:text-xl md:text-base text-white py-1.5 px-2.5 rounded">Learn, Connect, and Innovate</p>
           <h2 className=" w-full font-medium lg:text-[58px] md:text-[44px] text-white mt-4 mb-[30px]">Be Part of the Future Tech Revolution</h2>
           <p className="font-normal lg:text-lg  md:text-base text-myprimary-gray-50">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
            </div>
        </div>
      <CardBePart/>
    </div>
  )
}

export default BePart
