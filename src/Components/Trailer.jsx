import { useNavigate, useParams} from "react-router-dom";




const Trailer = ({movies}) => {

    const navigate = useNavigate();
    const params = useParams();
   
    const film = movies.find((el)=> el.id===Number(params.id));
    console.log("film",film);
    console.log("params",params);


  return (
    <div>
        <img src={film.posterURL} alt={film.title}/>
        <h1>{film.title}</h1>
        <h2>{film.description}</h2>
       
          <iframe
	        
	         src={film.trailer}
           ></iframe>
        <button onClick={()=>navigate(-1)}>Back to movie list</button>
    </div>
  )
}

export default Trailer;