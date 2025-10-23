"use client";
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Al-Asr Logo"
      width={150}  // Set actual width
      height={50}  // Set actual height
      style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
      priority
    />
  );
}