import { Link } from "react-router-dom";
import { Button } from "antd";

export const Home = () => (
  <Link to="/new">
    <Button>заполнить форму</Button>
  </Link>
);
