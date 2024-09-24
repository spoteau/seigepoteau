"use client";

import React from "react";
import Image from "next/image";
import { mauimobileappArray } from "../../../../constants/screenshots";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const mauimobileapp = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="text-center w-full text-xl font-semibold pb-5">
        Only Screenshots Provided - Site is an Intranet
      </div>
      <div>
        <Carousel
          setApi={setApi}
          className="h-screen"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="items-center">
            {mauimobileappArray.map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card className="p-5 bg-yellow-100/75">
                  <CardContent className="flex p-4">
                    <Image
                      src={mauimobileappArray[index]}
                      alt={`Screenshot ${index + 1}`}
                      className=""
                      height={800}
                      width={300}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
};

export default mauimobileapp;
