<template>
  <body>
    <h2 class="title"> Resolutions </h2>
    <ul class="list">
      <li v-for="(resolution, index)  in resolutions" :key="resolution.id">
          <article class="episode">
      <div class="episode__number">{{index}}</div>
      <div class="episode__content">
        <div class="title">{{resolution.name}}</div>
        <div class="story">
          <p>{{ resolution.text }}</p>
        </div>
      </div>
      </article>
      </li>

      
    </ul>
    
    <div class="input-container">
      <div class="text-containers">
        <input type="text" v-model="name" placeholder="What's your name?" class="input-txt-name">
        <textarea type="text" v-model="text" placeholder="What are your new years resolutions?" class="input-txt"></textarea>
      </div>
      
      <button class="input-button" @click="upload"> Submit </button>
    </div>
    
  </body>
</template>

<script>
import axios from 'axios'
  export default{
    data() {
    return {
      name: "",
      text: "",
      addItem: null,
      findName: "",
      findResolution: null,
      resolutions: []
    }
  },
  created() {
    this.getResolutions();
  },
  methods: {
    async upload() {
        let r2 = await axios.post('/api/resolutions', {
          name: this.name,
          text: this.text,
        });
        console.log(r2)
        this.getResolutions()
        this.name = "";
        this.text = "";
    },
    async getResolutions() {
      try {
        let response = await axios.get("/api/resolutions");
        this.resolutions = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
  }
</script>

<style scoped>
body{
    height: 100%;
    margin: 0;
    padding: 0px; 
    z-index: 1;
    box-sizing: border-box;
}
.title{
  padding-left: 30px;
}
.list{

}
.episode {
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
}
.input-txt{
  width: 50vw;
  height: 50px;
}
.input-txt-name{
  width: 150px;
  margin: 10px;
}
.input-container{
  right: 0;
  left: 0;
  bottom: 0;
  padding-bottom: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
}
.text-containers{
  display: flex;
  flex-direction: column;
}
.input-button{
  margin-left: 20px;
  height: 50px;
  margin-top: 45px;
}
.episode__number {
  font-size: 10vw;
  font-weight: 600;
  padding: 10px 0;
  position: sticky;
  top: 0;
  text-align: center;
  height: calc(10vw + 20px);
  transition: all 0.2s ease-in;
}
.episode__content {
  border-top: 2px solid #fff;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  padding: 15px 0;
}

.episode__content .title {
  font-weight: 600
}

.episode__content .story {
  line-height: 26px;
}
.list{
    list-style-type: none;
}
</style>
