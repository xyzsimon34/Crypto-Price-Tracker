import React, { useState} from 'react';
import { Container, Typography, Box } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';
import { cryptoApi } from './services/api';
import './styles/App.css';

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: coins, isLoading, error } = useQuery(
    ['coins', searchTerm],
    () => cryptoApi.getCoins(),
    {
      refetchInterval: 30000, // 每30秒更新一次
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Crypto Price Tracker
        </Typography>
        <SearchBar onSearch={setSearchTerm} />
        <CryptoTable coins={coins || []} />
      </Box>
    </Container>
  );
}

export default function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}