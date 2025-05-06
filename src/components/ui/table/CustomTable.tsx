import { ReactNode } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TableColumn {
  id: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  minWidth?: number;
}

interface CustomTableProps<T> {
  columns: TableColumn[];
  rows: T[];
  renderCell: (column: TableColumn, row: T) => ReactNode;
}

export default function CustomTable<T>({ columns, rows, renderCell }: CustomTableProps<T>) {
  return (
    <TableContainer component={Paper} className="rounded-xl overflow-hidden">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-50">
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                style={{ minWidth: column.minWidth }}
                className="font-medium text-gray-700 py-4">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-gray-50 transition-colors">
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'} className="py-4">
                  {renderCell(column, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
