const Topbar = () => {
  return (
    <div className="h-16 w-full pl-8 bg-white shadow-md flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-xl text-grey">
          <img src="./layout-dashboard.svg" alt="" />
        </span>
        <h1 className="open-sans-bold text-lg text-primary">Dashboard</h1>
      </div>
      <div className="flex items-center gap-8 pr-12">
        <span>
          <img src="./bell.svg" alt="" className="w-4" />
        </span>
        <div className="flex items-center gap-2">
          <span>
            <img src="./profile-photo.png" alt="" className="w-10" />
          </span>
          <span>Tlag Entertainment</span>
          <span>
            <img src="./arrow-down.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
