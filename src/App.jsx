import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
const App = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1514941914047-6da56d12dc22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      song: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1533158165527-63796a27c752?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      song: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1498596970060-8d11115e3e71?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      song: "Smells Like Teen Spirit",
      artist: "Nirvana",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1637473418907-3cf7a906fc34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      song: "Someone Like You",
      artist: "Adele",
      added: false,
    },
  ];
  const [val, setVal] = useState(data);

  const handleClick = (k) => {
    setVal((prev) => {
      return prev.map((item, inn) => {
        if (inn === k) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-800 px-20">
        <Navbar ct={val} />
        <div className="flex gap-5 flex-wrap mt-10">
          {val.map((item, index) => (
            <Card
              key={index}
              values={item}
              handleClick={handleClick}
              k={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
