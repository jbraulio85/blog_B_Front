import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Article,
  ArticleList,
  NotFound,
  Navbar,
  Pegro,
} from "../components";

export const DashboardPage = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:name" element={<Article />} />
          <Route path="/posts" element={<ArticleList />} />
          <Route path="/pegro" element={<Pegro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
