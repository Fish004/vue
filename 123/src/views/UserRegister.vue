<!-- UserRegister.vue -->
<template>
    <div class="form-container">
        <h2>用户注册</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">注册</button>
        </form>
        <button class="toggle-button" @click="$emit('toggle')">登录</button>
    </div>
</template>

<script>
import { register } from '@/api/user';

export default {
    name: 'UserRegister',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                // 构建请求数据

                // 发送 POST 请求到后端
                const response = await register(this.username, this.password);
                if (response && response.data) {
                    console.log('注册成功:', response.data);
                    // 这里可以根据后端返回的信息执行其他操作，例如跳转到登录页面
                } else {
                    console.error('注册响应数据为空');
                }
            } catch (error) {
                console.error('注册失败:', error.response ? error.response.data : error.message);
                // 显示错误信息给用户
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
    width: 300px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

button.toggle-button {
    background-color: #007bff;
}

button.toggle-button:hover {
    background-color: #0056b3;
}
</style>
