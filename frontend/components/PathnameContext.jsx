"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const PathnameContext = createContext(null);

export const PathnameProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  );
};

export const usePathnameContext = () => useContext(PathnameContext);
