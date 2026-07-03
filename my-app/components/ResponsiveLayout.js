

const ResponsiveLayout = () => {
  return (
    <>
    <div className="hidden md:flex">
    <div className="border border-gray-500 p-2 bg-neutral-800">
        

      {/* Desktop View */}
      <div className="hidden md:flex gap-2">

        {/* Sidebar */}
        <aside className="w-36 bg-green-800 text-white flex items-center justify-center text-2xl font-semibold">
          Sidebar
        </aside>

        {/* Right Content */}
        <div className="flex flex-col gap-2">

          {/* Header */}
          <header className="bg-green-800 h-12 flex items-center justify-center text-white text-xl">
            Header
          </header>

          {/* Blue Boxes */}
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-blue-900 h-16"
              ></div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex gap">

            {/* Brown Box */}
            <div className="border-8 border-white not-only:bg-amber-900 w-[430px] h-64"></div>

            {/* Green Boxes */}
            <div className="flex flex-col gap">
              <div className="bg-green-800 border-8 border-white w-20 h-33"></div>
              <div className="bg-green-800 border-8 border-white w-20 flex-1"></div>
            </div>
            

          </div>

        </div>

      </div>

      {/* Mobile View */}
      <div className="md:hidden w-52 flex flex-col gap-2">

        {/* Header */}
        <header className="p-2bg-green-800 text-white text-center py-1">
          Header
        </header>

        {/* Blue Boxes */}
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-blue-900 h-14"
            ></div>
          ))}
        </div>

        {/* Brown Box */}
        <div className="bg-amber-900 h-40"></div>

        {/* Bottom Green Boxes */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-800 h-8"></div>
          <div className="bg-green-800 h-8"></div>
        </div>

      </div>

    </div>
    </div>
      <div className="flex flex-col md:hidden">
        <div className="flex flex-col gap-2 md:hidden w-60 border-1 p-2">

  {/* Header */}
  <div className="bg-green-800   text-white text-center py-2">
    Header
  </div>

  {/* Blue Boxes */}
  <div className="grid grid-cols-2 gap-2">
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="bg-blue-900  h-16"
      ></div>
    ))}
  </div>

  {/* Brown Box */}
    <div className="">
  <div className="border border-5 bg-amber-900  border-white h-44"></div>

  {/* Green Boxes */}
  <div className="grid grid-cols-2 gap">
    <div className="bg-green-800 border border-5 border-white h-12"></div>
    <div className="bg-green-800 border border-5 border-white h-12"></div>
  </div>
  </div>

</div>

      </div>
      </>
  );
};

export default ResponsiveLayout;