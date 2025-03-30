'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://matt-huang-resume-backend.vercel.app/api/data")
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => console.error("API 錯誤:", err));
  }, []);

  return <h1>{data || "Loading..."}</h1>;
}