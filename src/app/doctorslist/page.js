import Link from "next/link";
import React from "react";

export default function DoctorList() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/doctorslist/anil">Anil</Link>
      <Link href="/student/sidhu">Sidhu</Link>
      <Link href="/student/badshah">Badshah</Link>
    </div>
  );
}
