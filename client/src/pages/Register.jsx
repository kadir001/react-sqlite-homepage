import React, { useState } from "react";

export default function RegisterPage({ auth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handle = async () => {
    const res = await auth.register(username, password);
    setMsg(res.success ? "Registratie gelukt!" : res.error);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Registreren</h2>
      {msg && <p className="mb-2 text-blue-600">{msg}</p>}
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
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Registreren
      </button>
    </div>
  );
}
