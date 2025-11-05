import back_arrow from "/src/assets/back_arrow_icon.png";
export const Player = () => {
  return (
    <div>
      <img src={back_arrow} />
      <iframe
        width="90%"
        height="90%"
        src=""
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div>
        <p>Published date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};
