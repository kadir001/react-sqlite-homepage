import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const addPost = async () => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: author || "Gast", content })
    });
    const newPost = await res.json();
    setPosts([newPost, ...posts]);
    setContent("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blog</h2>

      <input
        placeholder="Naam (optioneel)"
        className="w-full p-2 border rounded mb-3"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea
        placeholder="Schrijf iets..."
        className="w-full p-3 border rounded-lg mb-3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={addPost}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Plaatsen
      </button>

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
            <div className="font-semibold text-blue-700">{post.author}</div>
            <div>{post.content}</div>
            <div className="text-xs text-gray-500 mt-1">{post.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
