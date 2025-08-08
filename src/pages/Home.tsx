import '../App.css'
import '../index.css'
import Header from '../components/Header.tsx'
import Frame from '../components/Frame.tsx'
import Section from '../components/Section/Section.tsx'
import BarberCard
  from '../components/Section/BarberCard.tsx'
import Footer from '../components/Footer.tsx'

function Home() {


  return (
    <>
      <Header />
      <hr className='border-gray1 border '/>
      <Frame />
      <Section
        section_title='Populares'>
         <BarberCard
              id='1'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
                       />
         <BarberCard
              id='2'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
                       />
         <BarberCard
               id='3'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
                       />
         <BarberCard
               id='4'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
                       />
         <BarberCard
               id='5'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
                       />
        
        </Section>
      <Section
        section_title='Mais Visitados'>
         <BarberCard
               id='7'
              image='/assets/barber1.jpg'
              title='Vintage Barber' 
              address='Avenida São Sebastião, 357, São Paulo'
          />
        </Section>
       <Footer/>
    </>
  )
}

export default Home
