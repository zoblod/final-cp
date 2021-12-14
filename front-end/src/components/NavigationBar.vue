<template>
    <nav>
        <div class="nav-content">
            <router-link class="logo" to="/"> 
                <h1> New Years Resolutions 🌅</h1> 
            </router-link>

            <router-link class="route" to="/admin">
                <h2> Admin </h2>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    margin: 0;
    overflow: hidden;
    background: #161616;
    transition: 0.3s;
    
}
.nav-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.route{
    color: white;
    padding-right: 50px;
    text-decoration: none;
}
.logo{
    color: white;
    padding-left: 50px;
    text-decoration: none;
}
</style>