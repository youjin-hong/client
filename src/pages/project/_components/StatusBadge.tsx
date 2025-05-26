type StatusType = 'IN_PROGRESS' | 'COMPLETED' | 'NOT_STARTED' | 'READY';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusStyle = (status: StatusType): string => {
    switch (status) {
      case 'IN_PROGRESS':
        return `bg-navy_2 text-navy_1 text-11 font-medium`;
      case 'COMPLETED':
        return `bg-green_2 text-green_1 text-11 font-medium`;
      case 'NOT_STARTED':
        return `bg-gray_2 text-gray_1 text-11 font-medium`;
      case 'READY':
        return `bg-yellow_2 text-yellow_1 text-11 font-medium`;
      default:
        return `bg-gray_2 text-gray_1 text-11 font-medium`;
    }
  };

  const getStatusText = (status: StatusType): string => {
    switch (status) {
      case 'IN_PROGRESS':
        return `진행중`;
      case 'COMPLETED':
        return `완료`;
      case 'NOT_STARTED':
        return `시작 전`;
      case 'READY':
        return `준비`;
      default:
        return `진행 전`;
    }
  };

  const getDotColor = (status: StatusType): string => {
    switch (status) {
      case 'IN_PROGRESS':
        return `bg-navy_1`;
      case 'COMPLETED':
        return `bg-green_1`;
      case 'NOT_STARTED':
        return `bg-gray_1`;
      case 'READY':
        return `bg-yellow_1`;
      default:
        return `bg-gray_1`;
    }
  };

  return (
    <div className={`rounded-20 px-3 py-2 flex items-center w-fit ${getStatusStyle(status)} ${className}`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${getDotColor(status)}`}></span>
      {getStatusText(status)}
    </div>
  );
};

export default StatusBadge;
