import useFetchPhotos from "../hooks/useFetchPhotos";

const PhotoGrid = () => {
  const { photos, loading, error } = useFetchPhotos(9);

  if (loading) {
    return <p>Loading photos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="photo-grid">
      {photos &&
        photos.map((photo, index) => (
          <img key={index} src={photo} alt="Customer" />
        ))}
    </div>
  );
};

export default PhotoGrid;
