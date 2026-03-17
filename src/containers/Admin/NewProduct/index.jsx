import { yupResolver } from '@hookform/resolvers/yup'
import { Image, ImageIcon } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {
    Input,
    Container,
    Form,
    InputGroup,
    LabelUpload,
    Lable,
    Select,
    submitButton as SubmitButton
} from './styles'

const schema = yup.object().shape({
    name: yup.string().required('O nome do produto é obrigatório'),
    price: yup.number().required('O preço do produto é obrigatório').positive('O preço deve ser um número positivo'),
    category: yup.string().required('A categoria do produto é obrigatória'),
    description: yup.string().required('A descrição do produto é obrigatória'),
    image: yup.string().required('A imagem do produto é obrigatória')
})


export function NewProduct() {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <Container>
            <Form>
                <InputGroup>
                    <Lable>Nome</Lable>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Lable>Preço</Lable>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <ImageIcon />
                        <input type="file" />
                    </LabelUpload>
                </InputGroup>


                <InputGroup>
                    <Lable>Categoria</Lable>
                    <Select />
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    );
}