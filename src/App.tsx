import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SearchPage from "@/pages/SearchPage";
import CourseDetailsPage from "@/pages/CourseDetailsPage";
import CourseLessonsPage from "@/pages/CourseLessonsPage";
import CourseReviewsPage from "@/pages/CourseReviewsPage";
import CreatorProfilePage from "@/pages/CreatorProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/course/:slug" element={<CourseDetailsPage />} />
      <Route path="/course/:slug/lessons" element={<CourseLessonsPage />} />
      <Route path="/course/:slug/reviews" element={<CourseReviewsPage />} />
      <Route path="/reviews" element={<CourseReviewsPage />} />
      <Route path="/creator/:slug" element={<CreatorProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
