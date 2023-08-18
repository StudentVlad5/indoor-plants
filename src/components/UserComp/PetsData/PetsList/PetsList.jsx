import React from 'react';
import { PetsItem } from './PetsItem/PetsItem';
import { PetsListWrapper } from './PetsList.styled';
import PropTypes from 'prop-types';

export const PetsList = ({ petsList, removePetList }) => {
  return (
    <>
      {petsList?.length > 0 && (
        <PetsListWrapper>
          {petsList.map(pet => (
            <PetsItem removePetList={removePetList} key={pet._id} pet={pet} />
          ))}
        </PetsListWrapper>
      )}
    </>
  );
};

PetsList.propTypes = {
  petsList: PropTypes.object.isRequired,
  removePetList: PropTypes.object.isRequired,
};
