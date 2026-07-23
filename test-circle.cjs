const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');

const client = initiateDeveloperControlledWalletsClient({
  apiKey: 'TEST_API_KEY:ae039d416e97b845f067141e22c81f76:4855ba0998d16527574560d125e7af0c',
  entitySecret: 'ea7945dabbf275c062dd383c8e35e5e2c8c5e599f5a727173593b5867794862f',
});

client.createWalletSet({ name: 'Test Set' })
  .then(res => console.log('BAŞARILI:', res.data))
  .catch(err => console.log('HATA:', err.response?.data || err.message));