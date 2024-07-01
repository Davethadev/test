const Header = () => {
  return (
    <>
      <p className="open-sans-normal text-2xl">
        Welcome back,{" "}
        <span className="text-4xl open-sans-bold text-primary">
          Tlag Entertainment{" "}
          <span className="inline-block">
            <img src="../wave.png" alt="" />
          </span>
        </span>
      </p>
      <p className="pt-3 pb-8 open-sans-normal">
        Here’s how your business is performing
      </p>
    </>
  );
};

export default Header;
