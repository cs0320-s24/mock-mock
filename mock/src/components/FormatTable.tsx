import "../styles/main.css";

export interface tableProps {
  tableInfo: string[][];
}

const Table = (props: tableProps): JSX.Element => {
  //creates headers for table
  const headers = props.tableInfo[0].map((column) => <th>{column}</th>);

  //creates values for row
  const rowVals = (rowInfo: string[]) => {
    return rowInfo.map((rowVal) => <td>{rowVal}</td>);
  };

  //creates rows from values
  const makeRows = props.tableInfo
    .slice(1)
    .map((row) => <tr>{rowVals(row)}</tr>);

  //returns everything put together as a table
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{makeRows}</tbody>
    </table>
  );
};

export default Table;
