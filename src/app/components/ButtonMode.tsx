"use client"
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const ButtonMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
      <Moon className="h-4 w-4" />
    </div>
  );
};

export default ButtonMode;
