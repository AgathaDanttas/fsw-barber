import Logo from '../assets/Logo.png'
import Calendar from '../assets/icons/calendar.png'
import User from '../assets/icons/user.png'

export default function Header(){
    return (
    <header className="w-full h-24 flex items-center gap-[100px] justify-between px-32 py-[30px]"> 
        <img src={Logo} alt="Logo Fsw-Barber" />
        <div className='flex gap-6 '>

           <button className='text-white flex gap-2 justify-center items-center font-bold text-sm font-sans'>  <img className='w-4 h-4' src={Calendar} alt="" /> Agendamentos</button> 
           <button className='flex gap-2 text-white bg-primary_purple px-4 py-2 rounded-[10px] justify-center items-center font-bold text-sm font-sans leading-[140%]'>  <img className='w-4 h-4 ' src={User} alt="" /> Perfil</button> 
           
        </div>
    </header>
    )
}