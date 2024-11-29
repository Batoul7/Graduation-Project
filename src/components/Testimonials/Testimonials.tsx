import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Testimonials: React.FC = () => {

    const testimonials = useSelector(
        (state: RootState) => state.testimonials.testimonials
      );
  return (
    <section className="px-4 md:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08  ">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[100px] " >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialsCard
                  name={testimonial.name}
                  location={testimonial.location}
                  image={testimonial.img}
                  rating={testimonial.rating}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>
    </section>
  );
};

export default Testimonials;
