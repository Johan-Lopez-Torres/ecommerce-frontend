"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

interface Seat {
  row: string;
  number: number;
  status: "available" | "reserved" | "accessible" | "selected";
}

const CinemaSeatSelection: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const generateSeats = (): Seat[][] => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    return rows.map((row, rowIndex) => {
      const seatsInRow = rowIndex === rows.length - 1 ? 17 : 14;
      return Array.from({ length: seatsInRow }, (_, i) => ({
        row,
        number: i + 1,
        status:
          row === "D" &&
          i + 1 >= 2 &&
          i + 1 <= 10 &&
          i + 1 !== 5 &&
          i + 1 !== 7 &&
          i + 1 !== 8
            ? "accessible"
            : "available",
      }));
    });
  };

  const seats = generateSeats();

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "reserved") return;

    const updatedSeats = selectedSeats.some(
      (s) => s.row === seat.row && s.number === seat.number
    )
      ? selectedSeats.filter(
          (s) => !(s.row === seat.row && s.number === seat.number)
        )
      : [...selectedSeats, seat];

    setSelectedSeats(updatedSeats);
  };

  const getSeatColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "reserved":
        return "bg-gray-500";
      case "accessible":
        return "bg-blue-500";
      case "selected":
        return "bg-yellow-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-red-600 text-xl font-bold">CH TEST CINEMA</h1>
        <Menu className="text-yellow-500" />
      </header>

      <main className="p-4 flex-grow">
        <p className="text-gray-400 text-sm">Select seats</p>
        <h2 className="text-2xl font-bold mt-2">
          Hotel Transylvania 3: Summer Vacation
        </h2>
        <p className="text-yellow-500">
          Tuesday, Feb 25 @ 6:00 PM <span className="ml-2">✏️</span>
        </p>
        <p className="text-yellow-500">123 Test Avenue , Fort Wayne 46802</p>

        <div className="mt-8 relative">
          <div className="bg-gray-800 h-8 w-full text-center text-sm leading-8 mb-4">
            Screen 5
          </div>

          <div className="flex flex-col items-center">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center mb-2">
                <span className="w-6 text-center mr-2">{row[0].row}</span>
                <div className="flex justify-center flex-wrap gap-1">
                  {row.map((seat, seatIndex) => (
                    <button
                      key={`${seat.row}${seat.number}`}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md m-1 text-xs flex items-center justify-center
                        ${getSeatColor(
                          selectedSeats.some(
                            (s) =>
                              s.row === seat.row && s.number === seat.number
                          )
                            ? "selected"
                            : seat.status
                        )}`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0">
            <span className="text-2xl">🔍</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between text-sm">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 bg-yellow-500 rounded-sm mr-2"></span>
            Selected
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-sm mr-2"></span>
            Available
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 bg-gray-500 rounded-sm mr-2"></span>
            Reserved
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-sm mr-2"></span>
            Accessible
          </div>
        </div>

        <button className="w-full bg-yellow-500 text-black py-3 sm:py-4 rounded-md mt-8 font-bold text-sm sm:text-base">
          NEXT
        </button>
      </main>

      <footer className="w-full p-4 text-center text-xs text-gray-500 flex flex-wrap justify-center">
        <a href="#" className="mr-4 mb-2 sm:mb-0">
          Privacy policy
        </a>
        <a href="#" className="mr-4 mb-2 sm:mb-0">
          Terms of use
        </a>
        <a href="#">Purchase terms</a>
      </footer>
    </div>
  );
};

export default CinemaSeatSelection;
