import { motion } from "framer-motion";

const LessonItem = ({ lesson, lessonsActive, handleActive, handleVideoSelect }) => {
    const isActive = lessonsActive[lesson.id];

    return (
        <div key={lesson.id}>
            <div
                className={`cursor-pointer text-gray-800 hover:bg-[#0E1729] text-[1rem] hover:text-white relative py-[1rem] pl-[1rem] ${isActive ? "bg-[#0E1729] text-white" : "bg-orange-200"
                    }`}
                onClick={() => {
                    handleActive(lesson.id);
                }}
            >
                {lesson.title}
            </div>
            {isActive && (
                <div className="text-[0.8rem] justify-end flex flex-col gap-y-[0.6rem] pt-[1rem] pl-[0.4rem] border-l-2 w-[90%] mx-[auto]">
                    {lesson.videos?.map((video, index) => (
                        <motion.div
                            key={index + 1}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "fit-content" }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2
                                onClick={() => {
                                    handleVideoSelect(video);
                                }}
                                className="cursor-pointer hover:text-[#F78100]"
                            >
                                {video.title}
                            </h2>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LessonItem;