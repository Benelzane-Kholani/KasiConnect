import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
// Update the import path if AuthContext is located elsewhere, for example:
import { useAuth } from "./lib/AuthContext";

export default function SignupScreen() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

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

  const onSignup = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      await signup(email, password);
      router.replace("/");
    } catch (e: any) {
      Alert.alert("Sign Up Failed", e?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.primaryButton} onPress={onSignup} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Sign Up</Text>}
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text>Already have an account? </Text>
        <Link href="/login" asChild>
          <TouchableOpacity><Text style={styles.link}>Log In</Text></TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#ECF0F1" },
  title: { fontSize: 28, fontWeight: "bold", color: "#1A5276", textAlign: "center", marginBottom: 20 },
  input: { height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, fontSize: 16, marginBottom: 15, borderWidth: 1, borderColor: '#BDC3C7' },
  primaryButton: { height: 50, backgroundColor: "#1A5276", borderRadius: 10, alignItems: "center", justifyContent: "center" },
  primaryButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginRow: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  link: { color: "#1A5276", fontWeight: "bold" },
  errorText: { color: 'red', alignSelf: 'flex-start', marginLeft: 5, marginBottom: 10, marginTop: -10 },
});