import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
    iterations: 50,
     thresholds: {
        http_req_duration: ['p(90)<10', 'max<1'], // 90% das requisições devem ser respondidas em menos de 500ms
        http_req_failed: ['rate<0.01'] // taxa de erro deve ser menor que 1%
     }
};

export default function () {
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({//com essa função o objeto js vai ser transformado em JSON
        username: 'julio.lima',
        senha: '123456',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    console.log(res.token);

    check(res, {
        'Validar que o status é 200': (r) => r.status === 200,
        'Validar que o token é string': (r) => typeof(r.json().token) === 'string',
        
    });


    sleep(1);
}