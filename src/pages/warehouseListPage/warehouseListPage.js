import "./warehouseListPage.scss";


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080";


function warehouseListPage() {
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true);

  //randomKey is used to help set the default video when the brainFlix logo in the Header is clicked
  const [randomKey, setRandomKey] = useState(null);

  useEffect(() => {
    axios.get(API_URL + "/videos").then((response) => {
      setVideosList(response.data);
      const firstVideoId = response.data[0].id;
      axios
        .get(API_URL + "/videos/" + firstVideoId)
        .then((res) => {
          setSelectedVideo(res.data[0]);
          setLoading(false);
        });
    });
  }, [randomKey]);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  const { videoLinkId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (videoLinkId) {
      axios
        .get(API_URL + "/videos/" + videoLinkId)
        .then((response) => {
          if (response.data[0] !== undefined) {
            setSelectedVideo(response.data[0]);
          } else {
            navigate("/video/notfound/error");
          }
        })
        .catch((err) => {
          console.error(err);
          navigate("/video/notfound/error");
        });
    }
  }, [videoLinkId, navigate]);

  return (
    <>
      <Header setRandomKey={setRandomKey} />
      <div className="App">
        {!loading && selectedVideo ? (
          <main className="main">
            <VideoPlayer selectedVideo={selectedVideo} />
            <section className="main-section">
              <div className="left-section">
                <VideoDetails selectedVideo={selectedVideo} />
              </div>
              <NextVideos
                videosList={modifiedVideoList}
                setSelectedVideo={setSelectedVideo}
              />
            </section>
          </main>
        ) : null}
      </div>
    </>
  );
}

export default Home;
