import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import {
  SearchbarStyled,
  SearchFormBtnStyled,
  SearchFormBtnLabelStyled,
  SearchbarDescStyled,
} from './SearchCar.Styled';

import { filterCars } from '../../data/cars';
import { filterPrace } from '../../data/price';

export default function SearchCar() {
  return (
    <SearchbarStyled>
        <div>
          <SearchbarDescStyled>Car brand</SearchbarDescStyled>
          <Autocomplete
            disablePortal
            ListboxProps={{ style: { maxHeight: '350px' } }}
            id=""
            options={filterCars}
            sx={{ width: '224px' }}
            renderInput={params => (
              <TextField {...params} label="Enter the text" />
            )}
          />
        </div>
        <div>
          <SearchbarDescStyled>Price/ 1 hour</SearchbarDescStyled>
          <Autocomplete
            disablePortal
            ListboxProps={{ style: { maxHeight: '100px' } }}
            id=""
            options={filterPrace}
            sx={{ width: '125px' }}
            renderInput={params => <TextField {...params} label="To  $" />}
          />
        </div>
        <div>
          <SearchbarDescStyled>Сar mileage / km</SearchbarDescStyled>
          <TextField
            // label="With normal TextField"
            id="outlined-start-adornment"
            sx={{width: '160px' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">From</InputAdornment>,
            }}
          />
          <TextField
            // label="With normal TextField"
            id="outlined-start-adornment"
            sx={{width: '160px' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">To</InputAdornment>,
            }}
          />
        </div>

        
          <SearchFormBtnStyled>
            <SearchFormBtnLabelStyled>Search</SearchFormBtnLabelStyled>
          </SearchFormBtnStyled>
       
    </SearchbarStyled>
  );
}
