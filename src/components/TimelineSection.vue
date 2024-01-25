<template>
    <section class="events section">
        <h2>Event Line</h2>

        <event-row
            :type="'start-container'"
            :class="{ 'revealed': line.started }"
            :clicked="line.started"
            @start-button="startTimeline"
            :empty="true"
        >
            <template v-slot:year>
                <h3> 1995 </h3>
                <icon-baby class="baby" />
            </template>
        </event-row>
        <event-row
            v-for="event in events"
            :key="event.id"
            :class="{ 'revealed': event.show }"
            :event="event"
            :type="'event-container'"
            :clicked="event.clicked"
            @click-button="revealEvent"
        >
            <template v-slot:year>
                <h3> {{ event.year }} </h3>
            </template>
            <template v-slot:event>
                <h3>{{ event.name }}</h3>
                <h5>{{ event.location }}</h5>
                <h5>{{ event.type }}</h5>
                <h5>{{ event.year }}</h5>
                <p>{{ event.description }}</p>
            </template>
        </event-row>
        <event-row
            :type="'end-container'"
            v-if="line.complete"
            :empty="true"
        >
            <template v-slot:year>
                <h3> 2024 </h3>
                <icon-calendar class="calendar" />
            </template>
        </event-row>
        <p> Text to finish the section that says something that makes sense</p>
    </section>
</template>
<script>
import { ref, reactive } from 'vue';
import EventRow from './EventRow.vue';
import IconBaby from './icons/IconBaby.vue';
import IconCalendar from './icons/IconCalendar.vue';


export default {
    components: {
        EventRow,
        IconBaby,
        IconCalendar,
    },
    setup() {

        const line = reactive({
            started: false,
            complete: false
        });

        const events = ref([
            {
                id: 1,
                type: 'studies',
                year: 2015,
                location: 'La Salle Bilbao',
                name: 'High School',
                description: 'Description of Event 1',
                show: false,
                clicked: false
            },
            {
                id: 2,
                type: 'work',
                year: 2016,
                location: 'DeustoTech',
                name: 'Internship DeustoTech',
                description: 'Extracurricular internship in collaboration with Deustotech Lab, a research oriented development lab at the University of Deusto. I was responsible, together with another intern, for the development of several research academic projects.',
                show: false,
                clicked: false
            },
            {
                id: 3,
                type: 'work',
                year: 'January 2017',
                location: 'WeNite',
                name: 'Internship WeNite',
                description: 'Curricular internship in collaboration with WeNite. Resposible for the front-end development, coding the solution with Node.js + HTML + CSS and translating it into iOS and Android app format using Apache Cordova. The goal was to develop the full pilot for their app, a nightlife app for iOS an Android.',
                show: false,
                clicked: false
            },
            {
                id: 4,
                type: 'studies',
                year: 'August 2017',
                location: 'University of Deusto',
                name: 'CS degree',
                description: 'Completed the Computer Engineering Bachelors degree in the University of Deusto.',
                show: false,
                clicked: false
            },
            {
                id: 5,
                type: 'work',
                year: 2019,
                location: 'Luggo',
                name: 'Full Stack Developer',
                description: 'Part time job in the early stages of the company now known as Luggo, where I originally started as a front-end developer. Later on, I also assumed some of the backend development responsibilities, working as a full-stack developer for the rest of my stay.',
                show: false,
                clicked: false
            },
            {
                id: 6,
                type: 'work',
                year: 2020,
                location: 'University of Bologna',
                name: 'Traineeship in Unibo',
                description: 'Spent a full academic year in Bologna, Italy. During this time I followed a traineeship of 6 months, in which I carried out my master thesis on Machine Learning and Natural Language Processing.',
                show: false,
                clicked: false
            },
            {
                id: 7,
                type: 'studies',
                year: 'June 2021',
                location: 'VU + UvA',
                name: 'Msc Degree',
                description: 'Completed the Computer Science Masters degree, following the track of Software Engineering + Green IT. ',
                show: false,
                clicked: false
            },
            {
                id: 8,
                type: 'work',
                year: 'July 2021',
                location: 'Adyen',
                name: 'Technical Support Engineer',
                description: 'Current role',
                show: false,
                clicked: false
            },
        ]);

        const startTimeline = function() {
            line.started = true;
            revealEvent(1);
        };

        const revealEvent = function(id) {
            if(id > 1) events.value.find(el => el.id === id - 1).clicked = true;
            if(id - 1 === events.value.length) line.complete = true;
            
            const event = events.value.find(el => el.id === id);

            if(!event) return;
            event.show = true;
        };

        return {
            line,
            events,
            revealEvent,
            startTimeline
        }
    },
}
</script>

<style scoped>
.events {
    background-color: #fff3f3;
    color: #111111;
    display: flex;
    flex-direction: column;
}

.events h2 {
    margin-bottom: 10rem;
}

.event h3 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 10px;
}

.event p {
    font-size: 16px;
    text-align: justify;
    text-justify:inter-word
}

.event h5 {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: right;
}

.year h3 {
    margin: 0;
}

svg {
    height: 40px;
}

.baby {
    margin-left: 5px;
    padding-right: 5px;
}

.calendar {
    padding-right: 15px;
}

</style>
