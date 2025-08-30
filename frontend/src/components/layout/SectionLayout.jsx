function SectinLayout({ children, color }) {
  return (
    <section className=" bg-amber-300" style={{ backgroundColor: color }}>
      <div
        className={`max-w-7xl py-30 flex gap-10 mb-30 justify-center items-center flex-col mx-auto`}
      >
        {children}
      </div>
    </section>
  );
}

export default SectinLayout;
