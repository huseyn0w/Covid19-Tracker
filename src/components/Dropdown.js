import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';
import {getCountries} from '../api/api';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    align:'center',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Dropdown(props) {
  const {onChangeCountry} = props;
  const classes = useStyles();
  const [countries, loadCountries] = useState([]);


  useEffect(() =>{
    (async () => {
        const data = await getCountries();
        // console.log(data.countries);
        loadCountries(data.countries);
    })();
    
  }, []);

  let country_list = null;

  if(countries.length){
      country_list = countries.map((country, i) => {
          return <option key={i}  value={country.name}>{country.name}</option>
      });
  }

  const handleCountryChange = (country) => {
    onChangeCountry(country);
  }

  return (
    <div className="country-cover">
        
      <FormControl className={classes.formControl}>
         <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="Global">Global</option>
            {country_list}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
