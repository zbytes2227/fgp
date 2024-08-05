import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminNoticeForm = () => {
  const [isLinkVisible, setLinkVisible] = useState(false);

  const handleCheckboxChange = () => {
    setLinkVisible(!isLinkVisible);
  };
  const router = useRouter();
  const [Title, setTitle] = useState("");
  const [Link, setLink] = useState("");
  const [Loading, setLoading] = useState(false);

  async function saveNotice(e) {
    console.log(Title);
    e.preventDefault();
    try {
      setLoading(true);
      const fetch_api = await fetch("/api/addNotice/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: Title,
          link: Link,
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
        setTitle("");
        setLink("");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        setLoading(false);
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
      setLoading(false);
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


  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };




  const uploadReport = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`/api/handle_report`, {
        method: "POST",
        body: formData,
      });

      const resp = await response.json();
      setLoading(false);
      console.log(resp);


      if (resp.success) {
        setLink(resp.url)
      }
    } catch (error) {
      setLoading(false);
      console.error("Error uploading file:", error);
    }
  };



  return (
    <div className="max-w-md mx-auto border p-3 rounded-md bg-white shadow-md h-full">
      <ToastContainer />
      <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit mb-2">
        Add New Notice
      </h4>
      <div className="mb-5">
        <label
          for="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          placeholder="Today is Holiday"
          required
        />
      </div>
      {isLinkVisible && (
        <div className="mb-5">
          <label
            for="link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Link
          </label>
          <input
            type="text"
            id="link"
            value={Link}
            onChange={(e) => setLink(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
            required
            placeholder="Enter the Link or Upload File"
          />
          <div className="my-2">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
              Upload Report
            </label>
            <input
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <p className="mt-1 text-sm text-gray-800" id="file_input_help">
              Upload .pdf File.
            </p>
            <button
              className="text-white bg-red-600 hover:bg-red-800 mt-1.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md w-md sm:w-auto px-3 py-1.5 text-center mb-5"
              onClick={uploadReport}
              disabled={Loading}
            >
              {Loading ? "Please Wait..." : "Upload"}
            </button>
          </div>
        </div>

      )}
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            onChange={handleCheckboxChange}
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          for="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Add Link
        </label>
      </div>

      <button
        onClick={(e) => saveNotice(e)}
        disabled={Loading}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        {Loading ? (
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          ""
        )}
        {Loading ? "Saving" : "Save"}
      </button>
    </div>
  );
};

export default AdminNoticeForm;
