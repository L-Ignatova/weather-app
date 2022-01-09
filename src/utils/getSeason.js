import { labels } from "../constants";

const seasonsConfig = {
  summer: {
    text: labels.summer,
    image: `https://careerguy.com/wp-content/uploads/2020/06/5356755_062119-cc-ss-summer-sun-img.jpg`,
  },
  winter: {
    text: labels.winter,
    image: `https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/earth-and-space/seasons/signs-of-winter/Signs-of-Winter.jpg`,
  }
}

export const getSeason = (lat, month) => {
  return (month > 2 && month < 9) 
    ? lat > 0 ? seasonsConfig.summer : seasonsConfig.winter
    : lat < 0 ? seasonsConfig.summer : seasonsConfig.winter;
};
