"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { mockUser } from "@/lib/mock";

export default function Dashboard() {
  const [qr, setQr] = useState("");

  useEffect(() => {
    QRCode.toDataURL(mockUser.qrToken, { width: 256 }).then(setQr);
  }, []);

  return (
    <main className="mx-auto mt-12 max-w-md px-4 text-center">
      <h1 className="text-2xl font-bold">Welcome, {mockUser.name}</h1>
      <p className="mt-2 text-sm">Show this QR code at the meal line.</p>
      {qr && <img src={qr} alt="Your QR code" className="mx-auto mt-6" />}
    </main>
  );
}