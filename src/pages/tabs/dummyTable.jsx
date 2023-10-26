import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableTitle,
} from "./Tabs.styled.js";

const DummyTable = () => {
  return (
    <Table>
      <TableTitle>Dummy Table</TableTitle>
      <TableHead>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Age</TableHeadCell>
          <TableHeadCell>Profession</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>John Doe</TableDataCell>
          <TableDataCell>35</TableDataCell>
          <TableDataCell>Actor</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Alice Smith</TableDataCell>
          <TableDataCell>28</TableDataCell>
          <TableDataCell>Singer</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Robert Johnson</TableDataCell>
          <TableDataCell>45</TableDataCell>
          <TableDataCell>Athlete</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Sarah Brown</TableDataCell>
          <TableDataCell>30</TableDataCell>
          <TableDataCell>Model</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Michael White</TableDataCell>
          <TableDataCell>50</TableDataCell>
          <TableDataCell>Director</TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DummyTable;
