import { Sparkles, Leaf, ShieldCheck, Users, Target, Handshake } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation for Impact',
      description: 'We continuously seek innovative solutions that optimize processes and contribute to a sustainable, low-carbon future.',
    },
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Our commitment to decarbonization drives every decision, as we strive to reduce environmental impact and build a cleaner, more sustainable world.',
    },
    {
      icon: ShieldCheck,
      title: 'Pride in Craftsmanship',
      description: 'We believe in creating solutions our team can be proud of, fostering a deep connection to our work and its positive impact.',
    },
    {
      icon: Users,
      title: 'Partnership & Collaboration',
      description: 'Our employees are partners in our mission. Together, we build a culture of trust, collaboration, and shared goals.',
    },
    {
      icon: Target,
      title: 'Customer-Centric Excellence',
      description: 'We work hand-in-hand with our customers, understanding their needs and delivering value that exceeds expectations.',
    },
    {
      icon: Handshake,
      title: 'Integrity & Responsibility',
      description: 'We uphold transparency, accountability, and integrity in all our actions—internally and externally.',
    },
  ];

  return (
    <>
      {/* HERO SECTION FOR CORE VALUES */}
      <section className="bg-gradient-to-br from-green-700 via-green-800 to-blue-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core Values
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            The principles that guide our mission to create lasting positive impact
          </p>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-green-100 text-green-700 mb-6 group-hover:scale-110 transition">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}