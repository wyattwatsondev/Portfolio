const CategoryCard = () => {
  return (
    <div className="flex flex-wrap select-none max-w-lg text-[0.65rem] sm:text-[0.75rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-center gap-3 w-full sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-3 py-1 sm:px-4 sm:py-2 text-[#cf3903] whitespace-nowrap">
        Web Dev
      </div>
      <div className="bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-3 py-1 sm:px-4 sm:py-2 text-[#097360] whitespace-nowrap">
        Mern Stack
      </div>
      <div className="bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-3 py-1 sm:px-4 sm:py-2 text-[#4e0aa2] whitespace-nowrap">
        Freelancer
      </div>
      <div className="bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-3 py-1 sm:px-4 sm:py-2 text-[#690c58] whitespace-nowrap">
        Designer
      </div>
    </div>
  );
};

export default CategoryCard;
