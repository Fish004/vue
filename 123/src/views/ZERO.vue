<!-- 父组件 -->
<script>
import N_Text from '@/components/Node/N_Text.vue';
import N_Video from '@/components/Node/N_Video.vue';

export default {
    name: 'ZERO',
    components: {
        N_Text,
        N_Video
    },
    data() {
        return {
            showModal: false,
            currentComponent: 'N_Text' // 初始显示N_Text
        };
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
        switchComponent() {
            // 切换显示的组件
            this.currentComponent = this.currentComponent === 'N_Text' ? 'N_Video' : 'N_Text';
        }
    }
}
</script>

<template>
    <div class="zero-container">
        <h1 class="zero-title" @click="toggleModal">ZERO</h1>

        <div v-if="showModal" class="modal-overlay" @click="toggleModal">
            <div class="modal-content" @click.stop>
                <component :is="currentComponent" />
                <button class="switch-button" @click="switchComponent">
                    切换
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.zero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.zero-title {
    font-size: 3em;
    color: #333;
    text-align: center;
    cursor: pointer;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    /* max-width: 600px; */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
}

.switch-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.switch-button:hover {
    background-color: #0056b3;
}
</style>
