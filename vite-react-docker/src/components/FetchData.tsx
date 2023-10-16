import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContextProvider';

type DataType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const FetchData = () => {
  const [data, setData] = useState<DataType[]>([]);
  const { value, setValue } = useContext(MyContext);

  const fetchAllData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const allData = await res.json();
      setData(allData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // fetchAllData();
  }, []);

  return (
    <div className='flex justify-center items-center gap-5'>
      <h1>{value}</h1>
      <p> My name is Yaroub</p>

      <button className='bg-red-600 text-black rounded p-2 hover:bg-red-800 hover:text-white' onClick={()=>setValue('Yaroub')}>Change Data</button>
      {data.length > 0 &&
        data.map((item: DataType, index) => (
          <div className='text-3xl font-bold underline' key={item.id}>
            {item.title} {/* Display whatever property you want */}
          </div>
        ))}
    </div>
  );
};

export default FetchData;
