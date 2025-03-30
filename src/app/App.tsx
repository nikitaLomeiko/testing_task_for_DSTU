import { LayoutApp } from "components/widget/layouts/layout-app";
import { Routing } from "./providers/routing";
import "./styles/index.css";

function App() {
  return (
    <LayoutApp>
      <Routing />
    </LayoutApp>
  );
}

export default App;
