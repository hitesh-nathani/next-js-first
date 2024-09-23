"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function About() {
  const router = useSearchParams();
  console.log("🚀 ~ About ~ router:", router.get("type"));
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
export default About;
