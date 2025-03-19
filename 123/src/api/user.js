import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
    baseURL: 'http://localhost:5001', // 你的后端api地址
    timeout: 5000 // 请求超时时间
});

// 登录接口
export function login(username, password) {
    return service.post('/login', {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// 注册接口
export function register(username, password) {
    return service.post('/register', {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
