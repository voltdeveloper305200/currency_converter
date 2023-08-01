import axios from "axios";

const URL = "https://www.cbr-xml-daily.ru/daily_json.js";

class requests {
  loadCurrenciesInfo() {
    return new Promise((resolve, reject) => {
      axios
        .get(URL)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }
}

export default requests;
