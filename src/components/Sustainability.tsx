
const sustainabilityStats = [
  {
    number: "500+",
    label: "Trees Planted",
    description: "Native species restoration across Konkan forests"
  },
  {
    number: "50+",
    label: "Local Families",
    description: "Empowered through sustainable tourism employment"
  },
  {
    number: "95%",
    label: "Waste Diverted",
    description: "From landfills through our zero-waste programs"
  },
  {
    number: "12",
    label: "Conservation Projects",
    description: "Actively supported across Maharashtra"
  }
];

const commitments = [
  {
    title: "Carbon Neutral Travel",
    description: "All our tours are carbon-neutral through verified offset programs and renewable energy partnerships."
  },
  {
    title: "Community First",
    description: "75% of tour profits directly benefit local communities through fair wages and development projects."
  },
  {
    title: "Wildlife Protection",
    description: "Active partnerships with conservation organizations to protect endangered species and habitats."
  },
  {
    title: "Cultural Preservation",
    description: "Supporting traditional arts, crafts, and knowledge systems of indigenous communities."
  }
];

const Sustainability = () => {
  return (
    <section className="py-20 bg-forest-500 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Commitment to
            <span className="block text-sunset-500">Sustainable Tourism</span>
          </h2>
          <p className="text-xl text-cream-500/90 max-w-3xl mx-auto leading-relaxed">
            Every journey with Konkanai creates positive impact for the environment, wildlife, and local communities of Maharashtra
          </p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {sustainabilityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-sunset-500 block">
                  {stat.number}
                </span>
                <span className="text-xl font-semibold text-cream-500">
                  {stat.label}
                </span>
              </div>
              <p className="text-cream-500/80 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Commitment Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-ocean-500/20 backdrop-blur-sm p-8 rounded-2xl border border-cream-500/20 hover:bg-ocean-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-sunset-500 mb-4">
                {commitment.title}
              </h3>
              <p className="text-cream-500/90 leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Certification Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-cream-500 mb-8">Certified & Recognized By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-cream-500/10 px-6 py-3 rounded-full border border-cream-500/30">
              <span className="text-cream-500 font-semibold">Maharashtra Tourism</span>
            </div>
            <div className="bg-cream-500/10 px-6 py-3 rounded-full border border-cream-500/30">
              <span className="text-cream-500 font-semibold">Responsible Tourism Society</span>
            </div>
            <div className="bg-cream-500/10 px-6 py-3 rounded-full border border-cream-500/30">
              <span className="text-cream-500 font-semibold">Wildlife Conservation Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
