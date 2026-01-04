"use client";

import "@/styles/offerSection.css";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import CouponList from "./CouponList";
import GiftcardsTeaser from "./GiftcardsTeaser";        
import PaymentOffersTeaser from "./PaymentOffersTeaser"; 
import GiftCardList from "@/components/GiftCardList";
import PaymentOffersList from "@/components/PaymentOffersList";



export default function OfferSection() {
  const { signedIn, setSignedIn } = useAuth();
  const [activeTab, setActiveTab] = useState("giftcards");

  const tabs = [
    { id: "coupons", label: "Coupons" },
    { id: "giftcards", label: "Giftcards" },
    { id: "payments", label: "Payment Offers" },
  ];

  const goTo = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }; 

  return (
    <section className="offer-section">
      <div className="offer-header">
        <h2 className="offer-title">Offers</h2>

        {!signedIn ? (
          <>
            <p className="offer-subtitle">Sign in to unlock exclusive additional rewards</p>
            <button className="sign-in-btn" onClick={() => { setSignedIn(true); alert("You're signed in"); }}>Sign in</button>
          </>
        ) : (
          <p className="offer-subtitle">Welcome back! Your rewards are unlocked </p>
        )}

        <div className="offer-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-item ${activeTab === t.id ? "active" : ""}`}
              onClick={() => goTo(t.id)}
              aria-current={activeTab === t.id ? "true" : undefined}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical scrollable sections */}
      <div className="sections">
        <div id="coupons" className="section">
           <h3 className="tab-heading">Sitewide coupons:</h3>
          <CouponList />
        </div>

        <div id="giftcards" className="section">
          <h3 className="tab-heading">Bonus gift cards:</h3>
          {!signedIn ? <GiftcardsTeaser /> : <GiftCardList />}
        </div>

        <div id="payments" className="section">
          <h3 className="tab-heading">Payment offers:</h3>
          {!signedIn ? <PaymentOffersTeaser /> : <PaymentOffersList />}
        </div>
      </div>
    </section>
  );
}


