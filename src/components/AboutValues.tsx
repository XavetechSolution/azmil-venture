import values from "../constants/values";

export default function AboutValues() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-[500] text-zinc-900 tracking-tight leading-tight">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
            These principles guide everything we do — from how we build systems
            to how we serve our customers and support our team.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
