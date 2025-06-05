import Button from '@/components/ui/button/Button';

interface GoToFigmaButtonProps {
  figmaUrl: string;
}

export default function GoToFigmaButton({ figmaUrl }: GoToFigmaButtonProps) {
  return (
    <div className="flex justify-end">
      <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
        <Button text="해당 피그마 프레임으로 바로가기" />
      </a>
    </div>
  );
}
