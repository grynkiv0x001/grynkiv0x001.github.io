export const Education = () => (
  <section className="border-t border-slate-900 dark:border-slate-100 pt-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Education</h3>
      </div>
      
      <div className="md:col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div>
            <strong className="text-base md:text-lg font-semibold block mb-2">
              Bachelor's Degree in Software Engineering
            </strong>
            <p className="text-sm md:text-base mb-1">Vinnytsia National Technical University, Ukraine</p>
            <p className="text-sm md:text-base italic">Sep 2019 – Jun 2023</p>
          </div>

          <div>
            <p className="text-sm md:text-base leading-relaxed">
              <strong className="font-semibold">In the college I've been</strong><br />
              Studying low-level engineering, modeling circuit boards, working with C/C++ & Rust.
              Learning algorithms & data structures; solving coding tasks; learning databases; learning & working with Java, PHP, and Flutter; learning CS and low-level programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
