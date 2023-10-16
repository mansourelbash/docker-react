import React,{useContext, useRef, useEffect, useState} from 'react'
import { MyContext } from '../context/MyContextProvider';
import SearchData, {SearchUsers} from '../service/SearchData'
import Style from '../card.module.css'
const FetchData2 = () => {
  const { value, setValue } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchType, setSearchType] = useState("users");

  const [searchItems, setSearchItems] = useState([]);
  const searchRef = useRef(null);
  var getData ;
  const fetchAllSearchData = async () =>{
    setLoading(true)
    const data= searchRef.current.value
    getData = await SearchUsers(data, searchType)
    console.log(getData)
    if (getData){
      setLoading(false)
      setSearchItems(getData)
    }
    else{
      setError('Not Found of Data Search ,, Please Change the Text and ReSearch')
    }
  }
  return (
    <div className=''>
      <h1>{value}</h1>
      <p> My name is ahmad</p>
      <button className='bg-red-600 text-red rounded p-2 hover:bg-red-800 hover:text-white' onClick={()=>setValue('mansour')}>Change Data</button>
      <div className='mt-20 bg-blue-200 p-20'>
        <p>enter you repo name</p>
        <input type='text'  ref={searchRef}/>
        <button onClick={fetchAllSearchData}> get All Repos</button>
         <div>
          <p>search for :</p>
          <label className='flex gap-2 justify-center'>
            <span> Users</span>
            <input type="radio" name="type" value="users" onChange={()=>setSearchType('users')} />
          </label>
          <label className='flex gap-2 justify-center'>
            <span> Repos</span>
            <input type="radio" name="type" value="repos" onChange={()=>setSearchType('repos')} />
          </label>
         </div>
        <br />
        {searchType}
           {loading ? (error ? error : 'Loading...' ) : (
            <>
            <div className='grid grid-cols-4 gap-4'>
              {searchItems?.length > 1 ? (
              searchItems && searchItems.map((item)=> <div className='' key={item.id}><p>{item.full_name}</p> </div>
              )
              ) :(
                <div className='grid grid-cols-4 gap-4 mt-10'>
                <div className='flex justify-center text-center align-center flex-col'><img className='w-[100%] h-[200px]' src={searchItems.avatar_url}/> <p>{searchItems.name}</p> </div>
              </div>
              )}
            </div>
            </>
     
        )}

      </div>

      <div className={Style.card} >
        <div className={Style.card_inner}>
          <div className={Style.card_front}> Card Front </div>
          <div className={Style.card_back}> Card Back </div>
        </div>
      </div>
    </div>
  )
}

export default FetchData2