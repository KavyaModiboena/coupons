
"use client";

import { useState } from "react";
import OfferSection from "@/components/OfferSection";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <OfferSection signedIn={signedIn} setSignedIn={setSignedIn} />
  );
}
