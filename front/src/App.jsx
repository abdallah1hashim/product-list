import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import ProductList from "./pages/ProductList";
import AddPRoduct from "./pages/AddProduct";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<ProductList />} />
          <Route path="addproduct" element={<AddPRoduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
