import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const Home = () => {
  return (
    <Link to="/new">
      <Button>заполнить форму</Button>
    </Link>
  );
};
