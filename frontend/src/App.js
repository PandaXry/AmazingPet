import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import UseCasesPage from "./pages/UseCasesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import CompliancePage from "./pages/CompliancePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/use-cases/breeders" element={<UseCasesPage />} />
          <Route path="/use-cases/groomers" element={<UseCasesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
