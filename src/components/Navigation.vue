<template>
    <header>
        <!-- Desktop navigation -->
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">Blog</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <!-- Mobile navigation -->
        <menuIcon class="menu-icon" @click="toggleMobileNav" v-show="mobile"/>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blogs</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
//import mobile nav icon
import menuIcon from '../assets/Icons/bars-regular.svg'
export default {
    name: 'navigation',
    components: {
        menuIcon
    },
    // mobile navigation logic
    data(){
        return {
            mobile:null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    // Event listener for the size of the screen to run our mobile logic
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
            return
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: #fff;
    padding-inline: 1.5625em;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;

    .link {
        font-weight: 500;
        padding-inline: 0.5em;
        transition: .3s color ease;

        &:hover {
            color: #1eb8b8;
        }
    }

    nav {
        display: flex;
        padding-block: 1.5625em;

        .branding {
            display: flex;
            align-items: center;

            .header {
                font-weight: 500;
                font-size: 1.5em;
                color: #000;
                text-decoration: none;
            }
        }

.nav-links{
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    ul{
        margin-right: 32px;
        .link{
            margin-right: 32px;
        }
        .link:last-child{
            margin-right: 0;
        }
    }
}
    }
.menu-icon{
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
}
.mobile-nav{
    padding: 1.25em;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position:fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link{
        padding-block: 0.9375em;
        color: #fff;
    }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: all 1s ease;
}
.mobile-nav-enter{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0px);
}
.mobile-nav-leave-to{
    transform: translateX(-250px);
}
}
</style>