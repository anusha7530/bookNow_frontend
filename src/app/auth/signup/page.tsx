"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    setErrors({});

    const validationErrors: Record<string, string> = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[900px] min-h-[400px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mt-12">
        <div className="hidden md:w-2/5 bg-black md:flex justify-center items-center">
          <Image src={logo} alt="" className="w-72 h-96 object-contain" />
        </div>

        <div className="md:w-3/5 p-6">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border-b border-[#b92d14e8] focus:outline-none focus:border-[#29170fe8]"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-medium text-gray-700">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border-b border-[#b92d14e8] focus:outline-none focus:border-[#29170fe8]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border-b border-[#b92d14e8] focus:outline-none focus:border-[#29170fe8]"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-lg font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border-b border-[#b92d14e8] focus:outline-none focus:border-[#29170fe8]"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#b92d14e8] text-white font-semibold py-2 px-6 rounded-md self-center hover:bg-[#573a2de8] transition"
            >
              Register
            </button>

            <p className="mt-4 text-center text-gray-700">
              Already have an account?
              <Link
                href="/auth/signin"
                className="text-[#b92d14e8] font-medium"
              >
                {" "}
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
