import Heading from "./Heading"
import Section from "./Section"
import { timeline } from "../constants"
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";


const Timeline = () => {
  return (
    <Section className="overflow-hidden"
    id="TImeline">
        <div className="container md:pb-10">
            <Heading
            title="Timeline" />

            <div className="relative grid gap-6
            md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {timeline.map((item) => {
                    return(
                        <div key={item.id} 
                        className={`md:flex even:md:translate-y-[7rem]
                        p-0.25 rounded-[2.5rem] border 
                        ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem]
                            overflow-hidden xl:p-15">
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
                                        className="font-semibold text-n-4"
                                        title={item.time} />
                                        <h4 className="h4 mb-4">{item.event}</h4>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>
        </div>
    </Section>
  )
}

export default Timeline
