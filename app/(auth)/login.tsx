import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Login } from "@components/ui/auth/login";

const LoginScreen = () => {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
};

export default LoginScreen;
