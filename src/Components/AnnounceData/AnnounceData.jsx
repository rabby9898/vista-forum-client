import { TfiAnnouncement } from "react-icons/tfi";
import useAnnounce from "../../Hook/useAnnounce/useAnnounce";
import Announcement from "../Announcement/Announcement";

const AnnounceData = () => {
  const [announcement] = useAnnounce();

  return (
    <div className="px-5 md:px-8 lg:px-32 py-5 md:py-10">
      {announcement.length > 0 && (
        <>
          <div className="flex justify-center mx-auto">
            <h1 className="text-5xl font-light text-purple-600 py-10">
              <span className="flex gap-2 items-center">
                Announcement
                <TfiAnnouncement></TfiAnnouncement>
              </span>
            </h1>
          </div>
        </>
      )}
      {announcement.length > 0 && (
        <>
          <div>
            {announcement.map((item) => (
              <Announcement key={item._id} item={item}></Announcement>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AnnounceData;
