import Test from './components/Test1';
import Test2 from './components/Test2';
import { CalculadoraProvider } from './context/calculadora'

const App = () => {
return (
  <>
      <CalculadoraProvider>
        <Test />
        <Test2 />
      </CalculadoraProvider>
  </>  
    );
  }


export default App;
