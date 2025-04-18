import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../Compoenets/UI/Card';

import NetflixHeader from '../Compoenets/UI/Header';

const Movies = () => {
const moviedata=useLoaderData();
const moviedata1=moviedata.results;
// console.log(moviedata);

const imageUrl=`https://image.tmdb.org/t/p/w500`;


  return (



<>
{/* <div className="searchBar">

<SearchBar></SearchBar>

</div> */}

<NetflixHeader></NetflixHeader>

    <div className='body-div-movie'>
   {moviedata1.map((item, index) => {
  return <Card key={index} title={item.original_title} imageUrl={imageUrl+item.poster_path} rating={item.vote_average.toFixed(1) } description={item.overview} id={item.id}   />;
})}

    </div>
    </>
  )
}

export default Movies
