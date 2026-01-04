import CouponCard from "./CouponCard";

export default function CouponList() {
  const coupons = [
    {
      title: "LONGSTAY",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      discount: "₹1,500",
    },
    {
      title: "EARLYBIRD",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      discount: "₹3,000",
    },
    {
      title: "RUSHDEAL",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
      discount: "Flat 10%",
    },
  ];

  return (
    <>
      {coupons.map((coupon, index) => (
        <CouponCard key={index} {...coupon} />
      ))}
    </>
  );
}
