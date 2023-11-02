// Fungsi async untuk memeriksa cuaca berdasarkan nama kota
async function checkWeather(city) {
    const api_key = "fe9eee94c103d76e7ffa85dead7939d8"; // API Key OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; // URL API OpenWeatherMap

    // Mengambil data cuaca dari API menggunakan fetch
    const weather_data = await fetch(`${url}`).then((response) => {
        // Mengambil data JSON dari respons
        return response.json();
    });

    // Di sini, Anda seharusnya menggunakan `return response.json();` alih-alih hanya `response.json;`

    // Setelah menjalankan fetch, data cuaca akan tersedia di `weather_data` untuk digunakan di tempat lain dalam kode Anda.
}
