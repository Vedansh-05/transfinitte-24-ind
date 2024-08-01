import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import AboutUs from "./AboutUs";
import Sponsors from "./Sponsors";
import Judges from "./Judges";

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero" >
        <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem]
            mx-auto text-center mb-[4rem]
            md:mb-20 lg:mb-[6rem]">

                <div className="flex flex-col justify-center items-center">
                <div className="text-2xl mb-20 -mt-6 border-2 inline-block 
                px-4 py-2 text-center rounded-full w-fit opacity-75">
                    27th-29th October
                </div>

                <h1 className="h1 mb-6"> 
                    <span className="opacity-[85%]">
                    Innovation Knows No Bounds
                    </span>
                </h1>

                <span className="h1 inline-block relative text-9xl mb-6 opacity-[95%]">
                Transfinitte
                <img 
                    src={curve}
                    className="absolute top-full left-0
                    w-full xl:-mt-2 opacity-[90%]"
                    width={624}
                    height={28}
                    alt="Curve" />
                </span>
                </div>

                <Button 
                href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view" 
                white
                className="mt-10 z-1 mb-20">
                    Problem Statements
                </Button>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">

                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">

                        <div className="relative bg-n-8 rounded-[1rem]">

                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                                <div className="aspect-[33/40] rounded-b-[0.9rem]
                                overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                                    <img src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%]
                                    md:scale-[1] md:-translate-y-[10%]
                                    lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                    />
                                    
                                    
                                    <Generating 
                                    className="absolute left-4 right-4 bottom-5
                                    md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                                    />
                                    
                                    
                                    <ScrollParallax isAbsolutelyPositioned>
                                    </ScrollParallax>

                                    <ScrollParallax isAbsolutelyPositioned>
                                        <Notification 
                                        className="hidden absolute 
                                        -right-[5.5rem] bottom-[11rem] w-[18rem]
                                        xl:flex"
                                        title="Idea Generated!!"
                                        />
                                    </ScrollParallax>
                                </div>
                            
                        </div>
                        <Gradient />

                    </div>

                    <div className="absolute -top-[50%] -z-1 left-1/2 w-[234%]
                    -translate-x-1/2 
                    md:-top-[46%] md:w-[138%]
                    lg:-top-[104%]" >
                        <img
                        src={heroBackground}
                        className="w-full"
                        width={1440}
                        height={1800}
                        alt="hero" />
                    </div>

                    <BackgroundCircles />

                </div>
                 
            </div> 
        </div>    
        
    </Section>
  )
}

export default Hero
