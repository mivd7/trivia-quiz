
<template>
  <div>
    <TopBar :currentUser="currentUser"/>
    <h1>Do you have the answers?</h1>
    <div class="pathway" v-if="!gameInProgress">
        <svg width="760" height="850" xmlns="http://www.w3.org/2000/svg">
            <path d="M 320 40 Q 40 210, 320 380 T 320 800" stroke="black" stroke-width="5" fill="transparent"/>
            <!-- Points -->
            <circle @click="handleClick" cx="320" cy="40" r="20" fill="red"/>
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
            <text @click="handleClick" x="320" y="805" 
            text-anchor="middle"
            stroke="white"
            stroke-width="1px" >
            <router-link :to="'/game/' + currentUser.level">{{ currentUser.level }}</router-link>
            <router-view></router-view> </text>
        </svg>

    </div>
    <div v-else></div>
  </div>
</template>

<script>
/* eslint-disable */
import TopBar from '../components/TopBar';

export default {
    name: 'Home',
    props: {
        currentUser: {
            type: Object,
        }
    },
    components: {
        TopBar
    },
    data() {
        return {
            gameInProgress: false
        }
    },
    methods: {
        handleClick() {
            this.gameInProgress = true
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