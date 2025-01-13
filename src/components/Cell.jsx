import React from 'react';
import { TETROMiNOS } from '../tetrominos';
import { StyledCell } from './styles/CellStyled';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMiNOS[type].color} />
)

export default Cell;