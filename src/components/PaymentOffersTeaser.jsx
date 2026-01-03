"use client";

import "@/styles/paymentTeaser.css";

export default function PaymentOffersTeaser() {
  const handleClick = () => alert("Unlock offers clicked");

  return (
    <div className="teaser-card payment-teaser">
      <div className="teaser-left">
        <p className="teaser-title">Payment offers:</p>
        <p className="teaser-text">
          Save more on your bookings<br />
          <strong>upto 15% Off</strong> on select payment methods
        </p>
      </div>
      {/* <div className="teaser-right">
        <img src="/images/payment-qr.png" alt="Payment QR" />
      </div> */}
      <button className="teaser-btn" onClick={handleClick}>
        Unlock offers »
      </button>
    </div>
  );
}
