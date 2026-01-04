"use client";

import "@/styles/giftcardsTeaser.css";

export default function GiftcardsTeaser() {
  const handleClick = () => alert("Claim gift cards clicked");

  return (
    <div className="teaser-card giftcards-teaser">
      <div className="teaser-left">
        <p className="teaser-text">
          Assured vouchers up to <strong>₹1000✨</strong><br />
          of trending brands
        </p>
      </div>
      <button className="teaser-btn" onClick={handleClick}>
        Claim gift cards »
      </button>
    </div>
  );
}
