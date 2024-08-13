import { useEffect, useState } from 'react';

import { fetchPhotos } from '../services/photoService';

const useFetchPhotos = (photoCount: number) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        const data = await fetchPhotos(photoCount);
        setPhotos(data.hits.map((photo: { webformatURL: string }) => photo.webformatURL));
        setError(null);
      } catch (err) {
        setError('Failed to fetch photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getPhotos(); 

    const interval = setInterval(() => {
      getPhotos(); 
    }, 10000);

    return () => clearInterval(interval); 
  }, [photoCount]);

  return { photos, loading, error };
};

export default useFetchPhotos;
