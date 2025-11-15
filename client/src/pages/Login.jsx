import React, { useState } from "react";

export default function LoginPage({ auth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handle = async () => {
    const res = await auth.login(username, password);
    if (!res.success) setError(res.error);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inloggen</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        className="w-full p-2 border rounded mb-3"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Gebruikersnaam"
      />
      <input
        className="w-full p-2 border rounded mb-3"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Wachtwoord"
      />
      <button
        onClick={handle}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
}
