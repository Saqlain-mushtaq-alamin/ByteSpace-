import vector from "../../assets/icons/Vector.png";
import vector1 from "../../assets/icons/Vector-1.png";
import vector2 from "../../assets/icons/Vector-2.png";
import vector3 from "../../assets/icons/Vector-3.png";
import vector5 from "../../assets/icons/Vector-5.png";

const partners = [
  { name: "EduCore", icon: vector },
  { name: "Skillnest", icon: vector5 },
  { name: "Learnify", icon: vector1 },
  { name: "BrightPath", icon: vector2 },
  { name: "NovaEd", icon: vector3 },
];

export default function LogoPartners() {
  return (
    <div className="bg-[#f8f8f8] py-[28px]">
      <div className="mx-auto flex w-[1132px] max-w-full items-center justify-between px-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2"
          >
            <img
              src={partner.icon}
              alt={`${partner.name} logo`}
              className="h-[40px] w-[40px] object-contain"
            />

            <span className="font-poppins text-[22px] font-semibold text-[#858990]">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}