import Image from "next/image";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import Rectangle from "../public/Rectangle.svg";

const Contact = () => {
  return (
    <section className="w-3xl flex justify-center px-4 py-20 ">
      <div className="relative w-full max-w-3xl lg:max-w-4xl bg-gradient-to-tr dark:from-[#df51ad3e] dark:to-[#eb587d2a] from-[#f6ebeb90] to-[#fff8ec60] rounded-3xl shadow-lg drop-shadow-2xl backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-6 lg:w-[60%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent">
            Say hi!
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-200">
            If you have any queries or would like to discuss potential
            opportunissssties, please don&apos;t hesitate to reach out to me using
            the links below.
          </p>

        
        </div>

        {/* Image */}
        <div className="lg:w-[35%] flex justify-end">
          <Image
            src={Rectangle}
            alt="contact"
            width={200}
            height={200}
            className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
