import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const cryptoApi =  {
    // 獲取加密貨幣列表
    getCoins: async (page = 1) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 10,
                    page,
                    sparkline: false
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch coins');
        }
    },

    // 獲取特定加密貨幣詳細資訊
    searchCoin: async (query) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search`, {
                params: { query }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch coin');
        }
    }
};
