import barber from '../../public/assets/barber1.jpg'

export default function Schedaluing() {
    return (
        <>
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
             </div>
        </>
    );
}