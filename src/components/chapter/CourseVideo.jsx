import { useState, useRef, useEffect, Children } from "react";
import videos from "../../bluePrint/courseVideoPrint";
import NextChapterChip from "./nextChapterChip";
import Modal from "./modal";
import VideoPlayer from "./videoPlayer";

const CourseVideo = ({ closeModal, chapters, courseName }) => {
  const [nextVideos, setNextVideos] = useState(videos);
  const [current, setCurrent] = useState({
    vidPoster:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700",
    title:"Wellcome, Tap the chapters to begin"
  });
  console.log('chapters',chapters);
  return (
    <>
      <Modal close={closeModal} title={courseName}>
        <div className="w-full flex flex-wrap p-1 py-2">
          <div className="w-full md:w-8/12">
            <VideoPlayer
              vidSrc={current.src}
              title={current.title}
              vidPoster={current.vidPoster}
              // status={current.status}
              // comchapterspletion={current.completion}
              // videoLength={current.videoLength}
            />
          </div>
          <div className="overflow-auto h-[40vh] pb-[8rem] w-full md:h-[98vh] md:px-3 md:w-4/12">
            {Children.toArray(
              chapters?.map((vid) => {
                return (
                  <NextChapterChip
                    setter={setCurrent}
                    src={vid.video}
                    title={vid.name}
                    description={vid.about}
                    assignment={vid.project}
                  />
                );
              })
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CourseVideo;
