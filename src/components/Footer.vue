<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{ name: 'Home' }">
                        MyBlog
                    </router-link>
                    <ul>
                        <li>
                            <a href="#">
                                <youTube class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <twitter class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <instagram class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <linkedin class="svg-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                        <router-link v-if="admin"  class="link" :to="{ name: 'CreatePost' }">Create Post</router-link>
                        <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login In / Register</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2023 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import youTube from '../assets/Icons/youtube-brands.svg'
import twitter from '../assets/Icons/twitter-brands.svg'
import instagram from '../assets/Icons/instagram-brands.svg'
import linkedin from '../assets/Icons/linkedin-brands.svg'

export default {
    name: "footer-vue",
    components: {
        youTube,
        twitter,
        instagram,
        linkedin
    },
    computed:{
        user(){
            return this.$store.state.user;
        },
        admin(){
            return this.$store.state.profileAdmin
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 100px 25px;
    background-color: #303030;
    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media(min-width: 800px) {
            flex-direction: row;
            gap: 0;
        }
            div {
            display: flex;
            flex: 1;
        }

        .left {
            gap: 32px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }

            .header {
                font-size: 1.5rem;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
            }

            ul {
                gap: 16px;
                list-style: none;
                display: flex;
            }

            .col-1,
            .col-2 {
                gap: 32px;
                display: flex;
                flex: 1;

                @media (min-width: 800px) {
                    gap: 0;
                }
            }

            .col-1 {
                flex-direction: column;
                    a{
                        display: flex;
                        justify-content: center;
                    }
                h2 {
                    text-align: center;

                    @media (min-width: 800px) {
                        text-align: initial;
                    }
                }

                ul {
                    margin-top: auto;
                    justify-content: center;
                    li {
                        display: flex;
                        align-items: center;

                        .svg-icon {
                            width: 24px;
                            height: auto;
                            color: #fff;
                        }
                    }
                }
            }

            .col-2 {
                ul {
                    height: 100%;
                    text-align: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;

                    @media (min-width: 800px) {
                        flex-direction: column;
                    }

                    .link {
                        font-size: 1rem;
                        font-weight: 500;
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }
        .right{
            gap: 32px;
            color: #fff;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (min-width: 800px) {
                gap: 0;
            }
        }
        p{
            margin-top:auto;
        }

    }
}
</style>