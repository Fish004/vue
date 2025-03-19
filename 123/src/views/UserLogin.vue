<template>
    <div class="form-container">
        <h2>用户登录</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">登录</button>
        </form>
        <button @click="$emit('toggle')">注册</button>
    </div>
</template>

<script>
import { login } from '@/api/user';

export default {
    name: 'UserLogin',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                console.log('Sending login request with username:', this.username, 'and password:', this.password);
                const res = await login(this.username, this.password);
                console.log(res);
                // 根据后端返回的数据结构进行判断
                if (res.data && res.data.message === 'Login successful') {
                    this.$router.push('/ZERO');
                } else {
                    console.log('Login failed:', res.message);
                }
            } catch (error) {
                console.log('Error during login:', error);
                // 这里可以添加登录失败后的操作
            }
        }
    }
}
</script>

<style scoped>
.form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

@media (max-width: 600px) {
    .form-container {
        padding: 15px;
        margin: 10px;
    }
}
</style>
