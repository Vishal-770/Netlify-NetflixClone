export const GetApiData=async () =>{
try{
const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8035965abb0105093ba59c2469ff1215`);

const data=response.json();
return data;

}
catch(err){
  console.log(err);

}






}

// https://api.themoviedb.org/3/movie/popular?api_key=8035965abb0105093ba59c2469ff1215;
// https://image.tmdb.org/t/p/w500