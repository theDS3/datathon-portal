"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";

export default function ParticipantQR({ token }: { token: string }) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(token, { width: 256 }).then((url) => {
      if (active) setQr(url);
    });
    return () => {
      active = false;
    };
  }, [token]);

  return qr ? (
    <Image src={qr} alt="Your QR code" width={256} height={256} unoptimized className="mx-auto mt-6" />
  ) : (
    <p className="mt-6 text-sm">Generating your QR code...</p>
  );
}
