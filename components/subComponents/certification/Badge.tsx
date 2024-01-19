
"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import BadgeDialog from "./BadgeDialog";
import { badgeIndex } from "@/redux/features/badges/badgesSlice";

type Badge = {
  name: string;
  date: string;
  imgURL: string;
};
function Badge() {
  const dispatch = useDispatch();
  const badges = useSelector((state) => state.badgesReducer.badges);

  return (
    <div className="items-center grid grid-cols-2 md:grid-cols-3  md:gap-x-28 md:gap-y-12">
      {badges.map((badge: Badge, i: number) => (
        <BadgeDialog key={i + 1} badge={badge} >
          <Image
            className="p-5 md:p-0"
            src={badge.imgURL}
            width={200}
            height={200}
            alt={badge.name}
            onClick={() => dispatch(badgeIndex(i))}
          />
  
        </BadgeDialog>
      ))}
    </div>
  );
}

export default Badge;

function CertificateCard() {
  return <div className="h-[500px] grid place-content-center">Preparing for the Cloud Certification</div>;
}

export { CertificateCard };
