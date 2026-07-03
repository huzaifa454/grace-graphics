import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";

export default function AdminPanel() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Covers");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const upload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select file");
    if (!title) return alert("Enter title");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryPreset);
    formData.append("folder", "grace-graphics/portfolio");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.error.message);

      // Store metadata in Firestore
      await addDoc(collection(db, "portfolio_images"), {
        title,
        category,
        url: data.secure_url,
        cloudinary_public_id: data.public_id,
        createdAt: new Date(),
      });

      setTitle("");
      setFile(null);
      await fetchList();
      alert("Image uploaded");
    } catch (err) {
      alert(`Upload error: ${err.message}`);
    }
    setLoading(false);
  };

  const fetchList = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "portfolio_images"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const imgs = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
      setImages(imgs);
    } catch (err) {
      alert(`Fetch error: ${err.message}`);
    }
    setLoading(false);
  };

  const handleDelete = async (docId, publicId) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Delete image from your portfolio?")) return;

    setLoading(true);
    try {
      // Delete from Firestore only
      // (Image remains in Cloudinary but is no longer linked in portfolio)
      await deleteDoc(doc(db, "portfolio_images", docId));
      await fetchList();
    } catch (err) {
      alert(`Delete error: ${err.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form onSubmit={upload} className="mb-6 p-4 border border-purple-500 rounded">
        <div className="mb-3">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Cover Art"
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
          >
            <option>Covers</option>
            <option>Websites</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block mb-1">Image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-3 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload to Cloudinary"}
        </button>
      </form>

      <div>
        <h3 className="text-xl mb-3">Uploaded Images ({images.length})</h3>
        {images.length === 0 ? (
          <p>No images</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img) => (
              <div key={img.id} className="border border-gray-600 p-3 rounded">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <div className="text-sm mb-2">
                  <div className="font-semibold">{img.title}</div>
                  <div className="text-gray-400">{img.category}</div>
                </div>
                <button
                  className="w-full bg-red-600 text-white px-2 py-1 rounded text-sm"
                  onClick={() => handleDelete(img.id, img.cloudinary_public_id)}
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
