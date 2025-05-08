import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface TableColumn {
  id: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableItemProps<T> {
  columns: TableColumn[];
  items: T[];
  renderCell: (column: TableColumn, item: T, index: number) => ReactNode;
  className?: string;
  onItemClick?: (item: T) => void;
  getItemPath?: (item: T) => string;
}

export default function TableItem<T>({
  columns,
  items,
  renderCell,
  className = '',
  onItemClick,
  getItemPath
}: TableItemProps<T>) {
  const navigate = useNavigate();

  const handleItemClick = (item: T) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (getItemPath) {
      navigate(getItemPath(item));
    }
  };

  return (
    <table className={`${className} space-y-5`}>
      {/* 테이블 헤더 */}
      <thead className="grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] bg-background shadow-custom rounded-10 p-4">
        {columns.map((column) => (
          <tr
            key={column.id}
            className={`font-bold text-typography-dark text-14 flex items-center justify-${
              column.align || 'center'
            } ${column.width ? `w-[${column.width}]` : ''}`}>
            <th>{column.label}</th>
          </tr>
        ))}
      </thead>

      {/* 테이블 바디 */}
      <tbody className="space-y-5">
        {items.map((item, itemIndex) => (
          <tr
            key={itemIndex}
            className="bg-white grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] p-4 hover:bg-button-hover transition-colors rounded-10 cursor-pointer"
            onClick={() => handleItemClick(item)}>
            {columns.map((column) => (
              <td
                key={`${itemIndex}-${column.id}`}
                className={`flex items-center justify-${
                  column.align || 'center'
                } ${column.width ? `w-[${column.width}]` : ''} font-medium text-typography-dark text-11 `}>
                {renderCell(column, item, itemIndex)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
