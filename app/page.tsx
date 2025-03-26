"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import Tilt from 'react-parallax-tilt';

export default function Home() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl">
            Empower Your Business with Our Dev Team
          </h1>
          <p className="md:text-md">
            Unlock the potential of your projects by leveraging our experienced
            development team. Scale your services efficiently and focus on what
            truly matters—growing your business.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Tilt
                    key={num}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img
                      className="absolute inset-0 size-full rounded-image object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt={`Relume placeholder image ${num}`}
                    />
                  </Tilt>
                ))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Tilt
                    key={num}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img
                      className="absolute inset-0 size-full rounded-image object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt={`Relume placeholder image ${num}`}
                    />
                  </Tilt>
                ))}
              </div>
            </div>
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Tilt
                    key={num}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img
                      className="absolute inset-0 size-full rounded-image object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt={`Relume placeholder image ${num}`}
                    />
                  </Tilt>
                ))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Tilt
                    key={num}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img
                      className="absolute inset-0 size-full rounded-image object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt={`Relume placeholder image ${num}`}
                    />
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 