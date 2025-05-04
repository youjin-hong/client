import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex flex-col pt-16 pb-9 gap-7 items-center font-normal text-7 text-typography-gray">
        <div className="flex gap-7">
          <Link to="#">이용 약관</Link>
          <Link to="#">개인정보 동의</Link>
        </div>
        <p>Copyright@AUTA.All rights reserver</p>
      </div>
    </footer>
  );
}
