import { cards } from "../data/Cards";

export const Paquetes = () => {
  const renderCards = (card) => {
    return (
      <div className="relative" key={card.id}>
        <h1 className="absolute inset-x-0 bottom-3 sm:text-[30px] text-[16px] text-OffWhite z-10">
          {card.title}
        </h1>
        <div>
          <img src={card.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-OffWhite font-bold text-center text-xl sm:text-4xl mt-10 text-DarkBlue">
      <h1 className="pt-12 pb-6 sm:pb-12 sm:pt-24">NUESTROS PAQUETES</h1>

      <div className="flex gap-3 mx-4 pb-12 sm:pb-16">
        {cards.map(renderCards)}
      </div>
    </div>
  );
};
