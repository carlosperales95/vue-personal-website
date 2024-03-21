<template>
    <div class="hero-container">
        <div class="site-title">
            <slot name="header">
            
            </slot>
        </div>
        <div class="nav-container">
            <div class="links">
                <div class="container">
                    <ul>
                        <li><router-link class="filled-background" to="/projects">Projects</router-link></li>
                        <li><router-link class="filled-background" to="/">Courses</router-link></li>
                        <li><router-link class="filled-background" to="/devlogs">DevLogs</router-link></li>
                        <li><router-link class="filled-background" to="/">Photography</router-link></li>
                        <li><router-link class="filled-background" to="/">Music</router-link></li>
                    </ul>
                    <div class="img-container">
                        <slot name="left">

                        </slot>
                    </div>
                </div>
                <div class="action-container">
                    <a class="action-link filled-background" @click="$emit('trigger-show')">Learn more about me</a>
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