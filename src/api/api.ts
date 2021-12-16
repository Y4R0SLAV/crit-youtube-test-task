import axios from "axios"

const instance = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/`,
  params: {
    "key": "AIzaSyCexCKgaWB6qmdo06Yq7FAj0PW8UQrcIeo"
  }
})

// хз работает ли апи ключ в хедере потом проверить и убрать если норм

export const videoApi = {
  getVideos (queryString: string, maxResults?: number, order?: 'date' | 'rating' | 'viewCount' | 'relevance' | 'title' ): Promise<any> {
    if (order && maxResults) {
      return instance.get<any>(`search?type=video&q=${queryString}&chart=mostPopular&maxResults=${maxResults}&order=${order}&key=AIzaSyCexCKgaWB6qmdo06Yq7FAj0PW8UQrcIeo`)
    .then(response => response.data)
    }
    return instance.get<any>(`search?type=video&q=${queryString}&chart=mostPopular&key=AIzaSyCexCKgaWB6qmdo06Yq7FAj0PW8UQrcIeo`)
    .then(response => response.data)
  },
  getVideoInfo (id: string): Promise<any> {
    return instance.get<any>(`videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyCexCKgaWB6qmdo06Yq7FAj0PW8UQrcIeo`)
    .then(response => response.data)
  },
  getChannelInfo (id: string): Promise<any> {
    return instance.get<any>(`channels?part=snippet&id=${id}&key=AIzaSyCexCKgaWB6qmdo06Yq7FAj0PW8UQrcIeo`)
    .then(response => response.data)
  }
}
