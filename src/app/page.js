"use client";

import LoadingSpinner from "@/components/loading-spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");
    else router.push("/dashboard");
  }, []);

  return <LoadingSpinner />;
};

export default Home;

