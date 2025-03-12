const HomePage = () => {
  return (
    <div className="container font-bold text-neutral-500">
      {["one", "two", "three"].map((num, index) => (
        <div key={index} className="text-xl">
          {num}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
