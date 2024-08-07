"use client"
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-manrope'
});
export default function Home() {
  console.log("OK");
  
  return (
    <main className="">
      <Header title="Home" />
    </main>
  );
}
