import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Testimonials: React.FC = () => {

    const testimonials = useSelector(
        (state: RootState) => state.testimonials.testimonials
      );

  return (
    <section className="bg-myprimary-dark-08 ">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-2 lg:divide-x divide-gray-700">
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 divide-x divide-gray-700">
            {testimonials.slice(0, 3).map((testimonial, index) => (
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

          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 divide-x divide-gray-700">
            {testimonials.slice(3).map((testimonial, index) => (
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
        </div>
    </section>
  );
};

export default Testimonials;
