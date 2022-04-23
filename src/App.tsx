import Routes from "./routes";
import GlobalStyled from "./style/global";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <GlobalStyled />
      <Toaster />
      <Routes />
    </>
  );
}

export default App;
