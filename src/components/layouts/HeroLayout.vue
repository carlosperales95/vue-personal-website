<template>
    <div class="hero-container">
        <div class="nav-container">
            <div class="links">
                <div class="container hero-size">
                    <ul>
                        <li>
                            <router-link
                            class="filled-background"
                            to="/projects"
                            >
                                Projects
                            </router-link></li>
                        <li>
                            <router-link
                            class="filled-background"
                            to="/devlogs"
                            >
                                DevLogs
                            </router-link>
                        </li>
                        <li>
                            <router-link
                            class="filled-background"
                            to="/photography"
                            >
                                Photography
                            </router-link>
                        </li>
                    </ul>
                    <div class="img-container">
                        <slot name="left">

                        </slot>
                    </div>
                </div>
                <div class="action-container">
                    <a class="action-link filled-background" @click="$emit('trigger-show')">
                        Learn more about me
                    </a>
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