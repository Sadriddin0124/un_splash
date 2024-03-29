import axios from "axios";
import { create } from "zustand";
const client_id = "client_id=59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8"
const BASE_URL = "https://api.unsplash.com"

const PagesStore = create((set)=> ({
    images: [],
    topics: [],
    topicPhoto: [],
    getImages: async (payload) => {
        try {
          const res = await axios.get(
            `${BASE_URL}/search/photos?query=${payload}&_page=1&per_page=30&${client_id}`
            );
            set({ images: [...res?.data?.results] });
          } catch (err) {
            console.error(err);
          }
        },
        getTopics: async () => {
          try {
            const res = await axios.get(
              `${BASE_URL}/topics?_page=1&per_page=30&${client_id}`
              );
              set({ topics: [...res?.data] });
              console.log(res);
            } catch (err) {
          console.error(err);
        }
      },
    getTopicPhoto: async (id) => {
        try {
          const res = await axios.get(
            `${BASE_URL}/topics/${id}/photos?_page=1&per_page=30&${client_id}`
            );
            set({ topicPhoto: [...res?.data] });
            console.log(res);
        } catch (err) {
          console.error(err);
        }
      },
}))

export default PagesStore