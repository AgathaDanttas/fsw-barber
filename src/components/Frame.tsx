import Lupa from '../assets/icons/lupa.png'
import BarberCard from './Section/BarberCard'

export default function Frame(){
    return (
        
        <div className="relative h-auto flex justify-center items-center gap-32 py-16 px-32">
            <div className="absolute inset-0 bg-[url('/assets/bg-image1.jpg')] bg-cover opacity-[30%]"></div>
            <div className=" min-h-[334px] w-[335px] py-[1px] flex flex-col gap-[46.5px] relative ">
                <div className="h-[53px] flex flex-col gap-1">
                    <h2 className="text-white font-sans font-bold text-2xl ">Olá, Faça seu login!</h2>
                    <p className="text-white font-normal text-sm">Dia, data e mes</p></div>
                <div className='flex gap-2 items-center'><input type="text" placeholder="Buscar Barbearias" className="text-gray3 p-3 bg-secondary_black text-sm font-sans font-normal w-[354px] rounded-lg border border-gray1"/> <img src={Lupa} alt="" className='w-10 h-10'/></div> 

            </div>
            <div className='flex flex-col gap-[10px]'>
                <p className='font-bold text-sm text-gray3'>RECOMENDADOS</p>
                <div className='flex gap-5'>
                    <BarberCard
                    image='/assets/barber1.jpg'
                    title='Vintage Barber' 
                    address='Avenida São Sebastião, 357, São Paulo'
                />
                <BarberCard
                    image='/assets/barber1.jpg'
                    title='Vintage Barber' 
                    address='Avenida São Sebastião, 357, São Paulo'
                />
                <BarberCard
                    image='/assets/barber1.jpg'
                    title='Vintage Barber' 
                    address='Avenida São Sebastião, 357, São Paulo'
                />
                </div>
            </div>
        </div>
        )}

// 