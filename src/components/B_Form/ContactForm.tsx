import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { updateForm } from '../../redux/slice/formSlice';
import ButtonCommon from '../ButtonCommon/ButtonCommon';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+91',
    message: '',
    agreeToTerms: false,
  });

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const countryList: Country[] = data.map((country: any) => ({
          name: country.name.common,
          code: country.idd && country.idd.root ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}` : '',
          flag: country.flags.svg,
        })).filter((country: Country) => country.code); 

        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phoneNumber &&
    formData.message &&
    formData.agreeToTerms;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

const handleCountryChange = (code: string) => {
    setFormData({ ...formData, countryCode: code });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }
    
    dispatch(updateForm(formData));
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      countryCode: '+91',
      message: '',
      agreeToTerms: false,
    });

    alert('Thank you! Your information has been saved.');

  };

  return (
    <div  >
      <form onSubmit={handleSubmit} className=" text-white 2sm:px-5 py-10 lg:py-[60px] 2xl:py-20  flex flex-col gap-5 lg:gap-7.5 2xl:gap-[50px] 
      border-t border-t-neutral-800 lg:border-t-0 lg:border-l border-l-neutral-800 lg:pl-[60px] 2xl:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[50px]">
          <div>
            <label className="block text-base lg:text-lg font-medium mb-3 lg:mb-4">First Name</label>
            <input  data-aos="flip-down"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full p-4 lg:p-5 2xl:text-lg bg-myprimary-dark-10 rounded-lg text-mysecondary-dark-40 
              border border-neutral-800  hover:shadow-inputShadow outline-none focus:outline-myprimary-yellow-55"
            />
          </div>
          <div>
            <label className="block  text-base lg:text-lg font-medium mb-3 lg:mb-4">Last Name</label>
            <input  data-aos="flip-down"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full p-4 lg:p-5 2xl:text-lg bg-myprimary-dark-10 rounded-lg text-mysecondary-dark-40
              border border-neutral-800 hover:shadow-inputShadow outline-none focus:outline-myprimary-yellow-55"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[50px]">
          <div>
            <label className="block  text-base lg:text-lg font-medium mb-3 lg:mb-4">Email</label>
            <input  data-aos="flip-down"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-4 lg:p-5 2xl:text-lg bg-myprimary-dark-10 rounded-lg text-mysecondary-dark-40 
              border border-neutral-800 hover:shadow-inputShadow outline-none focus:outline-myprimary-yellow-55"
            />
          </div>
          <div>
            <label className="block text-base lg:text-lg font-medium mb-3 lg:mb-4">Phone Number</label>
            <div className="flex gap-3 2xl:gap-4 "  data-aos="flip-down">  
              <div className="relative flex items-center justify-between w-1/4  bg-myprimary-dark-10 rounded-lg  
                            px-1 2sm:px-3 2sm:py-[11.5px] xl:px-3 xl:py-[11.5px] 2xl:px-[18px] 2xl:py-[16.5px] border border-neutral-800 hover:shadow-inputShadow  "> 
                <div className="w-7.5 h-7.5 2xl:w-[34px] 2xl:h-[34px]  rounded-full  overflow-hidden">
                  <img
                    src={countries.find(c => c.code === formData.countryCode)?.flag}
                    alt="Country Flag"
                    className="rounded-full w-full h-full  object-cover"
                  />
                </div>
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="appearance-none absolute inset-0 opacity-0 cursor-pointer"
                >
                  {countries.filter((country, index, self) => 
                      country.code &&  country.name &&
                      self.findIndex(c => c.code === country.code) === index)
                    .map((country) => (
                      <option key={country.code} value={country.code} className='text-myprimary-dark-08'>
                        {country.name} ({country.code})
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none">
                    <svg  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 sm:w-[25px] sm:h-[25px]'>
                      <path d="M6.5 9.5L12.5 15.5L18.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </div>
              <input 
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="Enter Phone Number"
                className="w-3/4 p-4 lg:p-5 2xl:text-lg bg-myprimary-dark-10 rounded-lg text-mysecondary-dark-40
                border border-neutral-800 hover:shadow-inputShadow outline-none focus:outline-myprimary-yellow-55"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-base lg:text-lg font-medium mb-4">Message</label>
          <textarea  data-aos="flip-down"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            className="w-full h-32 xl:h-[163px] p-4 lg:p-5 2xl:text-lg bg-myprimary-dark-10 rounded-lg text-mysecondary-dark-40 
            border border-neutral-800 hover:shadow-inputShadow outline-none focus:outline-myprimary-yellow-55"
          />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5"  data-aos="flip-down">
          <div className='flex items-center'>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-7 h-7 mr-[10px] bg-myprimary-dark-10 border border-neutral-800 rounded-[4px] bg-transparent appearance-none checked:bg-green-500 checked:border-white focus:outline-none "
            />
            <label className="text-sm lg:text-base 2xl:text-lg">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <ButtonCommon navbtn={true} contentBtn={'Send'}  hiddenArrow='hiddenArrow' hiddenEyes={"hiddenEyes"} widthSmall='w-full md:w-[103px] 2xl:w-[137px]'  />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;