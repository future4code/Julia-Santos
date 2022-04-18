
test('GET /ProcurarPagamentos', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/procurarProdutos'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});
