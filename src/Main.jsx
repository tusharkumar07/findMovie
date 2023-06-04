import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let api_key="&api_key=57cd3794003f48892f3830340055319a";
let base_url="https://api.themoviedb.org/3";
let url=base_url+ "/discover/movie?sort_by=popularity.desc" +api_key;
let array=["Popular","Theatre","Kids","Drama","Comedie"];

const act={};
const Main=()=>{
    const [movie_data,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [set_search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            console.log(data);
            setData(data.results);
        })
    },[url_set]);

    const getData=(movieName)=>{
        if(movieName=="Popular"){
            url=base_url+ "/discover/movie?sort_by=popularity.desc" +api_key;
            
        }
        if(movieName=="Theatre"){
            url=base_url+ "/discover/movie?primary_release_date.get=2014-09-15&primary_release_date.lte=2014-10-22" +api_key;
        }
        if(movieName=="Kids"){
            url=base_url+ "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +api_key;
            act.color="#f7f1e3";
        }
        if(movieName=="Drama"){
            url=base_url+ "/discover/movie?with_genres=18&primary_release_year=2014" +api_key;
        }
        if(movieName=="Comedie"){
            url=base_url+ "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +api_key;
        }
        setUrl(url);

    }

    const searchMovie=(eve)=>{
        if(eve.target="Enter"){
            setSearch(" ");
            url=base_url+"/search/movie?api_key=57cd3794003f48892f3830340055319a&query="+set_search;
            setUrl(url);
            document.getElementsByClassName("inpclear").value=" ";  
        }
    }
    return(
        <>
        <div className="header">
            <nav>
                <ul>{
                    array.map((value)=>{
                            return(
                                <li> <a href="#" className="act" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                            )
                    })
                }
                    
                </ul>
            </nav>
            <form>
                <div className="inputbtn">
                    <input type="text" placeholder="Enter Movie Name" onChange={(e)=>{setSearch(e.target.value)}}  onKeyDown={searchMovie} className="inpclear"></input>
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" />
                    
                    {/* <button className="btn btn-danger btn-search">Go</button> */}
                </div>
           </form>
        </div>
        
        <div className="container">
                {
                    (movie_data==0)?<p className="notfound">Not found</p>:movie_data.map((res,pos)=>{
                        return(
                                <Card info={res} key={pos}/>
                        )
                    })
                }
                
        </div>

        </>
    )
}
export default Main;