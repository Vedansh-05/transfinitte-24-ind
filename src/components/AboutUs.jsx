import { BackgroundCircles, Rings } from "./design/Header"
import Heading from "./Heading"

import Section from "./Section"

const AboutUs = () => {
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="AboutUs" >
            <div className="container relative">
            <div className="relative z-1 max-w-[62rem]
            mx-auto text-center mb-[4rem]
            md:mb-20 lg:mb-[6rem]">

                <Heading
                title="About Us" />
                <div className="flex flex-col justify-center items-center">
                <p className="body-1 max-w-full
                text-n-2 lg:mb-8 text-center">
                    Welcome to TransfiNITTe, the flagship hackathon of NITT hosted by the Technical Council of the National Institute of Technology,
                    Tiruchirappalli, in collaboration with SCIENT, the Student Centre for Innovation in Engineering and Technology-NITT. Our journey began
                    with a vision to foster creativity, push boundaries, and redefine possibilities. As we gear up for our fifth edition, TransfiNITTe'23 promises to
                    be an electrifying experience like never before.</p>
                <p className="body-1 max-w-full
                text-n-2 lg:mb-8 text-center">
                TransfiNITTe'22 was a testament to the unyielding spirit of innovation. With over 50 teams and 300+ brilliant minds from NIT Trichy, it was 
                a 42-hour marathon of coding, ideation, and relentless problem-solving. Together, we tackled challenges spanning a diverse array of 
                software and hardware domains.</p>
                <p className="body-1 max-w-full mb-6
                text-n-2 lg:mb-8 text-center">
                TransfiNITTe'23 aspires to raise the bar even higher. With a goal of hosting 100+ teams and 500+ participants, we are set to create history 
                once again. For us, this event is not just about innovation; it's about forging meaningful partnerships, driving change, and celebrating the 
                magic that happens when brilliant minds unite.
                </p>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    
                </div>
            </div>
            </div>
    </Section>
  )
}

export default AboutUs
