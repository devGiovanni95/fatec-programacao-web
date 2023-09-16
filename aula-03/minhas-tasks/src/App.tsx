import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {
 
  return (
    <>
 
      <p className='text'>Entre em contato</p>
      <hr className='line'/>
      <InputFatec placeholder='Nome' type='text' value='Nome'/>
      <InputFatec placeholder='E-mail' type='email' value='E-mail'/>
      <InputFatec placeholder='Telefone' type='tel' value='Telefone'/>
      <hr className='line'/>
      <ButtonFatec type='button' label='Fatec: Enviar mensagem'/>
    </>
  )
}

export default App