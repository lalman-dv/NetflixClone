import { useEffect, useState } from "react";
import back_arrow from "/src/assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
export const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkyNGEzYTE5YWI4ZTczODQ3NGVjMDZhMmVmMjMwNiIsIm5iZiI6MTc2MjI0MDgzMy4zNDcwMDAxLCJzdWIiOiI2OTA5YTk0MTk5MTgzZmJhMDlmNWZkYTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NFpgtVFY899crxX-N_fyN_OPAkrPIZucwMLZ1l9yIic",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        onClick={() => {
          navigate(-2);
        }}
        src={back_arrow}
        className="absolute top-5 left-5 w-13 cursor-pointer"
      />
      <iframe
        className="rounded"
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};
