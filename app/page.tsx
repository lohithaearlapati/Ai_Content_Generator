"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/ai-background.jpg')" }} // Ensure this image is in `public/`
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Box */}
      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold drop-shadow-lg">CONTENT AI</h1>
        <Button
          onClick={() => router.push("/sign-in")}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
