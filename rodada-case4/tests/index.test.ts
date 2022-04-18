
test('GET /pagamentios', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/pagamentos'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('POST /novoCliente', async () => {
    const axios = require('axios');
    const response = await axios({method:'POST',url:'http://localhost:3003/novoCliente',data:{
        "nome":"Amazon"
    }});
    expect(response.status).toEqual(201)
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('POST /novoComprador', async () => {
    const axios = require('axios');
    const response = await axios({method:'POST',url:'http://localhost:3003/novoComprador',data:{
        "nome":"Julia Oliveira",
        "email":"jucs.santos.oliveira@gmail.com",
        "cpf":"123874323423"
    }});
    expect(response.status).toEqual(201)
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('POST /novoPagamentoCartaoCredito', async () => {
    const axios = require('axios');
    const response = await axios({method:'POST',url:'http://localhost:3003/pagamento',data:{
        "nome":"Julia Oliveira",
        "aniversario":"01/07/1998",
        "documento":"1238743234231",
        "bandeira":"Visa",
        "expira":"01/06/2029",
        "cvv":"123",
        "numero":"1234432156788767",
        "metodo":"Cartao Credito",
        "valor":300000.00,
        "comprador":1,
        "cliente":1
    }});
    expect(response.status).toEqual(201)
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('POST /novoPagamentoBoleto', async () => {
    const axios = require('axios');
    const response = await axios({method:'POST',url:'http://localhost:3003/pagamento',data:{
        "valor":300000.00,
        "comprador":1,
        "cliente":1,
        "metodo": "Boleto"
    }});
    expect(response.status).toEqual(201)
    expect(response.data).toBeTruthy();
});