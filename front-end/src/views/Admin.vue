<template>
  <body>
    <h2 class="title"> Edit Resolutions </h2>
    <input v-model="findName" placeholder="Search" class="input-suggestion">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.name}}
          </div>
        </div>
        <div>
            <article class="episode" v-if="findResolution">
                <div class="modify-resolution">
                    <input class="name" v-model="findResolution.name">
                    <textarea class="text" v-model="findResolution.text"></textarea>   
                </div>

                <div class="actions" v-if="findResolution">
                    <button @click="deleteResolution(findResolution)">Delete</button>
                    <button @click="editResolution(findResolution)">Edit</button>
                </div>
            </article>
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
  computed: {
    suggestions() {
      let resolutions = this.resolutions.filter(resolution => resolution.name.toLowerCase().startsWith(this.name.toLowerCase()));
      return resolutions.sort((a, b) => a.name > b.name);
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
    },
    selectItem(resolution) {
      this.findName = "";
      this.findResolution = resolution;
    },
    async deleteResolution(resolution) {
        await axios.delete("/api/resolutions/" + resolution._id);
        this.findResolution= null;
        this.getResolutions();
        return true;
    },
    async editResolution(resolution) {
        await axios.put("/api/resolutions/" + resolution._id, {
          name: this.findResolution.name,
          text: this.findResolution.text,
        });
        this.findResolution = null;
        this.getResolutions();
        return true;
    },
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
.modify-resolution{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.input-suggestion{
    margin-left: 50px;
    width: 150px
}
.title{
  padding-left: 30px;
}
.name{
    height: 25px;
    margin: 30px;
    width: 200px;
}
.text{
    margin-left: 30px;
    color: black;
    height: 100px;
    width: 50vw;
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
/* Suggestions */
.suggestions {
  width: 155px;
  margin-left: 50px;
  border: 1px solid #ccc;
  color: black;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: white;
  color: gray;
  cursor: pointer;
}
</style>
