import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ogba Residence",
    img: "/portfolio/ogbaresidence1.jpg",
    subtitle: "5kW Off-Grid System",
    desc: "Powers entire home including AC. Zero outages since 2023.",
  },
  {
    id: 2,
    title: "Ikeja Corporate",
    img: "/portfolio/ikejaimg-1.jpg",
    subtitle: "12kW Hybrid System",
    desc: "Backup for 50 staff office. NEPA-independent.",
  },
  {
    id: 3,
    title: "Lekki Luxury Villa",
    img: "/portfolio/lekkivilla-2.jpg",
    subtitle: "8kW Premium System",
    desc: "Pool, gym & home cinema powered 24/7.",
  },
  {
    id: 4,
    title: "Lekki Luxury Villa",
    img: "/portfolio/lekkivilla-2.jpg",
    subtitle: "8kW Premium System",
    desc: "Pool, gym & home cinema powered 24/7.",
  },
  {
    id: 5,
    title: "Ikeja Corporate",
    img: "/portfolio/ikejaimg-1.jpg",
    subtitle: "12kW Hybrid System",
    desc: "Backup for 50 staff office. NEPA-independent.",
  },
  {
    id: 6,
    title: "Ogba Residence",
    img: "/portfolio/ogbaresidence1.jpg",
    subtitle: "5kW Off-Grid System",
    desc: "Powers entire home including AC. Zero outages since 2023.",
  },
];

export default function HomePortfolioSection() {
  return (
    <section className="py-20 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Projects
          </h2>
          <p className="text-xl text-gray-600">
            Trusted installations across Lagos & Nigeria
          </p>
        </header>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-green-600 font-semibold">
                  {project.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
