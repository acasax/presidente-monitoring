import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const LocationSelect = () => {
  useEffect(() => {

  }, []);

  const [items, setItems] = useState<String[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItems(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className="_select-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-multiple-name-label">Lokacije</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          multiple
          value={items}
          onChange={handleChange}
          label="Age"
          style={{ minWidth: '400px', maxWidth: '400px' }}
        >
          <MenuItem value={10}>01 / Trg Despota Stefana 30 / Krusevac</MenuItem>
          <MenuItem value={20}>13 / Trg Kralja Petra i Oslobodioca 3/1 / Kraljevo</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationSelect;
