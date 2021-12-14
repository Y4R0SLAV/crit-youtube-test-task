import React, { FC } from 'react'
import { VideoType } from '../../../redux/mainPageReducer';
import "./search.css"


//   title: string
//   thumbnail: string
//   url: string 
//   publishedTime: Date
//   description: string
//   duration: Date
//   viewCount: string

//   channelTitle: string
//   channelThumbnail: string
//   channelUrl: string


const getViewCount = (views: string): string => {
  const newViews: number = +views

  if (newViews > 1000000000) {
    return Math.floor(newViews / 1000000000) + " млрд. просмотров"
  } else if (newViews > 1000000) {
    return Math.floor(newViews / 1000000) + "," + Math.floor((newViews - Math.floor(newViews / 1000000) * 1000000 ) / 100000)  + " млн. просмотров"
  } else if (newViews > 1000) {
    return Math.floor(newViews / 1000) + " тыс. просмотров"
  } else {
    return newViews + " просмотров"
  }
}

const getDuration = (duration: Date): string => {
  const newDuration: string = duration.toString()
  let result = ""
  for (let i = 0; i < newDuration.length - 1; i++) {
    if (newDuration[i] == "0" || newDuration[i] == "1" || newDuration[i] == "2" || newDuration[i] == "3" ||
    newDuration[i] == "4" || newDuration[i] == "5" || newDuration[i] == "6" || newDuration[i] == "7" ||
    newDuration[i] == "8" || newDuration[i] == "9") {
      result += newDuration[i]
    } else if (newDuration[i] !== "P" && newDuration[i] !== "T") {
      result += ":"
    }
  }
  return result
  
}

const getDate = (date: Date): string => {
  let newDate = new Date(date.toString().slice(0, 10))
  let currentDate = new Date()
  // @ts-ignore
  let minutes =  Math.floor((currentDate - newDate) / 1000 / 60 ) // сколько минут назад было выпущено видео
  let hours = minutes / 60
  let days = hours / 24
  let months = days / 30
  let years = months / 12

  if (years > 1) {
    return Math.floor(years) + " лет назад"
  } else if (months > 1) {
    return Math.floor(months) + " месяцев назад"
  } else if (days > 1) {
    return Math.floor(days) + " дней назад"
  } else if (hours > 1) {
    return Math.floor(hours) + " часов назад"
  } 

  return Math.floor(minutes) + " минут назад"
}

const getDescription = (desc: string): string => {
  return desc.length > 70 ? desc.slice(0, 70) + "..." : desc
}

const getVideoItem = (video: VideoType) => {
  return <div>
      <a  className="SearchResult__video video" href={"https://www.youtube.com/watch?v="+video.url} target="_blank">

      <div className="video__thumbnail">
          <div className="video__img">
            <img src={video.thumbnail} alt={video.title} />
            <div className="video__duration"> {getDuration(video.duration)}
          </div>
        </div>
      </div>

      <div className="video__info">
        <div className="video__title">
          {video.title}
        </div>
        <div className="video__data">
          <span className="video__views">{getViewCount(video.viewCount)}</span>
          <span className="video__date">{getDate(video.publishedTime)}</span>
        </div>
        <div className="video__channel">
          <span className="video__channelThumbnail"><img className="video__channelImg" src={video.channelThumbnail} alt="" /></span>
          <span className="video__channelTitle">{video.channelTitle}</span>
        </div>
        <div className="video__description">
          {getDescription(video.description)}
        </div> 
      </div>
      </a>
    </div>
} 

const SearchResult: FC<{videos: Array<VideoType>}> = ({videos}) => {

  return (
    <div className="SearchResult">
      {videos.map(video => getVideoItem(video))}
    </div>
  );
}

export default SearchResult;
