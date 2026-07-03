import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

/**
 * AdminLayout handles authentication state and routing between login/dashboard.
 * - If not authenticated, show AdminLogin
 * - If authenticated and on /admin/login, redirect to /admin/dashboard
 * - If authenticated and on /admin/dashboard, show AdminDashboard
 */
export default function AdminLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const adminUid = import.meta.env.VITE_ADMIN_UID;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (loading) return;

    const isOnLogin = location.pathname === "/admin/login";
    const isOnDashboard = location.pathname === "/admin/dashboard";

    if (user && isOnLogin) {
      // Authenticated user on login page → redirect to dashboard only if admin
      if (user.uid === adminUid) {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } else if (!user && isOnDashboard) {
      // Unauthenticated user on dashboard → redirect to login
      navigate("/admin/login", { replace: true });
    } else if (user && isOnDashboard) {
      // Authenticated but non-admin users must be redirected to homepage
      if (user.uid !== adminUid) {
        navigate("/", { replace: true });
      }
    }
  }, [user, loading, location.pathname, navigate, adminUid]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  // Render dashboard only if authenticated
  if (location.pathname === "/admin/dashboard") {
    return user ? <AdminDashboard /> : <AdminLogin />;
  }

  // Render login only if not authenticated
  if (location.pathname === "/admin/login") {
    return user ? <AdminDashboard /> : <AdminLogin />;
  }

  // Default to login
  return <AdminLogin />;
}
