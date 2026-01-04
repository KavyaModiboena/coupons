"use client";

import "@/styles/giftCard.css";

export default function GiftCard({ amountLabel, brandName, description }) {
  const handleCollect = () => alert(`Collected ${brandName} gift card!`);

  return (
    <div className="gift-card">
      <div className="gift-left-label">{amountLabel}</div>
      <div className="gift-card-body">
        <div className="gift-card-header">
          <span className="brand-name">{brandName}</span>
          <button className="collect-btn" onClick={handleCollect}>
            Collect
          </button>
        </div>
        <p className="gift-card-desc">{description}</p>
        <hr className="gift-divider" />
        <button
          className="read-more"
          onClick={() => alert("Read more clicked")}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
