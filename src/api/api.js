import axios from 'axios';

let GLOBAL_URL = 'https://covid19.mathdro.id/api/';

export const fetchData = async (country) => {
    try {
        let final_url = GLOBAL_URL;
        if(country !== 'Global') final_url += 'countries/' + country;
        const {data: {lastUpdate,confirmed, recovered, deaths}} = await axios.get(final_url);
        return {
            lastUpdate,
            confirmed:{
                ...confirmed,
                title: "Infected"
            },
            recovered: {
                ...recovered,
                title: "Recovered"
            },
            deaths: {
                ...deaths,
                title: "Deaths"
            },
        };

    } catch (error) {
        return error;
    }
}

export const getCountries = async () => {
    try {
        const countryURL = GLOBAL_URL + 'countries';
        const {data} = await axios.get(countryURL);
        return data;
    } catch (error) {
        return error;
    }
}

export const getDailyData = async () => {
    try {
        const countryURL = GLOBAL_URL + 'daily';
        const {data} = await axios.get(countryURL);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
}