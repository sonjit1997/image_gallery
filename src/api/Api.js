import { useEffect, useState } from "react";
import axios from "axios";

const GetImage = () => {
  const [img, setImg] = useState([]);
  const num = 1;
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?per_page=28&client_id=LZLDuwjxet6Cy-S5hsApBh0-d88tlXCQL36cjo0H9Jg"
      )
      .then((data) => {
        setImg(data.data);
      });
  }, [num]);
  return img;
};

function ResultImage(input) {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query="+input+"&per_page=28&client_id=LZLDuwjxet6Cy-S5hsApBh0-d88tlXCQL36cjo0H9Jg"
      )
      .then((data) => {
        setImg(data.data.results);
      });
  }, [input]);
  return img;
}





export { GetImage, ResultImage};
