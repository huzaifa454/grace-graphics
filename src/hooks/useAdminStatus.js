import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const adminUid = import.meta.env.VITE_ADMIN_UID;

export function useAdminStatus() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(!!user && user.uid === adminUid);
    });

    return () => unsubscribe();
  }, []);

  return isAdmin;
}
