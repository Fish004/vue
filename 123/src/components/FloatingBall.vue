<template>
    <div class="floating-ball" @mousedown="startDrag($event)" @mouseup="stopDrag" @mousemove="onDrag"
        :style="{ left: position.left + 'px', top: position.top + 'px' }">
        <div class="ball"></div>
        <!-- 构建菜单项 -->
        <ul class="menu" v-if="showMenu" @click.stop>
            <li v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(item)">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FloatingBall',
    data() {
        return {
            position: { left: 100, top: 100 },
            isDragging: false,
            startX: 0,
            startY: 0,
            menuItems: ['登录', '选项2', '选项3'], // 根据需要添加菜单项
            showMenu: false,
            dragTimeout: null
        };
    },
    methods: {
        startDrag(e) {
            this.startX = e.clientX - this.position.left;
            this.startY = e.clientY - this.position.top;
            this.dragTimeout = setTimeout(() => {
                this.isDragging = true;
                this.animationFrameId = requestAnimationFrame(this.updatePosition);
            }, 200);
        },
        onDrag(e) {
            if (!this.isDragging) return;
            this.position.left = e.clientX - this.startX;
            this.position.top = e.clientY - this.startY;
        },
        updatePosition() {
            if (!this.isDragging) return;
            this.animationFrameId = requestAnimationFrame(this.updatePosition);
        },
        stopDrag() {
            if (this.isDragging) {
                this.isDragging = false;
                cancelAnimationFrame(this.animationFrameId);
            } else {
                this.showMenu = true;
            }
            clearTimeout(this.dragTimeout);
        },
        handleMenuItemClick(item) {
            if (item === '登录') {
                this.$router.push({ name: 'User_ST' }); // 确保你的路由配置中有名为 'Login' 的路由
            } else {
                // 处理其他菜单项点击事件
            }
            this.showMenu = false;
        }
    }
};
</script>

<style scoped>
.floating-ball {
    position: fixed;
    cursor: pointer;
}

.ball {
    width: 50px;
    height: 50px;
    background-color: #42b983;
    border-radius: 50%;
}

.menu {
    list-style-type: none;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50px;
    left: -50px;
    width: 150px;
}

.menu li {
    padding: 10px 20px;
    cursor: pointer;
    text-align: left;
}

.menu li:hover {
    background-color: #f0f0f0;
}
</style>
