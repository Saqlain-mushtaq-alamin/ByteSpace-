import AvatarStack from "./AvatarStack";
import starIcon from "@/assets/icons/star.svg";
import { STUDENT_AVATARS } from "@/components/shared/DesignAssets";

/**
 * Happy Students Card from Figma / planning/homepage.md
 * 258px wide, radius 16, background lime (#d4fb20 / electriclime-400), backdrop-blur
 */
export default function HappyStudentsCard({ avatars }: { avatars?: string[] }) {
  const displayAvatars = avatars && avatars.length > 0 ? avatars : STUDENT_AVATARS;

  return (
    <div className="flex w-[260px] flex-col gap-3 rounded-[20px] bg-lime p-5 shadow-2xl backdrop-blur-md border border-lime-300/60 transition hover:scale-102">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-poppins text-[16px] font-semibold leading-tight text-gray-950">Happy Students</p>
          <div className="mt-1 flex items-center gap-1.5 text-[12px] leading-tight text-gray-700">
            <span className="font-bold text-gray-950">4.5</span>
            <span className="text-gray-600">(240)</span>
            <img src={starIcon} alt="" className="size-3.5 fill-amber-500" />
          </div>
        </div>
      </div>
      <AvatarStack
        images={displayAvatars}
        extra="2K+"
        size={40}
        extraClass="bg-gray-950 text-white font-bold"
      />
    </div>
  );
}
