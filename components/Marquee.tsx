"use client";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-2">
      <div className="marquee">
        <span>Buy premium products with 20% off with code T10</span>
        <span>Buy premium products with 20% off with code T10</span>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: full;
          animation: marquee 15s linear infinite;
        }

        .marquee span {
          padding-right: 3rem;
          white-space: nowrap;
          font-weight: 600;
        }

        @keyframes marquee {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
