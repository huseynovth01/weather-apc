
//* promise ile  yazilisi

// function getWeather(city) {
//   return new Promise((resolve, reject) => {

    // Burada normalde bir API isteği gönderilir
    // API'ye şehir adını göndererek hava durumu bilgisi alınır.

//     setTimeout(() => {
//       const weatherData = {
//         city: 'Istanbul',
//         temperature: '25°C',
//         description: 'Partly cloudy',
//       };

//       if (city === 'Istanbul') {
//         resolve(weatherData);
//       } else {
//         reject('Şehir bulunamadı.');
//       }
//     }, 2000);
//   });
// }

// // Kullanımı:
// getWeather('Istanbul')
//   .then(data => console.log(`Hava durumu: ${data.temperature}, ${data.description}`))
//   .catch(error => console.log(error));


  //-----------------------------------

  // * callback ile  yazilisi

  // function getWeather(city, successCallback, errorCallback) {
  //   setTimeout(() => {
  //     const weatherData = {
  //       city: 'Istanbul',
  //       temperature: '25°C',
  //       description: 'Partly cloudy',
  //     };
  
  //     if (city === 'Istanbul') {
  //       successCallback(weatherData);
  //     } else {
  //       errorCallback('Şehir bulunamadı.');
  //     }
  //   }, 2000);
  // }
  
  // // isledilmesi:
  // getWeather(
  //   'Istanbul',
  //   data => console.log(`Hava durumu: ${data.temperature}, ${data.description}`),
  //   error => console.log(error)
  // );
  

  //-----------------------------------

// * user asyncawait ile  yazilisi

// function getWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const weatherData = {
//         Istanbul: { temperature: '25°C', description: 'Partly cloudy' },
//         Ankara: { temperature: '20°C', description: 'Sunny' },
//         // Diğer şehirler...
//       };

//       if (weatherData[city]) {
//         resolve(weatherData[city]);
//       } else {
//         reject('Şehir bulunamadı.');
//       }
//     }, 2000);
//   });
// }

// async function fetchWeather(cityName) {
//   try {
//     const weather = await getWeather(cityName);
//     console.log(`Hava durumu: ${weather.temperature}, ${weather.description}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// isledilmesi:
// fetchWeather('Istanbul');


    //--------------------------------


