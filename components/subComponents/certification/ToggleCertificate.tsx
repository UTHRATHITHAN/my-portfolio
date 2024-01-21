"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBadge } from "@/redux/features/badges/badgesSlice";
import { Button } from "@/components/ui/button";
import { RootState } from '@/redux/store/store'

type Card = {
  badge: boolean;
  certificate: boolean;
};

function ToggleCertificate() {
  const btnActive = useSelector(
    (state: RootState) => state.badgesReducer.toggleBadge
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

  );
}

export default ToggleCertificate;

