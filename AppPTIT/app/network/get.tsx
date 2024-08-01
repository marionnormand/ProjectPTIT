export const handleGetRequest = async (
  setData: React.Dispatch<React.SetStateAction<any | null>>,
  url: string,
  dataType: string
) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('La réponse du réseau n\'est pas valide : ' + response.statusText);
    }

    const data = await response.json();
    
    const latestData = data.length > 0 ? data[data.length - 1][dataType] : null;
    setData(latestData);
  } catch (error) {
    console.error('Erreur avec fetch :', error);
  }
};
