import { invites } from "../data/Invites";

export const Carrusel = () => {
  console.log(invites);
  return (
    <div className="flex gap-2 overflow-x-scroll w-full">
      <div className="flex-shrink-0 gap-2 flex sm:w-[200%]">
        {invites.map((invite) => {
          return (
            <div
              key={invite.id}
              className="bg-OffWhite w-44 sm:w-72 rounded-xl p-2 flex flex-col"
            >
              <img className="w-full" src={invite.image} alt={invite.title} />
              <p className="font-bold text-center">{invite.title}</p>
              <p className="text-center">{invite.description}</p>
              <a
                className="bg-DarkBlue text-OffWhite rounded-full text-center py-2 px-6 hover:bg-DarkBlue/80"
                href={invite.link}
              >
                Ver
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
