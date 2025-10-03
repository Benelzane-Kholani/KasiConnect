import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "./lib/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { login } = useAuth();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await login(email, password);
      router.replace("/"); // go to index on success
    } catch (error: any) {
      Alert.alert("Login Failed", error?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to your KasiConnect account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Log In</Text>
        )}
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <Link href="/signup" asChild>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#ECF0F1" },
  title: { fontSize: 32, fontWeight: "bold", color: "#1A5276", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#34495E", textAlign: "center", marginBottom: 40 },
  input: { width: '100%', height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, fontSize: 16, marginBottom: 15, borderWidth: 1, borderColor: '#BDC3C7' },
  loginButton: { width: '100%', height: 50, backgroundColor: "#F57C00", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 20 },
  loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  signupContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  signupText: { fontSize: 14, color: "#34495E" },
  signupLink: { fontSize: 14, color: "#1A5276", fontWeight: "bold" },
  errorText: { color: 'red', alignSelf: 'flex-start', marginLeft: 5, marginBottom: 10, marginTop: -10 },
});