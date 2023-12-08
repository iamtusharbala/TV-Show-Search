// `https://api.tvmaze.com/search/shows?q=${term}`

const form = document.querySelector("#showSearch");
const input = document.querySelector("input");
const show = document.querySelector("#show");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = input.value;
  const fetchedData = await makeRequest(userInput);
  for (showsData of fetchedData) {
    if (showsData.show.image) {
      const imgSource = showsData.show.image.medium;
      const img = document.createElement("IMG");
      img.src = imgSource;
      show.append(img);
      input.value = "";
    }
  }
  // console.log(fetchedData);
});

const makeRequest = async (input) => {
  try {
    const req = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${input}`
    );
    return req.data;
  } catch (error) {
    console.log(error);
  }
};
