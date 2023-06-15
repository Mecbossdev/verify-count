import { Input } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import { DivInput, LabelInput } from './styles'

interface InputProps {
    placeholder?: string,
    label: string,
    value: string,
    name?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}


const InputComponent = ({placeholder, label, value, name, onChange}: InputProps) => {
  return (
    <DivInput>  
        <LabelInput>{label}</LabelInput>
        <Input
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    </DivInput>
  )
}

export default InputComponent