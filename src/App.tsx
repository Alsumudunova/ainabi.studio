import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Loader from "./components/Loader/Loader";
import BackToTop from "./components/BackToTop/BackToTop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Course Details
import FlutterCourse from "./components/CourseDetails/FlutterCourse";
import WebCourse from "./components/CourseDetails/WebCourse";
import TargetCourse from "./components/CourseDetails/TargetCourse";
import ChinaCourse from "./components/CourseDetails/ChinaCourse";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import AuthPage from "./components/LMS/AuthPage";
import Dashboard from "./components/LMS/Dashboard";
import { CourseCatalog, CourseLearn } from "./components/LMS/CourseCatalog";
import AssignmentsPage from "./components/LMS/AssignmentsPage";
import TestsPage from "./components/LMS/TestsPage";
import CertificatesPage from "./components/LMS/CertificatesPage";
import InternshipPlatform from "./components/LMS/InternshipPlatform";
import MentorPanel from "./components/LMS/MentorPanel";
import AdminPanel from "./components/LMS/AdminPanel";
import ProtectedRoute from "./components/LMS/ProtectedRoute";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/flutter" element={<FlutterCourse />} />
        <Route path="/courses/web" element={<WebCourse />} />
        <Route path="/courses/target" element={<TargetCourse />} />
        <Route path="/courses/china" element={<ChinaCourse />} />
        <Route path="/auth/:mode" element={<AuthPage />} />
        <Route path="/dashboard" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><Dashboard /></ProtectedRoute>} />
        <Route path="/lms/courses" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><CourseCatalog /></ProtectedRoute>} />
        <Route path="/lms/courses/:slug" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><CourseLearn /></ProtectedRoute>} />
        <Route path="/lms/assignments" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><AssignmentsPage /></ProtectedRoute>} />
        <Route path="/lms/tests" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><TestsPage /></ProtectedRoute>} />
        <Route path="/lms/certificates" element={<ProtectedRoute roles={["student", "mentor", "admin"]}><CertificatesPage /></ProtectedRoute>} />
        <Route path="/internship" element={<InternshipPlatform />} />
        <Route path="/mentor" element={<ProtectedRoute roles={["mentor", "admin"]}><MentorPanel /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute roles={["admin"]}><AdminPanel /></ProtectedRoute>} />
      </Routes>
      <FloatingMenu/>
      <BackToTop />
    </>
  );
}

export default App;
