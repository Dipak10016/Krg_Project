import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.form`
  text-align: center;
  margin: 2vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 1vh;
  margin: 1vh;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 20vw;
  max-width: 200px;
`;

const Button = styled.button`
  background-color: #0385FE;
  color: #fff;
  padding: 1vh 1.2vw;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 1vh;
`;

const CategoryInput = styled(Input)`
  margin-right: 2vw;
`;

const SkillInput = styled(Input)`
  margin-right: 5vw;
`;

const LocationInput = styled(Input)`
  margin-right: 5vw;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <CategoryInput type="text" placeholder="Category" />
      <SkillInput type="text" placeholder="Job Title / Skill" />
      <LocationInput type="text" placeholder="Location" />
      <Button type="submit">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
