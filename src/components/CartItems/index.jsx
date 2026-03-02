import TrashIcon from '../../assets/trash.svg';
import { Button, Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, TotalPrice, TrashImage } from './styles';

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <Button onClick={() => decreaseProduct(product.id)}>-</Button>
                                    {product.quantity}
                                    <Button onClick={() => increaseProduct(product.id)}>+</Button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>
                                <TotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </TotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage 
                                src={TrashIcon} 
                                alt="Remover" 
                                OnClick={() => deleteProduct(product.id)}/>
                            </Table.Td> 
                        </Table.Tr>
                    ))
                ) : (
                    <EmptyCart>
                        <Table.Td colSpan={5}>Nenhum item no carrinho</Table.Td>
                    </EmptyCart >
                )}

            </Table.Body>
        </Table.Root>
    )
}