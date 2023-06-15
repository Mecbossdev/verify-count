import { Button, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import InputComponent from './components/Input'
import { useIdentifyMutation } from './hooks/useIdentityMutation'
import { DivContainer, StyledDiv, StyledForm, StyledName } from './styles'

function App() {

  const { mutate } = useIdentifyMutation()
  const [firstName, setfirstName] = useState<string>("")
  const [secondName, setSecondName] = useState<string>("")
  const [email, setEmail] = useState<string>("")


  const submit = () => {
    mutate({
      email,
      firstName,
      secondName
    })
  }
  

  return (
    <DivContainer>
      <StyledForm>
        <StyledName>
          <InputComponent
            value={firstName}
            label='Primeiro Nome'
            name='name' 
            placeholder='Digite seu Nome'
            onChange={event => setfirstName(event.target.value)}
          />
          <InputComponent
            value={secondName}
            label='Segundo Nome'
            name='secondName' 
            placeholder='Digite seu Sobrenome'
            onChange={event => setSecondName(event.target.value)}
          />           
        </StyledName>
        <Spacer height="4"/>
        <InputComponent
          value={email}
          label='E-mail'
          name='email' 
          placeholder='fulano@gmail.com'
          onChange={event => setEmail(event.target.value)}
        />
        <Spacer height="8"/>
        <Button colorScheme='green' width="100%" onClick={submit}>Enviar</Button>             
      </StyledForm>
      <Spacer width="6" maxWidth="6"/>
      <StyledDiv>
        <h2>Assinatura Mensal</h2>
        <Spacer height="4"/>
        <p>Você ira pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="2"/>
        <p>Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores a animi distinctio iusto soluta ipsum tenetur, nisi debitis aut dicta autem.</p>
      </StyledDiv>

    </DivContainer>
  )
}

export default App
