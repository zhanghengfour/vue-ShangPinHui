<template>
    <div>
        <Header></Header>
<!--        路由组件入口-->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    name,
    components: {
        Header,
        Footer
    }
}
</script>

<style>
</style>
