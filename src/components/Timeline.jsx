import Heading from "./Heading"
import Section from "./Section"
import { grid} from "../assets";
import { Gradient } from "./design/Roadmap";
import { timeline27 } from "../constants";
import { timeline28 } from "../constants";
import { timeline29 } from "../constants";
import { BottomLine } from "./design/Hero";
import { Rings } from "./design/Header";


const Timeline = () => {
  return (
    <Section className="overflow-hidden flex justify-center"
    id="Timeline" crosses>
        <div className="container md:pb-10 text-center font-bold">
            <Heading
            title="Timeline" />

            <div className="flex flex-col gap-9 justify-center"> 
            <h4 className="h4 mb-10">27th October</h4>
            <div className="relative grid gap-16
            md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {timeline27.map((item) => {
                    return(
                        <div key={item.id} 
                        className={`md:flex even:md:translate-y-[7rem]
                        p-0.25 rounded-[2.5rem] border
                        ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem]
                            overflow-hidden xl:p-15 w-full">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img src={grid}
                                    className="w-full"
                                    width={550}
                                    height={550}
                                    alt="Grid" 
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex flex-col items-center justify-between
                                    max-w-[27rem] mb-8 md:mb-20">
                                        
                                        <Heading 
                                        className="font-semibold text-n-4 text-center"
                                        title={item.time} />
                                        <h4 className="h4 mb-4 text-center">{item.event}</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>
            <h4 className="h4 mb-10">28th October</h4>
            <div className="relative grid gap-16
            md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {timeline28.map((item) => {
                    return(
                        <div key={item.id} 
                        className={`md:flex even:md:translate-y-[7rem]
                        p-0.25 rounded-[2.5rem] border
                        ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem]
                            overflow-hidden xl:p-15 w-full">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img src={grid}
                                    className="w-full"
                                    width={550}
                                    height={550}
                                    alt="Grid" 
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex flex-col items-center justify-between
                                    max-w-[27rem] mb-8 md:mb-20">
                                        
                                        <Heading 
                                        className="font-semibold text-n-4 text-center"
                                        title={item.time} />
                                        <h4 className="h4 mb-4 text-center">{item.event}</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>
            <h4 className="h4 mb-10">29th October</h4>
            <div className="relative grid gap-16
            md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {timeline29.map((item) => {
                    return(
                        <div key={item.id} 
                        className={`md:flex even:md:translate-y-[7rem]
                        p-0.25 rounded-[2.5rem] border
                        ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem]
                            overflow-hidden xl:p-15 w-full">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img src={grid}
                                    className="w-full"
                                    width={550}
                                    height={550}
                                    alt="Grid" 
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex flex-col items-center justify-between
                                    max-w-[27rem] mb-8 md:mb-20">
                                        
                                        <Heading 
                                        className="font-semibold text-n-4 text-center"
                                        title={item.time} />
                                        <h4 className="h4 mb-4 text-center">{item.event}</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}

                

                <Gradient />
            </div>
        </div>
        
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <Rings />   
        </div>
        <BottomLine />
    </Section>
  )
}

export default Timeline
