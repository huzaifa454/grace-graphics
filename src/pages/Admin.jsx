import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import AdminPanel from "../components/AdminPanel";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-2xl mb-4">Admin Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 mb-2 block"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border p-2 mb-2 block"
          />
          <button className="bg-blue-600 text-white px-4 py-2">Sign in</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Admin Panel</h2>
        <button onClick={handleSignOut} className="bg-gray-200 px-3 py-1">
          Sign out
        </button>
      </div>
      <AdminPanel />
    </div>
  );
}
