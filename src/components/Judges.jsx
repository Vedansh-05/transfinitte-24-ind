import Section from "./Section"
import Heading from "./Heading"
import { judges } from "../constants"
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"
import { Rings } from "./design/Header"

const Judges = () => {
  return (
    <Section 
    id="Judges">
        <div className="container relative z-2">
            <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="Judges" />

            <div className="flex flex-wrap gap-10 mb-10">
                {judges.map((item) => (
                  <div 
                  className="block relative p-0.5 bg-no-repeat
                  bg-[length:100%_100%] md:max-w-[24rem] bg-[url('assets/benefits/card-1.svg')]"
                  key={item.id}
                  >

                    <div className="relative z-2 flex flex-col min-h-[22rem]
                    p-[2.4rem] pointer-events-none">

                    <h4 className="h4 mb-5">{item.domain}</h4>
                    <h6 className="h6 mb-6 text-n-3">{item.name}</h6>
                    <p className="body-2 mb-6 text-n-3">{item.title}</p>
                    <div className="flex items-center justify-center mt-auto">
                      <img
                      src={item.iconUrl}
                      width={150}
                      height={150}
                      className="rounded-full"
                      alt={item.title} />
                    </div>

                    </div>
                    {item.light && <GradientLight />}

                    <div className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "URL(#benefits)"}}>
                      <div className="absolute inset-0 opacity-0 transition-opacity
                      hover:opacity-10">
                        {item.imageUrl && (
                          <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title} 
                          className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                    </div>
                    <ClipPath />
                  </div>
                ))}

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    
                    <Rings />

                    
                </div>
            </div>
        </div>


    </Section>
  )
}

export default Judges
