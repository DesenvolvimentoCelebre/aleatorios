import styled from "styled-components";

const Tabelaa = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: none;
  table-layout: fixed;
  margin: auto;
  margin-top: 70px;

  th,
  td {
    border: none;
    padding: 10px;
    text-align: center;
    word-wrap: break-word;
    white-space: normal;
  }
  td,
  th {
    border-bottom: 2px solid #ffffff;
    color: #261136;
    font-weight: 900;

    color: #fff;
  }
`;

const Tabela = ({ coluna, dados }) => {
  return (
    <Tabelaa>
      <thead>
        <tr>
          {coluna.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {coluna.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Tabelaa>
  );
};

export default Tabela;
