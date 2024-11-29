
interface TitleProps {
    title: string;
    subtitle: string;
}

export default function MainTitle({title,subtitle} : TitleProps) {
  return (
    <div className="py-[120px] px-4 md:px-20 2xl:px-mainpadding bg-neutral-800 text-white font-medium">
      <h5 className="text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 w-fit rounded-rad-4 mb-4">{subtitle}</h5>
      <h2 className="text-[28px] md:text-[44px] 2xl:text-[58px] font-kumbhSans ">{title}</h2>
    </div>
  )
}
