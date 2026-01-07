export default function WhyChoose() {
  const reasons = [
    "Wide range of products",
    "Fast delivery",
    "Trusted brands",
    "Excellent customer support",
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Uptech?</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reasons.map((reason, i) => (
          <div key={i} className="bg-white shadow-lg p-6 rounded-lg w-60">
            {reason}
          </div>
        ))}
      </div>
    </section>
  );
}
