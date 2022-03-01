import React, { useState, useContext } from "react";
const OtechContext = React.createContext();

const OtechProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState("");

  return (
    <OtechContext.Provider value={{ isSubmenuOpen, setIsSubmenuOpen }}>
      {children}
    </OtechContext.Provider>
  );
};
export { OtechContext, OtechProvider };
