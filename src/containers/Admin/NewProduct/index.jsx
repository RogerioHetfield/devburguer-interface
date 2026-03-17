import React, { useEffect, useState } from 'react'; // 1. Importe os Hooks
import { api } from '../../services/api'; // 2. Importe sua API configurada
// ... seus outros imports

export function NewProduct() {
    const [categories, setCategories] = useState([]); // 3. Estado para guardar as categorias

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // 4. Função para buscar as categorias no Render
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);

    return (
        <Container>
            <Form>
                {/* ... outros campos ... */}

                <InputGroup>
                    <Lable>Categoria</Lable>
                    {/* 5. Preencha o Select com as categorias do banco */}
                    <Select 
                        options={categories} 
                        getOptionLabel={(cat) => cat.name}
                        getOptionValue={(cat) => cat.id}
                        placeholder="Escolha a categoria"
                    />
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    );
}