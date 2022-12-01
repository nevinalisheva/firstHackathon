import axios from "axios";

export const getPosts = () => {
  const response = axios
    .get(
      `https://www.berlin.de/sen/web/service/maerkte-feste/weihnachtsmaerkte/index.php/index/all.json?q=`
    )
    .then((response) => response.data.index);
  return response;
};
