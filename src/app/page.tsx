"use client";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [isUser, setIsUser] = useState(false);

  const checkLogin = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          setIsUser(true);
        } else {
          setIsUser(false);
          window.location.href = "/auth/signin"
        }
      })
      .catch((error) => {
        setIsUser(false);
        window.location.href = "/auth/signin"
      })
  };

  useEffect(() => {
    checkLogin();
  }, [])
  return (
    <>
    {isUser && 
      <main className="">
      <HomeSlider />
      <div className="m-10">
        <p className="text-4xl font-bold m-4">Featured Movies</p>
        <MovieCarousel />
      </div>
    </main>
    }
    </>
  );
}
