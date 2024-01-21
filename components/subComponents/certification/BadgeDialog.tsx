"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useSelector } from "react-redux";
import { RootState } from '@/redux/store/store'
import Image from "next/image";

function BadgeDialog({ children, badge }: any) {
  const badgeList = useSelector((state: RootState) => state.badgesReducer.badges);
  const badgeIndex = useSelector((state: RootState) => state.badgesReducer.badgeIndex);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-10/12">
        <Carousel>
          <CarouselContent className="h-[400px] ">
            {badgeList
              .map((ele: any, i: number) => (
                <CarouselItem
                  key={i}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={ele.imgURL}
                    alt={ele.name}
                    width={400}
                    height={100}
                  />
                </CarouselItem>
              ))
              .find((x, i, arr) => i === badgeIndex)}

            {badgeList
              .map((ele, i) => (
                <CarouselItem
                  key={i}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={ele.imgURL}
                    alt={ele.name}
                    width={400}
                    height={100}
                  />
                </CarouselItem>
              ))
              .filter((ele, i) => i !== badgeIndex)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

export default BadgeDialog;
