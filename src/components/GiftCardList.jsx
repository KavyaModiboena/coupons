import GiftCard from "./GiftCard";

export default function GiftCardList() {
  const giftCards = [
    {
      amountLabel: "₹1500",
      brandName: "MYNTRA",
      description: "Get this gift voucher on booking above ₹2000",
    },
    {
      amountLabel: "₹1000",
      brandName: "HAMMER",
      description: "Get this gift voucher on booking above ₹1500",
    },
  ];

  return (
    <div className="giftcards-list">
      {giftCards.map((card, index) => (
        <GiftCard key={index} {...card} />
      ))}
    </div>
  );
}
