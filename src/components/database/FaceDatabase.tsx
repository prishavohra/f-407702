
import { useState } from "react";
import faces from "../../data/faces";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function FaceDatabase() {
  const [facesList] = useState(faces);
  const [selectedFace, setSelectedFace] = useState<typeof faces[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Known Faces</h2>
      {facesList.length === 0 ? (
        <p>No faces found in database.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facesList.map((face, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedFace(face);
                  setDialogOpen(true);
                }}
                className="bg-black rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={face.images[0]}
                  alt={`${face.id}_thumbnail`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="text-sm font-semibold text-white">{face.name || face.id}</div>
                <div className="text-xs text-gray-400">Added: {new Date(face.dateAdded).toLocaleDateString()}</div>
                <div className="text-xs text-gray-400">Last Seen: {new Date(face.lastSeen).toLocaleDateString()}</div>
              </div>
            ))}
          </div>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-3xl">
              {selectedFace && (
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-4">{selectedFace.name || selectedFace.id}</h3>
                  <Carousel className="w-full max-w-2xl mx-auto">
                    <CarouselContent>
                      {selectedFace.images.slice(1).map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="flex justify-center">
                            <img
                              src={image}
                              alt={`${selectedFace.id}_angle_${index + 1}`}
                              className="h-[400px] object-cover rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
