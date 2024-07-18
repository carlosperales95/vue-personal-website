<template>
    <div class="container">
        <slot name="left">
            <!-- Element to be shown on left side -->
        </slot>
        <div class="right-container" :class="{'fall-back': modifier}">
            <slot name="right">
                <!-- Element to be shown on right side -->
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['trigger-show'],
    props: ['modifier'],
    setup() {
        
    },
}
</script>