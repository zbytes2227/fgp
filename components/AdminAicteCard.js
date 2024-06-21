import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminAicteCard = () => {
  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch notices from the API
    setLoading(true);
    fetch("/api/getAicte")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Update the state with the notices from the API response
          setNotices(data.notices);
          setLoading(false)
        } else {
          console.error("Failed to fetch notices");
          setLoading(false)
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error("Error fetching notices:", error);
      });
      setLoading(false)
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  async function delNotice(id) {
    try {

      const fetch_api = await fetch("/api/delAicte/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          notice_id: id,
        }),
      });

      const data = await fetch_api.json();
      console.log(data);
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
  
        setTimeout(() => {
          window.location.reload();
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
    <div className="border bg-orange-200 border-3 pl-5 shadow-lg w-full rounded-xl lg:mr-1 lg:mb-1 mr-0 mb-1 p-3">
      <ToastContainer />
      <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit mb-2">
        Published Aicte Notices
      </h4>

      <div className="p-3" style={{ maxHeight: "250px", overflowY: "auto" }}>
        {notices.map((notice) => (
          <div
            className="bg-white font-semibold p-1 mb-2 rounded-md px-4 flex justify-between items-center"
            key={notice.key}
          >
            <a href={notice.link} target="_blank">
              {notice.title}
            </a>
            <button
              onClick={() => delNotice(notice._id)}
              className="bg-red-500 p-2 rounded-md hover:bg-red-600 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
        ))}
      </div>
   
      {/* <div className="border border-5 bg-red-300">
        {notices.map((notice) => (
          <div
            className="bg-white font-semibold p-1 mb-2 rounded-md px-4 flex justify-between items-center"
            key={notice.key}
          >
            <a href={notice.link} target="_blank">{notice.title}</a>
            <button onClick={()=>delNotice(notice._id)} className="bg-red-500 p-2 rounded-md hover:bg-red-600 hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AdminAicteCard;
