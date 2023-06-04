import React from "react";

const Card=(movie)=>{
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
        <div className="moviecard">
            <img src={img_path+movie.info.poster_path} className="imgstyle" />
            <div className="moviedetail">
                <div className="details">
                    <h4 className="title">{movie.info.title}</h4>
                    <br />
                </div>
                <div className="complecated">
                    <p className="realease">Realease Date: {movie.info.release_date} <span className="rating">Rating: {movie.info.vote_average}</span></p>
                </div>
                <div className="over">
                    <h5>Overview</h5>
                    <p>{movie.info.overview}</p> 
                </div>
                 
            </div>
        </div>
        </>
    )
}
export default Card;