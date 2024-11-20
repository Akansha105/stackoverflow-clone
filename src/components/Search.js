import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <TextField
      placeholder="Search your answer here..."
      variant="outlined"
      style={{ width: 600, marginLeft: 400 }}
      fullWidth
      InputProps={{    
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: 'orange' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px', // Set border radius
        },
      }}
    />
  )
}

export default SearchBar
