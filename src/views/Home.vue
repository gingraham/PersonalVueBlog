<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"/>
    <BlogPost v-for="(post,index) in blogPostsFeed" :key="index" :post="post"/>
    <!-- Blog cards section  -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard v-for="(post,index) in blogPostsCards" :key="index" :post="post"/>
        </div>
      </div>
    </div>
    <!-- Registration section -->
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Register for youre free acount today!</h2>
        <router-link class="router-button" to="#">Register for Blog <Arrow class="arrow arrow-light"/></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
import Arrow from '../assets/Icons/arrow-right-light.svg';
export default {
  name: "Home",
  components: {BlogPost,BlogCard,Arrow}, 
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles wit all things programming including HTML, CSS, Javascript and more.",
        welcomeScreen: true,
        photo: "coding",
      },
    }
  },
  computed:{
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed
    },
    blogPostsCards(){
      return this.$store.getters.blogPostsCards
    },
    user(){
            return this.$store.state.user;
        }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: auto;
    // margin-bottom: auto;
    @media (min-width: 800px) {
       padding: 125px 25px;
       flex-direction: row;
    }
.router-button{
  display: flex;
  font-size: 14px;
  text-decoration: none;
  @media (min-width: 800px) {
      margin-left: auto;
    }
}
h2{
  font-weight: 300;
  font-size: 32px;
  max-width: 425px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 800px) {
    text-align: initial;
    font-size: 40px;
    }
}
  }
}

</style>
