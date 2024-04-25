//-------------------------import-----------------------
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./pages/RootLayout";
import DetailOrderPage from "./pages/DetailOrderPage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import ServerError from "./pages/ServerError";
const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
//-------------------------component App------------------------------
//---create router---
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage></HomePage>
          </Suspense>
        ),
        loader: () =>
          import("./components/HomePage/ProductList").then((module) =>
            module.loader()
          ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ShopPage></ShopPage>
          </Suspense>
        ),
        loader: (params) =>
          import("./components/ShopPage/ProductList").then((module) =>
            module.loader(params)
          ),
      },
      {
        path: "/detail/:productID",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <DetailPage></DetailPage>
          </Suspense>
        ),
        loader: (params) =>
          import("./components/DetailPage/Product").then((module) =>
            module.loader(params)
          ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CartPage></CartPage>
          </Suspense>
        ),
        loader: () =>
          import("./components/CartPage/ShoppingCart").then((module) =>
            module.loader()
          ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CheckoutPage></CheckoutPage>{" "}
          </Suspense>
        ),
        loader: () =>
          import("./components/CartPage/ShoppingCart").then((module) =>
            module.loader()
          ),
      },
      {
        path: "/history",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HistoryPage></HistoryPage>
          </Suspense>
        ),
        loader: () =>
          import("./components/HistoryPage/History").then((module) =>
            module.loader()
          ),
      },
      { path: "/history/:id", element: <DetailOrderPage></DetailOrderPage> },
      { path: "/login", element: <LoginPage></LoginPage> },
    ],
  },
  { path: "/error", element: <ServerError></ServerError> },
]);
//---component---
function App() {
  //-----return-----
  return <RouterProvider router={router}></RouterProvider>;
}
//---------------------------export---------------------------
export default App;
