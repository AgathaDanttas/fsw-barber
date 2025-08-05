interface BarberProps{
    title: string;
    address: string;
    image?: string
}

export default function BarberCard({title, address,image}:BarberProps){
    return (
        <div className="w-[220.8px] h-auto bg-secondary_black border border-gray1 rounded-2xl pt-1 px-1 relative">
            
           
                <img src={image} alt={`Image da Barbearia ${title}`} className="w-auto max-h-[159px] object-cover rounded-2xl"/>
            <div className="flex flex-col p-3 gap-2">
                <div className="h-[60px] flex flex-col gap-1 ">
                    <h2 className="font-bold text-base text-white">{title}</h2>
                    <p className="text-gray3 font-normal text-xs leading-[140%]">{address}</p>
                </div>
                <button className="bg-gray1 text-white px-4 py-2 rounded-[10px] h-9 ">Reservar</button>
            </div>
        </div>
    )
}
