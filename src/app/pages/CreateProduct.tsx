"use client";
import React, { useState } from "react";
import { ComboboxDemo } from "../components/ui/ComboBox";
import QuantityButton from "../components/ui/QuantityButton";
import { DialogCloseButton } from "../components/ui/ModalCategory";

const CreateProduct = () => {
  const [darkMode, setDarkMode]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (size: any) => {
    setSelectedSize(size);
  };

  return (
    <div
      className={`px-10 py-8 max-w-[2000px]  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between   mb-2 px-7">
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <div className=" flex  justify-end space-x-4">
          <button
            className={`px-4 py-2 rounded-3xl border-[1px] border-zinc-400 ${
              darkMode ? "bg-gray-700" : ""
            }`}
          >
            Save Draft
          </button>
          <button className="bg-green-500 text-white rounded-3xl px-4 py-2 ">
            Add Product
          </button>
        </div>
      </div>

      {/* left side div */}
      <div className=" grid grid-cols-5 gap-6">
        <div className="space-y-4 col-span-3  p-7 bg-[#F9F9F9] rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800">General Information</h2>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name Product</label>
            {/*  <input
              type="text"
              className={`bg-[#f1eded]  w-full p-2 rounded ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
              defaultValue="Puffer Jacket With Pocket Detail"
            /> */}
            <input
              type="text"
              className={`bg-[#f1eded] w-full p-2 rounded-xl border ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } focus:border-green-500 focus:outline-none focus:border-[3px]`}
              defaultValue="Puffer Jacket With Pocket Detail"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">SKU</label>
            <input
              type="text"
              placeholder="for example: 123456"
              className={`bg-[#f1eded] w-full p-2 rounded ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Description Product</label>
            <textarea
              className={`bg-[#f1eded] text-zinc-900 w-full max-h-28  overflow-hidden p-4 rounded ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
              rows={4}
              defaultValue="Cropped puffer jacket made of technical fabric. High neck and long sleeves. Flap pocket at the chest and in-seam side pockets at the hip. Inside pocket detail. Hem with elastic interior. Zip-up front."
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Bar Code</label>
            <input
              type="text"
              placeholder="for example: 123456"
              className={`bg-[#f1eded] w-full p-2 rounded ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Size</label>
            {/* Sizes buttons */}
            {/* <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded ${
                    size === "S"
                      ? "bg-green-500 text-white"
                      : darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div> */}
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleClick(size)}
                  className={`px-4 py-2 rounded ${
                    size === selectedSize
                      ? "bg-green-500 text-white"
                      : darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-black"
                  } ${
                    size !== selectedSize &&
                    "hover:bg-green-500 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-1 font-bold">Gender</label>
            <div className="flex space-x-2">
              {["Men", "Women", "Unisex"].map((gender) => (
                <button
                  key={gender}
                  className={`px-3 py-1 rounded ${
                    gender === "Women"
                      ? "bg-green-500 text-white"
                      : darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Pricing And Stock</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Base Pricing</label>
                <input
                  type="text"
                  className={`w-full p-2 bg-[#EEEEEE]  rounded ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                  defaultValue="$41.00"
                />
              </div>
              <div>
                <label className="block mb-1">Stock</label>
                {/*  <input
                  type="number"
                  className={`w-full p-2 rounded bg-[#EEEEEE]  ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                  defaultValue="2"
                /> */}
                <QuantityButton />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Discount</label>
              <input
                type="text"
                className={`w-full p-2 rounded bg-[#EEEEEE]  ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                defaultValue="10%"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Discount Type</label>
              <ComboboxDemo category="Discount type" />
            </div>
          </div>
        </div>

        {/* right side div */}
        <div className="   space-y-4 col-span-2  rounded-2xl">
          {/* images div */}
          <div className="bg-[#F9F9F9] p-9">
            <h2 className="text-xl font-semibold">Upload Img</h2>
            <div
              className={`aspect-square w-80 mx-auto ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded-2xl flex items-center justify-center `}
            >
              <img
                className="max-w-full max-h-full object-contain rounded-2xl"
                src="https://goclove.com/cdn/shop/files/grey-matter-square_500x.jpg?v=1673384681"
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 ">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-square  ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  } rounded-2xl  flex items-center justify-center`}
                >
                  <img
                    className="max-w-full max-h-full object-contain rounded-2xl  "
                    src="https://goclove.com/cdn/shop/files/grey-matter-square_500x.jpg?v=1673384681"
                    alt=""
                  />{" "}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F9F9F9] p-8 flex flex-col">
            <label className="block mb-4 text-xl font-bold">Category</label>
            <label className="block text-lg mb-4  "> Product category</label>
            <ComboboxDemo category="category type" />
            <div className="my-2" />
            <DialogCloseButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
