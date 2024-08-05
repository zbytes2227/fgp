import React, { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

const MarqueeNews = () => {
  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/getNotice")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          setNotices(data.notices);
        } else {
          console.error("Failed to fetch notices");
        }
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="bg-black text-white flex" >
      <div className="bg-orange-600 flex px-3 text-lg w-36 block font-extrabold text-white items-center" id="temp">Latest News</div>
      <Marquee pauseOnHover="True" speed={60} className="py-2.5">
        {notices.slice(0, 5).map((notice) => (
          <a
            href={notice.link || "/notices"}
            className="px-5 py-1 hover:cursor-pointer font-bold"
            key={notice.key}
          >
            {" "}
            <span className="bg-red-100 text-red-800 text-xs font-bold me-2 px-1 rounded dark:bg-red-900 dark:text-red-300">
              NEW
            </span>
            {notice.title}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
