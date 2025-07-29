const Sidebar = () => {
  return (
    <div className="w-16 fixed h-screen border border-[#242424] p-4 flex flex-col items-center space-y-8">
      <div className="text-white">LOGO</div>
      <div className="text-gray-400 cursor-pointer">📁</div>
      <div className="text-gray-400 cursor-pointer">👤</div>
      <div className="text-gray-400 cursor-pointer">⚙</div>
    </div>
  );
};

export default Sidebar;
