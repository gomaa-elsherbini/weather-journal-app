// Personal API Key for OpenWeatherMap API
const apiKey = 'fe1872b52f4714e77dd604ac98e66481&units=imperial';
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`

/*let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear(); this code gives me uncorrect value of month 
so i had used the: new Date().toDateString() code insteade*/
let d = new Date();
let newDate = d.toDateString()

/*user has to enter a zip code and his feeling then click generate button to trigger the apiCalling function */
// document.getElementById('generate').addEventListener('click', runCode)
document.getElementById('generate').addEventListener('click', apiCalling)

function apiCalling() {

    let zipCode = document.getElementById('zip').value;
    let userFeeling = document.getElementById('feelings').value;

    //calling async getWeatherData function to make a get request with parameters baseUrl, zipCode and apikey
    getWeatherData(baseURL, zipCode, apiKey)

        //chain another promise TODO:
        //first promise:
        .then(function (data) {

            /*post resquest with path addIncomingData and data object ( of the returned weather api data
            with the user input data) to store in our app*/
            //calling postAllData
            postAllData('/addIncomingData', { temprature: data.main.temp, date: newDate, userResponse: userFeeling })

            //second promise: 
            //calling updateUI function to dynamically update UI by displaying retrived data from our app on the screen 
            updateUI();
        })
}

//getWeatherData async function to make a GET request to get data from weathermap api
const getWeatherData = async (baseURL, zipCode, apiKey) => {

    const res = await fetch(`${baseURL}${zipCode}&appid=${apiKey}`)

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

//postAllData async function to make a POST request to store data in our app
const postAllData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

//updateUI async function to make a GET request to get app`s data to dynamically update selected DOM elements 
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Tempreture: ${allData.temprature} Fahrenht`;
        document.getElementById('content').innerHTML = `feeling: ${allData.userResponse}`;
    } catch (error) {
        console.log("error", error);
    }
}



































































































































// /* Global Variables */
// //Generate API Key


// // Create a new date instance dynamically with JS

// // console.log(newDate)



// document.getElementById('generate').addEventListener('click', performAction);

// function performAction(e) {
//     // console.log('data');
//     const newAnimal = document.getElementById('animal').value;
//     const favFact = document.getElementById('favorite').value;

//     getAnimal('/animalData',)
//         // New Syntax!
//         .then(function (data) {
//             // Add data
//             console.log(data);
//             postData('/addAnimal', { animal: data.animal, fact: data.fact, fav: favFact });
//         })
//         .then(
//             updateUI()
//         )
// }

// const updateUI = async () => {
//     const request = await fetch('/all');
//     try {
//         const allData = await request.json();
//         document.getElementById('animalName').innerHTML = allData[0].animal;
//         document.getElementById('animalFact').innerHTML = allData[0].facts;
//         document.getElementById('animalFav').innerHTML = allData[0].fav;

//     } catch (error) {
//         console.log("error", error);
//     }
// }
// // console.log( document.getElementById('date'));
// // document.getElementById('date').innerHTML = newDate;