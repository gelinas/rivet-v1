import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// fix undesired behavior in react-router 
// resolves issue where route navigation does not return you to the top of the page

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}