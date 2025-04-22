import React from 'react'

function Videocard({info}) {
   console.log(info);
  return (
    <div className='p-2 m-2 w-82 shadow-lg'>
      <img className='rounded-lg' alt='sample' src={info?.snippet?.thumbnails?.medium?.url}></img>
      <ul>
        <li>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default Videocard
