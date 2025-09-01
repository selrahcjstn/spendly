const info = [
  {
    developed: "2025",
    totalVisit: "20K",
    userHelped: "5K",
  },
];

function WebInfoCard() {
  return (
    <div className="flex justify-around gap-80 w-full">
      {Object.entries(info[0]).map(([key, value]) => (
        <div key={key} className="flex leading-tight flex-col items-center">
          <span className="text-[60px] font-semibold">{value}</span>
          <span className="text-medium capitalize">{key}</span>
        </div>
      ))}
    </div>
  );
}

export default WebInfoCard;
