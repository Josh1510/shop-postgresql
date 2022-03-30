import React from 'react';
import useFetch from '../../functions/useFetch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from 'styled-components';

export default function BrandList({
  filter,
  setBrand,
  brand,
  setProductCategory,
  productCategory,
}) {
  const { loading, error, value } = useFetch(
    `http://localhost:5000/search/${filter}`,
    {},
    []
  );

  const menuItems = [];

  !loading &&
    value.forEach((element) => {
      for (const property in element) {
        menuItems.push(element[property]);
      }
    });

  const handleClick = (event) => {
    if (productCategory === '' || productCategory !== filter) {
      setProductCategory(filter);
    }

    if (event.target.value === brand) {
      setBrand('');
    } else {
      setBrand(event.target.value);
    }
    console.log(event);
  };

  return (
    <div>
      {!loading && (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Brand"
            name="controlled-radio-buttons-group"
            value={brand}
            // onChange={handleChange}
          >
            {menuItems.map((name) => (
              <StyledFormControlLabel
                value={name}
                control={<StyledRadio onClick={handleClick} />}
                label={name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </div>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)`
  padding-right: 12px;
  &:hover {
    color: #66fcf1;
    background-color: #1f2833;
  }
`;

const StyledRadio = styled(Radio)`
  &&& {
    color: #66fcf1;
  }

  &:hover {
    color: #66fcf1;
    background-color: #1f2833;
  }

  &:nth-child(1) {
    color: #45a29e;
  }

  ${StyledFormControlLabel}:hover & {
    color: #66fcf1;
  }
`;
