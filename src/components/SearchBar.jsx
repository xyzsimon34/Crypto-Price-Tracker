import React, { useState } from 'react';
import { TextField, Box, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // 更新輸入框內容
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim()); // 觸發搜尋，忽略首尾空白
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchTerm(''); // 清除搜尋框
    onSearch(''); // 清空搜尋結果
  };

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="搜索加密貨幣"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        placeholder="輸入加密貨幣名稱"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchTerm && (
                <IconButton onClick={clearSearch}>
                  <ClearIcon />
                </IconButton>
              )}
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
