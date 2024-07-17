import React from "react";
import { AuthProvider } from "../src/context/auth/AuthContext";

import "../src/index.css";

export const withTailwind = (Story: React.ComponentType) => (
  <div className="font-sans">
    <Story />
  </div>
);

export const withAuthProvider = (Story: React.ComponentType<any>) => (
  <AuthProvider>
    <Story />
  </AuthProvider>
);
