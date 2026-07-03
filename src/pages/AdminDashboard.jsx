import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import AdminPanel from "../components/AdminPanel";

export default function AdminDashboard() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(`Sign out error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>

        <div className="bg-black border border-purple-500 rounded-lg p-6">
          <AdminPanel />
        </div>
      </div>
    </div>
  );
}
