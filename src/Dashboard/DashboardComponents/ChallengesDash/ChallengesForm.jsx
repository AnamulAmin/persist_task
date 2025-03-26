"use client";
import { useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

export default function ChallengesForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    deadline: "",
    description: "",
    image: null,
  });

  const axiosPublic = useAxiosPublic();

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("deadline", formData.deadline);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axiosPublic.post("challenge", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      alert(`File uploaded successfully: ${response}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter title"
          required
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* Price */}
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter price"
          required
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      {/* Deadline */}
      <div className="mb-6">
        <label
          htmlFor="deadline"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          required
          value={formData.deadline}
          onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Write a description..."
          required
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          required
          onChange={handleChange}
          name="image"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-white w-fit block ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Submit
      </button>
    </form>
  );
}
