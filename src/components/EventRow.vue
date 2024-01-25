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
    emits: ['click-button'],
    setup(props, context) {
        const clickButton = function() {
            if(props.type === 'event-container') {
                context.emit('click-button', props.event.id + 1);
                window.scrollBy({ top: 400, behavior: "smooth"});
            }

            if(props.type === 'start-container')
                context.emit('start-button');
        }

        return {
            clickButton
        };
    },
}
</script>


<style scoped>

.clicked button {
    background-color: azure;
    pointer-events: none;
}

.clicked span {
    height: 100%;
    transition: height 1s ease-out;
}

.events h2 {
    margin-bottom: 6rem;
}

.start-container,
.end-container {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    height: 100%;
    width: 100%;
    text-align: center;
    vertical-align: top;
}

.start-container .year {
    visibility: hidden;
}

.start-container.revealed .year {
    visibility: visible;
}

.start-container.revealed .marker-line .marker::before,
.start-container.revealed .marker-line .marker::after {
    display: none;
}

.year {
    vertical-align: text-top;
    display: flex;
    flex-direction: row-reverse;
    justify-items: flex-end;
    padding-left: 2rem;
    min-width: 100px;
    width: 70%;
    text-align: right;
}

.event-container {
    display: none;
}

.timeline-container {
    min-height: 10rem;
}

.revealed {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    height: 100%;
    width: 100%;
    text-align: center;
    vertical-align: top;
}

.revealed .year,
.revealed .event {
    animation: fadeIn 1s ease-in;
}

.revealed .marker-line .marker::before {
    margin-left: -20px;
    
}

.revealed .marker-line .marker::before,
.revealed .marker-line .marker::after {
    content: "";
    width: 10px;
    height: 3px;
    background-color: #1a1a1a;
    display: block;
    animation: extend 0.2s ease-out;

}

.revealed .marker-line .marker::after {
    margin-left: 28px;
    margin-top: -3px;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes extend {
    0% { width: 0; }
    100% { width: 50%; }
}

.marker-line {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.marker {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-top: 0px;
    background-color: aqua;
}

.line {
    width: 3px;
    height: 0;
    background-color: aqua;
}

.event {
    border: 1px solid #111111;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: left;
}

.empty {
    border: none;
}

.end-container button {
    pointer-events: none;
    background-color: azure;
}

.end-container .year h3 {
    margin-top: 0;
}

.start-container .empty {
    min-height: 18rem;
}

</style>
