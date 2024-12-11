import React from "react";

const Header = () => {
  return (
    <header className="bg-[#F8F6F0] p-1 flex items-center">
      <img
        src="./Silver_Globe_Electric.PNG"
        alt="Logo"
        className="w-[140px] h-[140px] ml-3" // Adjust size as needed
      />
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <img
        src="./construction.png"
        alt="Main Image"
        className="w-1/2 h-auto -mt-40" // Adjust size as needed
      />
    </main>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;