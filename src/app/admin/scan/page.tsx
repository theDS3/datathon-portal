"use client";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function ScanPage() {
  const [result, setResult] = useState("");

  return (
    <main className="mx-auto mt-12 max-w-md px-4">
      <h1 className="text-2xl font-bold">Scan meal QR</h1>
      <div className="mt-4 overflow-hidden rounded">
        <Scanner
          onScan={(codes) => {
            // TODO: POST /api/scan with the token
            if (codes[0]) setResult(codes[0].rawValue);
          }}
        />
      </div>
      {result && <p className="mt-4 rounded border p-3 text-sm">Scanned token: {result}</p>}
    </main>
  );
}