"use client";

import "@/styles/couponCard.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


export default function CouponCard({ title, description, discount }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    alert("Coupon code copied!");
  };

  return (
    <div className="coupon-card">
      {/* Left vertical discount */}
      <div className="coupon-discount-strip">
        {discount}
      </div>

      {/* Main content */}
      <div className="coupon-body">
        <div className="coupon-header">
          <h3 className="coupon-title">{title}</h3>

          <button className="copy-btn" onClick={handleCopy}>
  <ContentCopyIcon style={{ fontSize: 16 }} />
  <span>Copy</span>
</button>

        </div>

        <p className="coupon-desc">{description}</p>

        <hr className="coupon-divider" />

        <button
          className="read-more-btn"
          onClick={() => alert("Read more clicked")}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
