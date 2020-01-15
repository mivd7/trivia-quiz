
<template>
  <div>
    <TopBar :currentUser="currentUser"/>
    <h1>{{currentUser.name}}, do you have the answers?</h1>
    <div v-if="!gameInProgress" class="pathway">
        <svg width="760" height="850" xmlns="http://www.w3.org/2000/svg">
            <path d="M 320 40 Q 40 210, 320 380 T 320 800" stroke="black" stroke-width="5" fill="transparent"/>
            <!-- Points -->
            <circle cx="320" cy="40" r="20" fill="red"/>
            <text x="320" y="45" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px"
            > 
            {{ currentUser.level + 4 }} 
            </text>
            <circle cx="180" cy="210" r="20" fill="red"/>
            <text x="180" y="215" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px"
            > 
            {{ currentUser.level + 3 }} 
            </text>
            <circle cx="320" cy="380" r="20" fill="red"/>
            <text x="320" y="385" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px"
            > 
            {{ currentUser.level + 2 }} 
            </text>
            <circle cx="460" cy="560" r="20" fill="red"/>
            <text x="460" y="565" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px"
            > 
            {{ currentUser.level + 1 }} 
            </text>
            <circle  cx="320" cy="800" r="20" fill="red"/>
            <text x="320" y="805" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px" @click="handleClick">
            <router-link :to="'/game/' + currentUser.level">{{ currentUser.level }}</router-link>
            <router-view></router-view> </text>
        </svg>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TopBar from '../components/TopBar';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Home',
    props: {
        currentUser: {
            type: Object,
        },
        showPathway: {
            type: Boolean
        }
    },
    components: {
        TopBar
    },
    data() {
      return {
        quizRunning: false
      }
    },
    methods: {
      ...mapActions(['startGame']),
      handleClick() {
        console.log('starting game...')
        this.startGame()
      }
    },
    computed: {
       ...mapGetters(["gameInProgress"])
    },
    watch: {
      gameInProgress: function(newVal, oldVal) {
        console.log(newVal)
        this.quizRunning = newVal
      }
    }
}
</script>

<style>
 .pathway {
    width: auto;
    text-align: center;
    margin-left: 15%;
 }

</style>