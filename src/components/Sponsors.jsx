import { companyLogos } from "../constants"
import { BackgroundCircles, Rings } from "./design/Header"
import { BottomLine } from "./design/Hero"
import Heading from "./Heading"
import Section from "./Section"


const Sponsors = ({ className }) => {
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="Sponsors" >
            <div className="container relative">
            <div className={`${className} relative max-w-full
            mx-auto text-center mb-[4rem]
            md:mb-20 lg:mb-[6rem] `}>

                <Heading
                title="Sponsors" />
                <ul className="flex gap-10">
                    {companyLogos.map(( logo, index) => (
                        <li className="flex items-center justify-center flex-1 h-[8.5rem]"
                        key={index}>
                            <img
                            src={logo}
                            width={75}
                            height={50}
                            className="scale-150"
                            alt={logo} />
                        </li>
                    ))}

                </ul>

                
                
                
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    
                    <Rings />
                    <BackgroundCircles />

                    
                </div>

            </div>
            </div>


    </Section>
  )
}

export default Sponsors
