import { brainwaveWhiteSymbol,brainwaveSymbol, check, transfinitte } from "../assets"
import { collabApps, domains } from "../constants"
import Heading from "./Heading"
import Section from "./Section"

const Domains = () => {
  return (
    <Section crosses id="Domains">
        <div className="container flex">
            <div className="max-w-[25rem]">
            <Heading
            className="mb-4 md:mb-8"
            title="Domains" />

            <ul className="max-w-[22rem] mb-10 md:mb-14">
                {domains.map(( item ) => (
                    <li className="mb-3 py-3" key={item.id}>
                        <div className="flex items-center">
                            <img
                            src={check}
                            width={24}
                            height={24} />
                            <h4 className="h4 ml-5">{item.title}</h4>
                        </div>
                    </li>
                ))}
            </ul>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-4">
                <div className="relative left-1/2 flex w-[22rem]
                aspect-square border border-n-6 rounded-full -translate-x-1/2
                scale:75 md:scale-75">
                    <div className="flex w-60 aspect-square
                    m-auto border border-n-6 rounded-full">
                        <div className="w-[6rem] aspect-square 
                        m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center
                            w-full h-full bg-n-8 rounded-full">
                                <img
                                src={brainwaveSymbol}
                                width={48}
                                height={48}
                                alt="svg" />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app, index) => (
                            <li key={app.id}
                            className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem]
                            origin-bottom rotate-${index * 45}`}>
                                <div className={`relative -top-[1.6rem] flex
                                    w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15
                                    rounded-xl -rotate-${index * 45}`}>
                                    <img
                                    className="m-auto"
                                    width={app.width}
                                    height={app.height}
                                    alt={app.title}
                                    src={app.icon} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Domains
