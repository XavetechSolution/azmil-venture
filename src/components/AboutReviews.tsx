"use client";

export default function AboutReviews() {
  return (
    <section className="w-full py-10 px-6 md:px-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-[500] text-zinc-900 tracking-tight leading-tight">
          Reviews
        </h2>
        <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
          See What people say about us
        </p>

        {/* REVIEWS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
          <div
            data-scroll-reveal
            animate-on-scroll={"true"}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  saintnicholas
                </p>
                <p className="text-xs text-zinc-500">12 months ago</p>
              </div>
            </div>

            <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Amazing product and amazing customer service.
            </p>
          </div>

          <div
            data-scroll-reveal
            animate-on-scroll={"true"}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  Olajumoke Alabi
                </p>
                <p className="text-xs text-zinc-500">12 months ago</p>
              </div>
            </div>

            <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Tested and trusted 💯
            </p>
          </div>

          <div
            data-scroll-reveal
            animate-on-scroll={"true"}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-200" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  Abedayo Alejec
                </p>
                <p className="text-xs text-zinc-500">12 months ago</p>
              </div>
            </div>

            <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>

            <p className="mt-4 text-zinc-600 leading-relaxed">I love it</p>
          </div>
        </div>
      </div>
    </section>
  );
}
