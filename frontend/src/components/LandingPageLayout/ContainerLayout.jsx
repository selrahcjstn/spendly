function ContainerLayout({ children, color }) {
  return (
    <div className="flex justify-center">
      <div
        className="max-w-7xl bg-white w-full space-y-6 px-26 py-15 rounded-xl"
        style={{ backgroundColor: color }}
      >
        {children}
      </div>
    </div>
  );
}

export default ContainerLayout;
