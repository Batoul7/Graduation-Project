interface BlogHero {
    img?: string,
    title?: string
}

export default function FM_BlogHero({img, title} : BlogHero) {
    return (
        <section className='2xl:px-mainpaddinglarge xl:px-[80px] px-4 2xl:h-2xl-hero h-md-hero 2xl:mt-[105px] mt-[93px] relative flex items-end justify-center'>
            <img src={img} alt="blog-cover" className='absolute -z-1 w-full h-full object-cover left-0 top-0' />
            <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className='mb-4 d:mb-[35px] 2xl:mb-[65px] z-1 font-inter font-semibold md:text-[44px] 2xl:text-[64px] text-[28px] text-white text-center'
            >
                {title}
            </h2>
        </section>
    )
}
