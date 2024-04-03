const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    // prevent default behavior of browser (refresh)
    event.preventDefault();
    // grab the value of the input box and save to a variable
    const inputValue = event.target.children[1].value;
    // get the data from the local server db.json file
    fetch(`http://localhost:3000/movies/${inputValue}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener('DOMContentLoaded', init);
