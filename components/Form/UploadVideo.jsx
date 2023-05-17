import React, { useState } from "react";
import { useRouter } from "next/navigation";

function UploadVideo({ uploadedCourse }) {
  const [videoFile, setVideoFile] = useState(null);
  const router = useRouter();

  const backgroundImageStyle =
    uploadedCourse && uploadedCourse.imageUrl
      ? { backgroundImage: `url(${uploadedCourse.imageUrl})` }
      : null;

  const handleVideoUpload = () => {
    if (videoFile) {
      console.log("Uploading video:", videoFile);
      router.push("/mycontent");
    } else {
      console.log("No video");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  return (
    <div>
      {uploadedCourse && (
        <div
          className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={backgroundImageStyle}>
          <div className="p-4 bg-gray-900 bg-opacity-75 text-white">
            <h2 className="text-xl font-bold mb-2">Uploaded Course:</h2>
            <p className="mb-2">
              <span className="font-bold">Title:</span> {uploadedCourse.title}
            </p>
            <p className="mb-2">
              <span className="font-bold">Description:</span>{" "}
              {uploadedCourse.description}
            </p>
            <p className="mb-2">
              <span className="font-bold">Cost:</span> {uploadedCourse.cost}
            </p>
            <p className="mb-2">
              <span className="font-bold">Rating:</span> {uploadedCourse.rating}
            </p>
          </div>
        </div>
      )}

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleVideoUpload}>
        Upload Video
      </button>

      <button
          className="bg-orange-500 text-white px-[2.5rem] py-2 m-6  rounded-full"
        onClick={() => router.push("create/form-videos/my-content")}>
        Next
      </button>
    </div>
  );
}

export default UploadVideo;

        