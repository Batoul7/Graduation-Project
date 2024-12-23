
interface StarsProps {
    rating: number
}

export default function Stars({rating}: StarsProps) {
  return (
    <div className="w-fit mx-auto mt-[-22px] bg-myprimary-dark-08 
    flex gap-[7px] items-center justify-between py-[10px] px-4 rounded-[100px] border border-neutral-800">
      {Array.from({ length: 5 }).map((_, index) => (
        ( index < rating) ? ( 
          <img src="/src/assets/images/common/star-yellow.png" alt="star-yellow"/>
        ) : (
          <img src="/src/assets/images/common/star-stroke.png" alt="star-stroke"/>
        )
      ))}
    </div>
  )
}
