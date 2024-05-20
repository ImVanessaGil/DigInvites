import principal from "../assets/images/phone.png";
export const Article = () => {
  return (
    <article className="mx-4 mt-4 rounded-xl bg-OffWhite sm:flex sm:gap-1">
      <div className="p-8">
        <img src={principal} alt="" />
      </div>
      <div className="2xl:px-[300px] sm:mt-24 tracking-wide  sm:w-2/3">
        <h1 className="text-DarkBlue font-bold text-3xl leading-tight sm:text-[50px] px-6 my-12">
          Toda la información de tu evento, en un solo lugar
        </h1>
        <button className="text-OffWhite text-xl bg-DarkBlue rounded-full xl:px-16 sm:py-3 ml-24 mb-12 content-center px-9 font-semibold">
          Ver mas
        </button>
      </div>
    </article>
  );
};
