<template>
    <div class="hero-container">
        <div class="site-title">
            <slot name="header">
            
            </slot>
        </div>
        <div class="nav-container">
            <div class="img-container">
                <slot name="left">

                </slot>
            </div>
            <div class="links">
                <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <!-- <li><router-link to="/devlogs">DevLogs</router-link></li>
                    <li><router-link to="/">Photography</router-link></li>
                    <li><router-link to="/">Music</router-link></li> -->
                </ul>
                <div class="action-container">
                    <a class="action-link" @click="$emit('trigger-show')">Learn more about me</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['trigger-show'],
    setup() {
        
    },
}
</script>