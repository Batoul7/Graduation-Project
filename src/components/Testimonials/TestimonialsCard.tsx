import React from "react";
import Stars from "../Stars/Stars";

interface TestimonialProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsCard: React.FC<TestimonialProps> = ({ name, location, image, rating, text }) => {
  return (
    <div className=" text-white py-10 lg:py-20 flex flex-col items-center text-center gap-10 min-h-[160px]">
      <div className="flex gap-3">
        <img src={image} alt={name}/>
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-mysecondary-dark-40 text-lg">{location}</p>
        </div>
      </div>
      <div className=" rounded-xl border border-neutral-800 bg-myprimary-dark-10 pb-6 px-7.5">
        <Stars rating={rating}/>
        <p className="text-base font-normal pt-4">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
