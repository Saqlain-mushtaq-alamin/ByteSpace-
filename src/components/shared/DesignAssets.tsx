/**
 * Local images from src/assets (no more Unsplash URLs).
 * These are static imports: if a file name is wrong, Vite shows an error
 * with the exact missing path. Change the path on that line to fix it.
 */

// Course thumbnails
import figma from "@/assets/images/course-figma.png";
import digitalAsset from "@/assets/images/Frame.png";
import bigData from "@/assets/images/Frame-1.png";
import productivity from "@/assets/images/Frame-2.png";
import money from "@/assets/images/Frame-3.png";
import startup from "@/assets/images/Frame-4.png";
import ui from "@/assets/images/Frame-2.png";
import webDev from "@/assets/images/Frame-3.png";
import marketing from "@/assets/images/Frame-4.png";

// Faces
import student1 from "@/assets/images/avatars/Ellipse-0.png";
import student2 from "@/assets/images/avatars/Ellipse-1.png";
import student3 from "@/assets/images/avatars/Ellipse-2.png";
import student4 from "@/assets/images/avatars/Ellipse-3.png";
import avatar2 from "@/assets/images/avatars/avatar-2.png";
import avatar3 from "@/assets/images/avatars/avatar-3.png";
import avatar4 from "@/assets/images/avatars/avatar-4.png";
import creatorAvatar from "@/assets/images/creator-image.png";

export const COURSE_IMAGES = {
  figma,
  digitalAsset,
  bigData,
  productivity,
  money,
  startup,
  ui,
  webDev,
  marketing,
};

// Order matters: course cards show the first 4, testimonials use the first 3
export const STUDENT_AVATARS = [student1, student2, student3, student4, avatar2, avatar3, avatar4];

export const CREATOR_AVATAR = creatorAvatar;

/** 3D Ring Ornament */
export function Ring3D({ className = "size-[146px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="ringGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="40%" stopColor="#7C3AED" />
          <stop offset="85%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </radialGradient>
        <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#7C3AED" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#ringGlow)">
        <ellipse cx="100" cy="100" rx="76" ry="76" stroke="url(#ringGrad)" strokeWidth="36" />
        {/* Specular Highlight */}
        <ellipse cx="80" cy="40" rx="26" ry="10" fill="white" fillOpacity="0.4" transform="rotate(-15 80 40)" />
      </g>
    </svg>
  );
}

/** 3D Cone 1 (Coral/Amber) */
export function Cone1({ className = "size-[188px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cone1Grad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FF8A65" />
          <stop offset="50%" stopColor="#FF5722" />
          <stop offset="100%" stopColor="#BF360C" />
        </linearGradient>
        <filter id="cone1Glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#FF5722" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#cone1Glow)">
        <path d="M100 20 L165 155 A65 24 0 0 1 35 155 Z" fill="url(#cone1Grad)" />
        <ellipse cx="100" cy="155" rx="65" ry="24" fill="#D84315" />
        {/* Soft light highlight line */}
        <path d="M100 24 L116 150" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.45" />
      </g>
    </svg>
  );
}

/** 3D Cone 2 (Purple/Indigo Tilted) */
export function Cone2({ className = "size-[175px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cone2Grad" x1="10%" y1="20%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#E879F9" />
          <stop offset="45%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#581C87" />
        </linearGradient>
        <filter id="cone2Glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#A855F7" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#cone2Glow)" transform="rotate(25 100 100)">
        <path d="M100 25 L160 150 A60 22 0 0 1 40 150 Z" fill="url(#cone2Grad)" />
        <ellipse cx="100" cy="150" rx="60" ry="22" fill="#6B21A8" />
        <path d="M100 28 L114 145" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}
