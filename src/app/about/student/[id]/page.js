"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function StudentList(props) {
  const router = useSearchParams();
  console.log("🚀 ~ StudentList ~ params:", router, props);
  return <div>Student details</div>;
}
export default StudentList;
