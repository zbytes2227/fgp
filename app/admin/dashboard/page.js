"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminNoticesCard from "@/components/AdminNoticeCard";
import AdminNoticeForm from "@/components/AdminNoticeForm";
import Navbar from "@/components/Navbar";
import AdminAicteForm from "@/components/AdminAicteForm";
import AdminAicteCard from "@/components/AdminAicteCard";
import AdminTpcForm from "@/components/AdminTpcForm";
import AdminTpcCard from "@/components/AdminTpcCard";

const Dashboard = () => {
  const router = useRouter();
  const ref = useRef();

  const searchParams = useSearchParams();
  const redirected = searchParams.get("account");

  const [ValidUser, setValidUser] = useState(false);
  const [User, setUser] = useState("");
  const [accountEdit, setaccountEdit] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [cityState, setCityState] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [Orders, setOrders] = useState([]);

  const [Loading, setLoading] = useState(false);

  async function auth() {
    const fetch_api = await fetch("/api/auth/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await fetch_api.json();
    if (data.success) {
      setValidUser(true);
      setUser(data);
    } else {
      router.push("/admin/login");
      setValidUser(false);
    }
  }

  const handleLogout = async () => {
    try {
      const fetch_api = await fetch("/api/logout/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await fetch_api.json();
      if (data.success) {
        setTimeout(() => {
          router.push("/admin/login");
        }, 500);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth();
    console.log(redirected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {ValidUser ? (
        <section>
          <div className="mx-auto container">
            <div className="flex justify-between p-2 items-center">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>{" "}
                <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit mb-2">
                  Logged in as Admin.
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleLogout()}
                className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-3 py-2 me-2 mb-2"
              >
                Logout
              </button>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center">
            College Notice Administration
          </h2>
          <div className="mx-auto container py-8 mb-6" id="div1">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 p-1" id="divA">
                <AdminNoticeForm />
              </div>
              <div className="w-full sm:w-1/2 p-1" id="divB">
                <AdminNoticesCard />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center">
          Aicte Notice Administration
          </h2>
          <div className="mx-auto container py-8" id="div1">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 p-1" id="divA">
                <AdminAicteForm />
              </div>
              <div className="w-full sm:w-1/2 p-1" id="divB">
                <AdminAicteCard />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center">
          Placement Record Administration
          </h2>
          <div className="mx-auto container py-8" id="div1">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 p-1" id="divA">
                <AdminTpcForm />
              </div>
              <div className="w-full sm:w-1/2 p-1" id="divB">
                <AdminTpcCard />
              </div>
            </div>
          </div>
          <ToastContainer />{" "}
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
