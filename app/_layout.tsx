import { Slot, usePathname, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "./lib/AuthContext";

function AuthGate() {
  const { user, initializing } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (initializing) return;

    const onAuthRoutes = pathname === "/login" || pathname === "/signup";

    if (!user && !onAuthRoutes) {
      router.replace("/login");
    } else if (user && onAuthRoutes) {
      router.replace("/");
    }
  }, [user, initializing, pathname, router]);

  if (initializing) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}