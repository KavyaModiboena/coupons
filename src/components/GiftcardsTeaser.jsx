"use client";

import "@/styles/giftcardsTeaser.css";

export default function GiftcardsTeaser() {
  const handleClick = () => alert("Claim gift cards clicked");

  return (
    <div className="teaser-card giftcards-teaser">
      <div className="teaser-left">
        <p className="teaser-title">Bonus gift cards:</p>
        <p className="teaser-text">
          Assured vouchers up to <strong>₹1000✨</strong><br />
          of trending brands
        </p>
      </div>
      <div className="teaser-right">
        <div className="card small-card">₹400 Gift card</div>
        <div className="card large-card">₹500 Gift card</div>
      </div>
      <button className="teaser-btn" onClick={handleClick}>
        Claim gift cards »
      </button>
    </div>
  );
}
