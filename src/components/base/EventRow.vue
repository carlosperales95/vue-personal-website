<template>
    <div :class="type" class="timeline-container">
        <div class="year">
            <slot name="year">
                <h3></h3>
            </slot>
        </div>
        <div
            class="marker-line"
            :class="{ 'clicked': clicked }"
        >
            <button
                @click.prevent="clickButton"
                class="marker"
            ></button>
            <span class="line"></span>
        </div>
        <div class="event" :class="{ 'empty': empty }">
            <slot name="event">
                <h3></h3>
            </slot>
        </div>
    </div>
</template>

<script>

export default {
    props: ['event', 'type', 'empty', 'clicked'],
    emits: ['click-button', 'start-button'],
    setup(props, context) {
        const clickButton = function() {
            if(props.type === 'event-container') {
                context.emit('click-button', props.event.id + 1);
            }

            if(props.type === 'start-container')
                context.emit('start-button');
            window.scrollBy({ top: 600, behavior: "smooth"});
            
        };

        return {
            clickButton
        };
    },
}
</script>
