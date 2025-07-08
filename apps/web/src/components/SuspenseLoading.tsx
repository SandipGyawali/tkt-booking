function SuspenseLoader() {
  return (
    <div className="bg-[#fffde8] flex items-center justify-center h-screen">
      <span className="relative flex size-10">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
        <span className="relative inline-flex size-10 rounded-full bg-neutral-700"></span>
      </span>
    </div>
  );
}

export default SuspenseLoader;
