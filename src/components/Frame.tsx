import Lupa from '../assets/icons/lupa.png'
import BarberCard from './Section/BarberCard'
import barber from '../../public/assets/barber1.jpg'
import { useState } from 'react'

export default function Frame(){
   const [perfil,setPerfil] = useState(true);

  const handleLogin = () => {
    setPerfil(true)
  }
   
    return (

        <div className="relative h-auto flex justify-center items-center gap-32 py-16 px-32">
            <div className="absolute inset-0 bg-[url('/assets/bg-image1.jpg')] bg-cover opacity-[30%]"></div>
            <div className=" min-h-[334px] w-[335px] py-[1px] flex flex-col gap-[46.5px] relative ">
                <div className="h-[53px] flex flex-col gap-1">
                    <h2 className="text-white font-sans font-bold text-2xl ">Olá, Faça seu login!</h2>
                    <p className="text-white font-normal text-sm">Dia, data e mes</p></div>
                <div className='flex gap-2 items-center'><input type="text" placeholder="Buscar Barbearias" className="text-gray3 p-3 bg-secondary_black text-sm font-sans font-normal w-[354px] rounded-lg border border-gray1"/> <img src={Lupa} alt="" className='w-10 h-10'/></div> 

            {
                perfil && (
                    <div className='h-[131px] text-white flex flex-col gap-2'>
                    <span className='ml-1'>Agendamentos</span>
                    <div className='bg-secondary_black border border-gray1 rounded-[10px] flex justify-between p-3'>
                        <div className='flex flex-col gap-3'>
                           <div className='w-[81px] h-[21px] bg-dark_purple flex items-center rounded-2xl  justify-center px-2 py-[2px] ' >
                             <span className=' text-xs text-bold'>Confirmado</span>
                           </div>
                            <div className='flex flex-col gap-2'>
                                <span>Corte de Cabelo</span>
                            <div className='flex gap-1'><img src={barber} alt="" className='w-6 h-6 rounded-lg'/> Vintage Barber</div></div>
                        </div>
                       
                        <div className='flex flex-col items-center justify-center border-l-2 border-solid p-3 border-gray1'>
                            <span>Fevereiro</span>
                            <span>06</span>
                            <span>09:45</span>

                        </div>
                    </div>
                </div> )
            }
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