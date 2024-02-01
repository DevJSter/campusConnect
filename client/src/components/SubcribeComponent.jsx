import React from 'react'

const SubcribeComponent = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  return (
    <div className="flex items-center justify-center">
      <div className='absolute hidden bg-lightCard py-10 px-12 rounded-2xl md:flex items-center justify-center gap-9 shadow-[0px_15px_30px_10px_rgba(0,0,0,0.2)]'>
        <div className='flex items-center justify-center gap-5'> 
          <div className='text-xl '>
            Subscribe To Our Newsletter
          </div>
          <div className='flex gap-1'>
            <input type="text" className='p-4 border border-black rounded-lg' placeholder='Enter Your Mail' />
            <button className='p-4 rounded-lg bg-lightPrimary text-lightCard'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubcribeComponent
