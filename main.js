
const url = 'https://narutodb.xyz/character';
console.log(url);

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); 
  })
  .then(data => {
    console.log('Data received:', data); 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



