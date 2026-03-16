import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`
  height: 80px;
  border-radius: 5px;
  padding: 12px;
`;

export const SelectStatus = styled(Select)`
  width: 250px; /* Ajustado para caber melhor na tabela */

  .react-select__menu {
    border-radius: 8px;
    z-index: 9999;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  // Corrigi a lógica de cor aqui para usar a variável correta
  color: ${(props) => props.$isActiveStatus ? `#e2520f` : '#c4560dd5'};
  border-bottom: ${(props) => props.$isActiveStatus ? `2px solid #e2520f` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  font-weight: ${(props) => props.$isActiveStatus ? `bold` : 'normal'};
`;