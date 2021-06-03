import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Freelance</td>
            <td className="deposit">R$1.000,00</td>
            <td>Desenvolvimento</td>
            <td>15/05/2021</td>
          </tr>
          <tr>
            <td>Suplementos</td>
            <td className="withdraw">- R$300,00</td>
            <td>Saúde</td>
            <td>01/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}