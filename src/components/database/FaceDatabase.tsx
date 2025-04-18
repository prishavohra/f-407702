// src/components/database/FaceDatabase.tsx
import { useState } from "react";
import faces from "../../data/faces"; // Import the static faces data

export default function FaceDatabase() {
  // Directly use the static faces data
  const [facesList] = useState(faces);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Known Faces</h2>
      {facesList.length === 0 ? (
        <p>No faces found in database.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facesList.map((face, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={face.images[0]} // Use the first image as the thumbnail
                alt={`${face.id}_thumbnail`}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <div className="text-sm font-semibold">{face.name || face.id}</div>
              <div className="text-xs text-gray-600">Added: {new Date(face.dateAdded).toLocaleDateString()}</div>
              <div className="text-xs text-gray-600">Last Seen: {new Date(face.lastSeen).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
