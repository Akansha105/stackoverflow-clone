import React ,{useContext}from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { LoginContext } from './context/ContextProvider'

const SearchBar = () => {
 const {text,setText} = useContext(LoginContext);
 const handleChange =(e) =>{
  setText(e.target.value);
 }

  return (
    <TextField
      placeholder="Search your answer here..."
      variant="outlined"
      style={{ width: 600, marginLeft: 400 }}
      fullWidth
      value={text}
      onChange={handleChange}
      InputProps={{    
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: 'orange' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
        },
      }}
    />
  )
}

export default SearchBar
