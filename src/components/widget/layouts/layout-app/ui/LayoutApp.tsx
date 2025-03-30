import { Header } from "./components/Header";

interface IProps {
  children: React.ReactNode;
}

export const LayoutApp: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div className="container-sm">{children}</div>
    </div>
  );
};
