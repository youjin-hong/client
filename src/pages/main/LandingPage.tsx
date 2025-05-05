import Button from '@/components/ui/button/Button';
import { ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Link to={ROUTES.LOGIN}>
        <Button text="로그인 후 무료로 시작하기" />
      </Link>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid, adipisci aut dignissimos cupiditate
      accusantium eveniet id expedita maiores maxime. Vitae deserunt similique beatae officia, sed est tempora molestiae
      consequatur!
    </div>
  );
};

export default LandingPage;
