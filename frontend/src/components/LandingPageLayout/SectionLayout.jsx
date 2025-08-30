function SectinLayout({ children, color }) {
  return (
    <section className="" style={{ backgroundColor: color }}>
      <div
        className={`max-w-7xl text-[#3D6957] py-30 flex gap-10 justify-center items-center flex-col mx-auto`}
      >
        {children}
      </div>
    </section>
  );
}

export default SectinLayout;
