<template>
    <div class="authentication-container">
        <UserLogin v-if="showLogin" @toggle="toggleView" />
        <UserRegister v-else @toggle="toggleView" />
    </div>
</template>

<script>
import UserLogin from '@/views/UserLogin.vue'
import UserRegister from '@/views/UserRegister.vue'

export default {
    components: {
        UserLogin,
        UserRegister
    },
    data() {
        return {
            showLogin: true
        }
    },
    methods: {
        toggleView() {
            this.showLogin = !this.showLogin
        }
    }
}
</script>

<style scoped>
:root {
    --primary-color: #007bff;
    --hover-color: #0056b3;
    --background-color: #f0f0f0;
    --form-background-color: #fff;
    --font-family: 'Arial', sans-serif;
}

.authentication-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
}

.form-container {
    background-color: var(--form-background-color);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    font-family: var(--font-family);
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
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--hover-color);
}

@media (max-width: 600px) {
    .form-container {
        padding: 15px;
        margin: 10px;
    }
}
</style>
