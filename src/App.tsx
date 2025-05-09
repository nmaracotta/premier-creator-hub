
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Booking Flow Pages
import ConfirmationPage from "./pages/BookingFlow/ConfirmationPage";
import ApplicationPage from "./pages/BookingFlow/ApplicationPage";
import CalendarPage from "./pages/BookingFlow/CalendarPage";
import ThankYouPage from "./pages/BookingFlow/ThankYouPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Booking Flow Routes */}
          <Route path="/booking/confirmation" element={<ConfirmationPage />} />
          <Route path="/booking/application" element={<ApplicationPage />} />
          <Route path="/booking/calendar" element={<CalendarPage />} />
          <Route path="/booking/thank-you" element={<ThankYouPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
