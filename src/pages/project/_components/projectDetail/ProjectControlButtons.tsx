import Button from '@/components/ui/button/Button';
import PencilIcon from '@/assets/icons/pencil';

export default function ProjectControlButtons() {
  return (
    <section className="flex justify-end gap-3 pt-7">
      <Button
        text="수정하기"
        leftIcon={<PencilIcon />}
        className="flex border-none shadow-custom rounded-10 w-[118px] h-6 items-center justify-center"
      />
      <Button
        text="삭제하기"
        className="border-none shadow-custom rounded-10 w-[118px] h-6 flex items-center justify-center"
      />
    </section>
  );
}
