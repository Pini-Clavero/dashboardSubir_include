import './assets/css/app.css';
import { SideBar } from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter } from 'react-router-dom';
import Users from './componentes/UsersTotal';
import ProductsTotal from './componentes/ProductsTotal';
import CategoriesTotal from './componentes/CategoriesTotal'
import ProductsList from './componentes/ProductsList'
import CountByCategory from './componentes/CountByCategory';
import LastProduct from './componentes/LastProduct';

export default function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Users />
        <ProductsTotal />
        <CategoriesTotal />
        <ProductsList />
        <CountByCategory />
        <LastProduct />

        <SideBar />
        <ContentWrapper />
      </BrowserRouter>
    </div>
  );
}

