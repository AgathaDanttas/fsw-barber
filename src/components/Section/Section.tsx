import type { ReactNode } from "react";
import next from '../../assets/icons/next.png'

interface SectionProps {
    section_title: string;
    children: ReactNode;
}


export default function Section({ section_title, children }: SectionProps) {
    return (
        <div className="w-full min-w-[600px] h-auto pt-10 px-32 flex flex-col gap-5 items-center">

            <div className="w-auto flex flex-col gap-5">

                <span className="font-sans font-bold text-xl text-white ">{section_title}</span>



                <div className="flex h-[295px] justify-center relative">
                    <div className="flex gap-5 ">
                         {children}
                    </div>
                   
                   <div className="flex items-center  absolute bottom-0  right-[-23px] top-0 
                      ">
                     <button className="bg-background_black border w-[55px] h-[55px] rounded-full border-[2px] border-gray1 flex items-center justify-center ">
                        <img src={next} alt="Next" className="w-[40px] h-[40px]" />
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
}