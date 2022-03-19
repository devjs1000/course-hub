import { useState, useRef, useEffect, Children } from "react";
import videos from "../../../service/bluePrint/bpCourseVideoPrint";
import NextChapterChip from "./nextChapterChip";
import Modal from "./modal";
import VideoPlayer from "./videoPlayer";

const CourseVideo = ({ closeModal }) => {
  const [nextVideos, setNextVideos] = useState(videos);
  const [current, setCurrent] = useState({
    title: "Lesson 1",
    videoLength: 11.3,
    status: false,
    completion: "0%",
    src: "",
  });
  return (
    <>
      <Modal close={closeModal} title={"watching course"}>
        <div>
          <VideoPlayer
            vidSrc={current.src}
            title={current.title}
            status={current.status}
            completion={current.completion}
            videoLength={current.videoLength}
          />
        </div>
        <div className="overflow-auto h-[40vh] pb-[8rem]">
          {Children.toArray(
            nextVideos?.map((vid) => {
              return (
                <NextChapterChip
                  setter={setCurrent}
                  status={vid.status}
                  completion={vid.completion}
                  src={vid.src}
                  title={vid.title}
                  videoLength={vid.videoLength}
                />
              );
            })
          )}
        </div>
      </Modal>
    </>
  );
};

export default CourseVideo;
