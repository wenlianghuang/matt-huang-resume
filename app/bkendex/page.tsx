'use client';
import { useEffect, useState } from "react";

export default function Bkendex() {
  const [data, setData] = useState("");
  const [time,setTime] = useState("");
  useEffect(() => {
    fetch("https://matt-huang-resume-backend.vercel.app/api/data")
      .then((res) => res.json())
      .then((json) => {setData(json.message),setTime(json.log)})
      .catch((err) => console.error("API 錯誤:", err));
  }, []);

  return (
    <>
      <div>
        <h1>{data || "Loading..."}</h1>
      </div>
      <div>
        <h2>{time || ""}</h2>
      </div>
    </>
  );

  /*
  return
  (
    <h1>{data || "Loading..."}</h1>
  ) 
    */
}