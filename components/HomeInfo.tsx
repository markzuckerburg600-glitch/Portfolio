import Link from "next/link"
import { Button } from "./ui/button";

const Popups = ({ text, link, btnText, color }: { text: string; link: string; btnText: string, color: string }) => (
    <>
    <div className = "relative flex flex-col font-mono">
    <div className = {`bg-gradient-to-br from-${color}-400 to-${color}-600 backdrop-blur-md bg-opacity-90 p-6 pb-8 rounded-3xl flex flex-col items-center text-lg shadow-2xl border border-white/20`}>
        <p className = "text-center font-medium leading-relaxed">{text}</p>
    </div>
        <Link href={link} className = "w-full flex justify-center">
            <Button className="shadow-2xl absolute bottom-[-35px] w-[85%] bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white text-sm font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-3xl transition-all duration-300 flex items-center justify-center border border-white/20">
                {btnText}
            </Button>
        </Link>
    </div>
    </>
)

const renderContent = {
    1: (
        <h1 className = "hover:scale-105 transition-all duration:200 ease-in font-mono sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white bg-gradient-to-r from-lime-600 to-red-300 rounded-4xl">
            {`Hi, I'm Ryan 😊`}
            <p>
                I like building AI and web applications
            </p>
        </h1>
    ),

    2: (
        <Popups text = "I'm exploring the intersection between chemistry, AI and medicine" link = "/about" btnText = "Check it out!" color = "amber"/>
    ),

    3: (
        <Popups text = "I'm a tutor on Schoolhouse and I have a Youtube Channel!" link = "/projects" btnText = "My portfolio" color = "amber"/>
    ),

    4: (
        <Popups text = "Feel free to contact me. I love chatting!" link = "/contact" btnText = "Get in touch" color = "amber"/>
    ),

}


export default function HomeInfo({ currentStage }: { currentStage: number }) {
  return renderContent[currentStage as keyof typeof renderContent] 
}
