import React from 'react';
import useFetch from '../../functions/useFetch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BrandList from './BrandList';
import styled from 'styled-components';

export default function CategoriesList({
  setProductCategory,
  productCategory,
  setBrand,
  brand,
}) {
  const { loading, error, value } = useFetch(
    `http://localhost:5000/product/category/`,
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
    if (event.target.value === productCategory) {
      setBrand('');
      setProductCategory('');
    } else {
      setBrand('');
      setProductCategory(event.target.value);
    }
    console.log(event.target.value);
  };

  return (
    <PageContainer>
      {!loading && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Category</FormLabel>
          <RadioGroup
            aria-label="Category"
            name="controlled-radio-buttons-group"
            value={productCategory}
            // onChange={handleChange}
          >
            {menuItems.map((name) => (
              <ProductListContainer>
                <StyledFormControlLabel
                  value={name}
                  control={<StyledRadio onClick={handleClick} />}
                  label={name}
                  sx={{
                    display: 'flex',
                  }}
                />
                <BrandList
                  filter={name}
                  setBrand={setBrand}
                  brand={brand}
                  setProductCategory={setProductCategory}
                  productCategory={productCategory}
                />
              </ProductListContainer>
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </PageContainer>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)`
  padding-right: 12px;
  &:hover {
    color: #66fcf1;
    background-color: #1f2833;
  }
`;

const PageContainer = styled.div`
  color: #c5c6c7;
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

const ProductListContainer = styled.div`
  //   &:hover {
  //     color: #66fcf1;
  //     background-color: #1f2833;
  //   }
  // }
`;
