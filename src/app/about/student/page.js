"use client";
import Link from "next/link";
import React from "react";

function Student(props) {
  console.log("🚀 ~ Student ~ props:", props);
  return (
    <div>
      <h1>Student Page</h1>
      <Link href="/studentlist/anil">Anil</Link>
      <Link href="/about/student?id={12}">Sidhu</Link>
      <Link href={`/about/student/${12}`}>mohit</Link>
      <Link href={`/about/student/${13}`}>mohit13</Link>
      <Link href="/about/student/badshah/13">Badshah</Link>
    </div>
  );
}

export default Student;
