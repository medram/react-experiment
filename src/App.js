import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";

import "./assets/css/main.css"
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AuthRequired from "./pages/layouts/AuthRequired";
import NotAuthRequired from "./pages/layouts/NotAuthRequired";
import DashboardPage from "./pages/admin/DashboardPage";
import { useTheme } from "./hooks";
import { useEffect } from "react";


const queryClient = new QueryClient()

function App() {

  const [ theme ] = useTheme()

  useEffect(() => {
    console.log("theme updated")
    const html = document.querySelector("html")
    html.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts">
            <Route path="" element={<PostsPage />} />
            <Route path=":id" element={<PostDetailsPage />} />
          </Route>

          <Route element={<NotAuthRequired />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="/admin" element={<AuthRequired />}>
            <Route path="" element={<DashboardPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
