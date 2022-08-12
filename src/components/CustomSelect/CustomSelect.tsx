import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomSelect = ({
  header,
  selectedItems,
  handleChange,
  items,
  multiple,
  width,
  id,
}: any) => (
  <>
    {
                items.length !== 0 && (
                <div className="_select-container">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id={`${id}-label`}>{header}</InputLabel>
                    <Select
                      labelId={`${id}-label`}
                      id={id}
                      multiple={multiple}
                      value={selectedItems}
                      onChange={handleChange}
                      style={{ minWidth: width, maxWidth: width }}
                    >
                      {
                                    items?.map((x) => (
                                      <MenuItem value={x?.value} key={x?.value}>
                                        {x?.text}
                                      </MenuItem>
                                    ))
                                }
                    </Select>
                  </FormControl>
                </div>
                )
            }
  </>

);

export default CustomSelect;
