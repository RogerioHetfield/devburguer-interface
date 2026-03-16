import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders');
      setOrders(data);
    }
    loadOrders();
  }, []);

  // ESTA FUNÇÃO AGORA APENAS DEFINE O STATUS ATIVO
  function handleStatus(status) {
    setActiveStatus(status.id);
  }

  // NOVO: Este useEffect monitora mudanças em 'orders' ou no 'activeStatus'
  // Ele garante que a tela sempre mostre os pedidos corretos para o filtro atual
  useEffect(() => {
    const statusAtual = orderStatusOptions.find(s => s.id === activeStatus);
    
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === statusAtual.value);
      setFilteredOrders(newOrders);
    }
  }, [orders, activeStatus]);

  useEffect(() => {
    const newRows = filteredOrders.map((order) => ({
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    }));
    setRows(newRows);
  }, [filteredOrders]);

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row 
                key={row.orderId} 
                row={row} 
                orders={orders} 
                setOrders={setOrders} 
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}