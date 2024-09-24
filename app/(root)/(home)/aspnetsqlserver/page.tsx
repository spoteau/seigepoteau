"use client";

import React from "react";
import Image from "next/image";
import { aspnetsqlserverArray } from "../../../../constants/screenshots";
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

const aspnetsqlserver = () => {
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
          className="w-full h-screen"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {aspnetsqlserverArray.map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex">
                    <Image
                      src={aspnetsqlserverArray[index]}
                      alt={`Screenshot ${index + 1}`}
                      className=""
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

export default aspnetsqlserver;
