import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Description } from './layout/sections/description/Description';
import { Feeding } from './layout/sections/feeding/Feeding';
import { Testimonials } from '@/layout/sections/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Description />
      <Feeding />
      <Testimonials />
    </>
  );
};

export default App;
