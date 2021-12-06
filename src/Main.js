import React from "react";
import { NewAlert } from "./pages/alert/NewAlert";
import { Footer } from "./components/layout/footer/Footer";
import StepperPage from "./components/Stepper/StepperPage";

const Main = () => {
  return (
    <div>
      <StepperPage />
      <Footer />
    </div>
  );
};

export default Main;
