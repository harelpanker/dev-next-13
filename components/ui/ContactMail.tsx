const ContactMail = () => {
  return (
    <a
      href='mailto:harelpanker@protonmail.com'
      className='relative z-10 overflow-hidden p-1 rounded-full group hover:-translate-y-2 transition duration-500'
      aria-label='Contact me'>
      <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#3245ff] to-[#bc52ee] md:text-lg font-medium relative z-30 w-full px-6 md:px-10 py-2 md:py-3 h-full flex justify-center items-center'>
        Contact me
      </span>
      <span className='absolute -top-[200%] -left-[10%] aspect-square w-[120%] z-10 bg-gradient-to-br from-[#3245ff] to-[#bc52ee] group-hover:motion-safe:animate-spin-slow'></span>
    </a>
  );
};

export default ContactMail;
