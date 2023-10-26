"use client"
import {useEffect,useState} from "react"; 
function Data() {
const [data,setData]=useState([]); 
 
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
      .then(response=> {
      	return response.json();
      })
      .then((data)=>{
      setData(data.results.slice(0,10))})
  }, [])
  
const handleDeleteItem = (id) => {
    const updatedItems = data.filter((item) => item.id !== id);
    setData(updatedItems);
  };

//function handleUpdateVotes(id,votes){
//	const updatedItems=[...data];
//	const movie=updatedItems.find(movie=>movie.id === id);
//	updatedItems.sort(compare);
//	setData(updatedItems);
//};

const [dislikes, setDislikes] = useState(0);

const handleLike = () => {
    setLikes(likes + 1);
  };
const handleDislike = () => {
    setDislikes(dislikes + 1);
};


//function compare(a,b){
//	if (a.votes>b.votes){
//		return -1;
//	}
//	if (a.votes<b.votes){
//		return 1;
//	}
//	return 0;
//}


  return (
    <div>
      {data.map((item)=>{
         return(
         	<div>
         		<div className="image-container" >
         			<img className="image-container" src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`}/>
         		</div>
         		<div className="details-container">
         			<h1>{item.original_title}</h1>
         			<p>{item.release_date}</p>
         			<h3>DESCRIPITION</h3>
         			<p>{item.overview}</p>
         			<p>{item.id}</p>
         			<div className="like-container">
         				<img className="like-container"
         				src="Icon - Like.png" 
         				onClick={handleLike}/>
         			</div>
         			<div class="dislike-container">
         				<img className="like-container"
         				src="Icon - Like (1).png" onClick={handleDislike}/>
         			</div>
         			
         			<div class="delete-container">
         				<img className="delete-container"
         				src="delete.png" onClick={()=>handleDeleteItem(item.id)}/>
         			</div>
         			
         			<div>
						<div className="last_header"></div>
					</div>
				</div>
			</div>
		);
		})};
	</div>
	);
};
export default Data;
