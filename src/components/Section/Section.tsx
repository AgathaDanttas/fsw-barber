import type { ReactNode } from "react";

interface SectionProps{
    section_title: string;
    children: ReactNode;
}


export default function Section({section_title, children}: SectionProps) {
    return (
        <div className="w-full min-w-[600px] h-auto pt-10 px-32 flex flex-col gap-5 items-center">

            <div className="w-auto flex flex-col gap-5">

            <span className="font-sans font-bold text-xl text-white ">{section_title}</span>


  
            <div className="flex h-[295px] gap-5 justify-center">
                { children}
            </div>
            </div>   
        </div>
    );
}