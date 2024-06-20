<template>
    <div class="container">
        <slot name="left">
            <!-- Element to be shown on left side -->
        </slot>
        <div class="right-container">
            <slot name="right">
                <!-- Element to be shown on right side -->
            </slot>
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