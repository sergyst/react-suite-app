import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css';

import { Button, ButtonToolbar, Table } from 'rsuite';
import { mockUsers } from './mock';

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(50);

export const LoansTable = () => {
  const [noData, setNoData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [autoHeight, setAutoHeight] = React.useState(false);
  const [fillHeight, setFillHeight] = React.useState(true);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const loanStatus = {
    1: "wait approve",
    2: "active",
    3: "terminated"
  };

  return (
    <Table
      height={400}
      loading={loading}
      autoHeight={autoHeight}
      fillHeight={fillHeight}
      data={noData ? [] : getData}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={150} sortable>
        <HeaderCell>Status</HeaderCell>
        <Cell dataKey="loanStatus">
          {rowData => (
          <div class={"loan-status-"+rowData.loanStatus}>{loanStatus[rowData.loanStatus]}</div>
          )}
        </Cell>
      </Column>

      <Column width={60} align="center" fixed sortable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150} sortable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={150} sortable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={150} sortable>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={280} fixed="right">
        <HeaderCell></HeaderCell>

        <Cell>
        {rowData => (
          <ButtonToolbar>
            <Button color="green" appearance="link">Create</Button>
            <Button color="blue" appearance="link">Update</Button>
            <Button color="red" appearance="link">Terminate {rowData.id}</Button>
          </ButtonToolbar>
        )}
        </Cell>
      </Column>
    </Table>
  );
};
