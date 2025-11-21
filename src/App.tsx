import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Loader from "./components/Loader/Loader";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import BackToTop from "./components/BackToTop/BackToTop";

// Course Details
import FlutterCourse from "./components/CourseDetails/FlutterCourse";
import WebCourse from "./components/CourseDetails/WebCourse";
import TargetCourse from "./components/CourseDetails/TargetCourse";
import ChinaCourse from "./components/CourseDetails/ChinaCourse";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/flutter" element={<FlutterCourse />} />
        <Route path="/courses/web" element={<WebCourse />} />
        <Route path="/courses/target" element={<TargetCourse />} />
        <Route path="/courses/china" element={<ChinaCourse />} />
      </Routes>

      <FloatingButton />
      <BackToTop />
    </>
  );
}

export default App;
