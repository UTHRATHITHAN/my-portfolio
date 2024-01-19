"use client";
import React, { useEffect, useState } from "react";
import Loader from "../subComponents/Loader";
import Badge from "../subComponents/certification/Badge";
import ToggleCertificate from "../subComponents/certification/ToggleCertificate";
import { CertificateCard } from "../subComponents/certification/Badge";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBadges } from "@/redux/features/badges/badgesSlice";

type badgeType = {
  name: string;
  date: string;
  imgURL: string;
};

function Certificate() {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const toggleBadge = useSelector((state) => state.badgesReducer.toggleBadge);

  useEffect(() => {
    async function getImage() {
      try {
        setLoader(true);
        const res = await axios.get(
          "https://659fe4355023b02bfe8ab8c2.mockapi.io/api/v1/images/skillImage"
        );

        dispatch(addBadges(res.data));
       
        if (res.status === 200) setLoader(false);
      } catch (error: any) {
        console.log("Err", error.message);
        if (error.message === "Network Error") {
          console.log("Network connection needed");
        }
      }
    }

    getImage();
  }, []);

  return (
    <section id="badges">
      <div className="my-16 pt-5">
        <p className="text-4xl font-sans font-bold text-center md:mb-10 pb-12">
          Certificate and Badges
        </p>

        <div className="flex flex-col items-center ">
          <div className="space-x-10 ">
            <ToggleCertificate />
          </div>

          <div className=" flex justify-center items-center w-5/6 md:w-11/12 h-fit p-8 mt-10 rounded-sm">
            {loader ? (
              <Loader className="w-8 h-8 text-gray-200 animate-spin dark:text-zinc-600 fill-white" />
            ) : toggleBadge.badge ? (
              <Badge />
            ) : (
              <CertificateCard />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
