export const GetApiData=async () =>{
try{
const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);

const data=response.json();
return data;

}
catch(err){
  console.log(err);

}






}

