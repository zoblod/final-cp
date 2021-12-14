<template>
    <nav>
        <div class="footer-container">
            <div class="footer">
                <a class="text"> © JOEL AND ALEX All Rights Reserved </a>
                <a href="https://github.com/zoblod/final-cp"> Github </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.footer-container{
    position: absolute;
    overflow: hidden;
    background: #161616;
    transition: 0.3s;
    z-index: 11;
    bottom: 0;
    left: 0;
    width: 100%;
    clear: both;
}
.footer{
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    color: #161616;
    justify-content: center;
    line-height: 100px;
    z-index: 11;
}
.text{
    color: white;
    margin-right: 50px;
}
</style>