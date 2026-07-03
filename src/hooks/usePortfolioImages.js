import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const normalizeCategory = (value) => {
  if (!value) return "Other";
  const normalized = String(value).trim().toLowerCase();
  if (/^covers?$/.test(normalized)) return "Covers";
  if (/^websites?$/.test(normalized)) return "Websites";
  return String(value).trim();
};

/**
 * Hook to fetch portfolio images from Firestore.
 */
export function usePortfolioImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const snapshot = await getDocs(collection(db, "portfolio_images"));
        const firestoreImages = snapshot.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        }));

        const transformed = firestoreImages
          .map((img) => {
            const imageUrl =
              img.url ||
              img.secure_url ||
              img.imageUrl ||
              img.image ||
              img.img ||
              img.src;

            return {
              title: img.title || "Untitled",
              img: imageUrl,
              category: normalizeCategory(img.category),
            };
          })
          .filter((project) => project.img);

        setImages(transformed);
      } catch (err) {
        console.warn("Failed to fetch from Firestore:", err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return { images, loading };
}
