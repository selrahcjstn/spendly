function BoxCardLayout({ icon: Icon, title, desc }) {
  return (
    <div className="space-y-4 max-w-85 flex items-center flex-col  text-center">
      <Icon className="text-5xl" />
      <h3 className="light-h3 font-medium">{title}</h3>
      <p className="light-p-subtitle">{desc}</p>
    </div>
  );
}

export default BoxCardLayout;
