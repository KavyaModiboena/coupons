"use client";

import "@/styles/giftcardsTeaser.css";

export default function PaymentOffersTeaser() {
  const handleClick = () => alert("Unlock offers clicked");

  return (
    <div className="teaser-card payment-teaser">
      <div className="teaser-left">
        <p className="teaser-text">
          Save more on your bookings<br />
          <strong>upto 35% Off</strong> on select payment methods
        </p>
      </div>
      <button className="teaser-btn" onClick={handleClick}>
        Unlock offers »
      </button>
    </div>
  );
}
