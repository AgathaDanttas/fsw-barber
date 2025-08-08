import { useNavigate } from 'react-router';
import star from '../../assets/icons/star.png'

interface BarberProps{
    title: string;
    address: string;
    image?: string;
    id:string
}

export default function BarberCard({title, address,image,id}:BarberProps){
    const navigate = useNavigate();

    const handleReserveClick = () =>{
        navigate(`/BarberDetails/${id}`);
    }

    return (
        <div className="w-[220.8px] h-auto bg-secondary_black border border-gray1 rounded-2xl pt-1 px-1 relative">
                <div className='flex items-center justify-center gap-1 w-[54px] h-6 bg-custom_blue absolute left-2 top-2 rounded-2xl text-white font-bold text-xs z-10'><img src={star} alt="" className='w-3 h-3'/>5,0</div>

                <img src={image} alt={`Image da Barbearia ${title}`} className="w-auto max-h-[159px] object-cover rounded-2xl"/>
            <div className="flex flex-col p-3 gap-2">
                <div className="h-[60px] flex flex-col gap-1 text-white">
                    <h2 className="font-bold text-base text-nowrap ">{title}</h2>
                    <p className="text-gray3 font-normal text-xs leading-[140%]">{address}</p>
                </div>
                <button className="bg-gray1 text-white px-4 py-2 rounded-[10px] h-9 " onClick={handleReserveClick}>Reservar</button>
            </div>
        </div>
    )
}
