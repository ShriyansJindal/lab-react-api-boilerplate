import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Reactapi.css"

const Reactapi = () => {
    let [data,setData]= useState([])

    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }}).then(res=>{
            setData(res.data.books)
        }).catch(error=>{
            console.log("Error")
        })
    },[])
    // console.log(data)

  return (
    <div className='container'>
        {data.map((el)=>(
            
            <div key={el.id} className='book'>
                
                <div className='intro'>
                <h2>{el.title}</h2>
                <img src={el.imageLinks.smallThumbnail} alt="" />
                <h3>{el.authors[0]}</h3>

                </div>
                <p className='about'>{el.description}</p>


            </div>
        ))}
    </div>
  )
}

export default Reactapi