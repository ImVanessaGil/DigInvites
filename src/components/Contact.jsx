import fb from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import wpp from "../assets/images/whatsapp.png";
import email from "../assets/images/email.png";

export const Contact = () => {
  return (
    <article className="bg-DarkBlue text-center pb-11 flex flex-col items-center">
      <div className="text-OffWhite">
        <h1 className="text-3xl">CONTACTANOS</h1>
        <p className="text-xl mx-4">
          Será un placer diseñar la invitación de tus sueños.
        </p>
      </div>

      <div className="bg-OffWhite w-72 h-[100px] font-semibold pt-4 text-DarkBlue mt-8 flex justify-center">
        <div className="flex gap-5 px-2">
          <div>
            <div className="flex">
              <img className="w-6 h-6 mr-1" src={fb} alt="Facebook" />
              <p>DigInvites</p>
            </div>
            <div>
              <div className="flex mt-3">
                <img className="w-6 h-6 mr-1" src={insta} alt="Instagram" />
                <p>@DigInvites</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex">
                <img className="w-6 h-6 mr-1" src={wpp} alt="WhatsApp" />
                <p>(614)123-4567</p>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <img className="w-6 h-6 mr-1" src={email} alt="Email" />
                <p>Contactanos!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
