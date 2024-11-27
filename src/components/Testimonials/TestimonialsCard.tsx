import React from "react";

interface TestimonialProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsCard: React.FC<TestimonialProps> = ({ name, location, image, rating, text }) => {
  return (
    <div className=" text-white px-[50px] py-20 flex flex-col items-center text-center gap-10">
      <div className="flex gap-3">
        <img src={image} alt={name}/>
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-mysecondary-dark-40 text-lg">{location}</p>
        </div>
      </div>
      <div className="rounded-xl border border-neutral-800 bg-myprimary-dark-10 pb-[30px] px-[30px]">
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
        <p className="text-lg mt-[27px]">{text}</p>
      </div>
     
    </div>
  );
};

export default TestimonialsCard;
