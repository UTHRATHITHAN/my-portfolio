"use client";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useDispatch, useSelector } from "react-redux";
import { toggleBadge } from "@/redux/features/badges/badgesSlice";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

type Card = {
  badge: boolean;
  certificate: boolean;
};

function ToggleCertificate() {
  const btnActive = useSelector(
    (state: any) => state.badgesReducer.toggleBadge
  );

  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() =>
          dispatch(toggleBadge({ badge: true, certificate: false }))
        }
        className={`w-24 mx-2 p-2 md:p-3 md:w-[120px] rounded-md  text-center border ${
          btnActive.badge
           ||  "bg-transparent text-black dark:text-white"
        }
         `}
      >
        Badge
      </Button>
      <Button
        onClick={() =>
          dispatch(toggleBadge({ badge: false, certificate: true }))
        }
        className={`w-24  mx-2 p-2 md:p-3 md:w-[120px] rounded-md  text-center border 
        ${
          btnActive.certificate
           || "bg-transparent text-black dark:text-white"
        }`}
      >
        Certificate
      </Button>
    </>
    // <ToggleGroup variant="outline" type="single" className="space-x-5">
    //   <ToggleGroupItem
    //     value="bold"
    //     aria-label="Toggle "
    //     onClick={() =>
    //       dispatch(toggleBadge({ badge: true, certificate: false }))
    //     }
    //     className={`w-24 text-white  dark:text-white bg-black ${btnActive.badge ? cn('bg-zinc-900 text-white') : ''}`}
    //     aria-checked
    //   >
    //     Badge
    //   </ToggleGroupItem>
    //   <ToggleGroupItem
    //     value="italic"
    //     aria-label="Toggle "
    //     onClick={() =>
    //       dispatch(toggleBadge({ badge: false, certificate: true }))
    //     }
    //     className={`w-24 text-black  dark:text-white ${btnActive.certificate ? cn('bg-zinc-900 text-white') : ''}`}
    //   >
    //     Certificate
    //   </ToggleGroupItem>
    // </ToggleGroup>
  );
}

export default ToggleCertificate;


// ${
//   btnActive.badge
//     ? "bg-black text-white dark:bg-white dark:text-black"
//     : "bg-white text-black dark:bg-black dark:text-white"
// }



// ${
//   btnActive.certificate
//     ? "bg-black text-white dark:bg-white dark:text-black"
//     : "bg-white text-black dark:bg-black dark:text-white"
// }