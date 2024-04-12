import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import ProductList from "./pages/ProductList";
import AddPRoduct from "./pages/AddProduct";
import GlobalStyles from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Page404 from "./pages/404";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<ProductList />} />
            <Route path="addproduct" element={<AddPRoduct />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
