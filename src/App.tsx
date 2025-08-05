import './App.css'
import './index.css'
import Header from './components/header'
import Frame from './components/Frame'
import Section from './components/Section/Section'
import BarberCard
  from './components/Section/BarberCard'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <hr className='border-gray1 border '/>
      <Frame />
      <Section
        section_title='Populares'>
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
        
        </Section>
      <Section
        section_title='Mais Visitados'>
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
        </Section>
       <Footer/>
    </>
  )
}

export default App
