"use client";

import "@/styles/paymentOffers.css";

export default function PaymentOffersList() {
  const offers = [
    {
      amountLabel: "10% OFF",
      brandName: "HDFC BANK",
      description: "Get 10% off on booking above ₹1500",
    },
    {
      amountLabel: "30% OFF",
      brandName: "SBI BANK",
      description: "Get 30% off on booking above ₹4500",
    },
  ];

  const handleUnlock = (brand) => alert(`Unlocked ${brand} offer!`);

  return (
    <div className="payment-offers-list">
      {offers.map((offer, idx) => (
        <div key={idx} className="payment-offer-card">
          <div className="offer-left-label">{offer.amountLabel}</div>
          <div className="offer-card-body">
            <div className="offer-card-header">
              <span className="brand-name">{offer.brandName}</span>
              <button
                className="collect-btn"
                onClick={() => handleUnlock(offer.brandName)}
              >
                Unlock
              </button>
            </div>
            <p className="offer-desc">{offer.description}</p>
            <hr className="offer-divider" />
            <button
          className="read-more"
          onClick={() => alert("Read more clicked")}
        >
          Read more
        </button>
          </div>
        </div>
      ))}
    </div>
  );
}
