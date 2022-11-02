import { useEffect, useState } from 'react';
export const Container = () => {
  const [card, setCard] = useState([]);
  const Api = async() =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    setCard(data.results);
  };
  useEffect(() => {
    Api();
  }, []);
  console.log(card);
  return (
    <>
      <div className="con_box">
        
            {card?.map((cur, index) => {
              return (
                <>
                <div className="Con">
                <div className='name_con'>{cur.name}</div>
                  <div ><img src={"https://png.pngitem.com/pimgs/s/436-4366826_rhino-png-images-free-download-rhinoceros-png-black.png"}  alt="error" className='img'/></div>
                  </div>
                </>
              );
            })}
        
        </div>
   
    </>
  );
};
