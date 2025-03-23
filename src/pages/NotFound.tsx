
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MotionWrapper from "@/components/MotionWrapper";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50">
      <div className="container-custom text-center">
        <MotionWrapper animation="fade-in-up">
          <p className="tag bg-accent/10 text-accent mb-4 inline-block">404 Error</p>
          <h1 className="h1 mb-6">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="btn-hover" size="lg" asChild>
            <a href="/">Return Home</a>
          </Button>
        </MotionWrapper>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFound;
