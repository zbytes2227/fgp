"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [Loading, setLoading] = useState(false);

  async function auth() {
    const fetch_api = await fetch("/api/auth/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await fetch_api.json();
    if (data.success) {
      router.push("/admin/dashboard");
    }
  }

  useEffect(() => {
    auth();
  }, []);

  async function loginUser(e) {
    try {
      setLoading(true);
      e.preventDefault();
      const fetch_api = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await fetch_api.json();
      if (data.success) {
        toast.success(`${data.msg}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
        setPassword("");
        setLoading(false);
        setTimeout(() => {
          router.push(redirect ? redirect : "/admin/dashboard");
        }, 300);
      } else {
        toast.error(`${data.msg}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(`You are offline`, {
        position: "top-center",
        autoClose: 3300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <section className="h-[100vh] dark:bg-white">
        <ToastContainer />
        <div className="flex flex-col sm:pt-6 items-center mt-5 justify-cnter px-6 mx-auto md:h-screen lg:py-0">
          {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-blue-200">
            <img className="w-16 h-16 mr-2 rounded-full" src="/192.png" alt="logo" />
            Task Mate
          </a> */}
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight   md:text-2xl ">
                FGP : Admin Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={loginUser}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium   "
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 outline-0  sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium   "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 outline-0  sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    required=""
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm font-semibold uppercase text-white px-5 py-2.5 text-center ${
                    Loading && "bg-indigo-200"
                  } `}
                >
                  Sign in{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default Login;
