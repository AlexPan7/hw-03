import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <Wrapper>
      <Header />
        <Outlet />
      <Footer />
    </Wrapper>
  )
}

export default PublicLayout;