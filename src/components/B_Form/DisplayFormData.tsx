import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agreeToTerms: boolean;
}

const DisplayFormData: React.FC = () => {
  const formEntries = useSelector((state: RootState) => state.form.formEntries) as FormData[];

  const fields: { [key in keyof FormData]: string } = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    message: 'Message',
    agreeToTerms: 'Agreed to Terms'
  };

  return (
    <div className="bg-myprimary-dark-08 text-white p-4" data-aos="fade-down">
      <h2 className="text-myprimary-yellow-55 text-2xl font-semibold mb-4">Submitted Forms</h2>
      {formEntries.length > 0 ? (
        formEntries.map((entry, index) => (
          <div key={index} className="mb-4 text-xl flex flex-wrap gap-5">
            {Object.entries(fields).map(([key, label]) => (
              <div key={key}>
                <h3 className="font-medium inline-block me-2">{label}: </h3>
                <span className='text-myprimary-yellow-70'>
                  {key === 'agreeToTerms' ? (entry[key] ? 'Yes' : 'No') : entry[key as keyof FormData]}
                </span>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default DisplayFormData;
