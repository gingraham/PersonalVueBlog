import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import "firebase/auth"
import db from '../firebase/firebaseInit'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle:"",
    blogPhotoName:"",
    blogPhotoFileURL:null,
    blogPhotoPreview:null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null
  },
  getters:{
blogPostsFeed(state){
  return state.blogPosts.slice(0,2)
},
blogPostsCards(state){
  return state.blogPosts.slice(2,6)
}
  },
  mutations: {
    newBlogPost(state,payload){
      state.blogHTML = payload
      console.log(state.blogHTML)
    },
    updateBlogTitle(state,payload){
      state.blogTitle = payload
    },
    fileNameChange(state,payload){
      state.blogPhotoName = payload
    },
    createFileURL(state,payload){
      state.blogPhotoFileURL = payload
      console.log(state.blogPhotoFileURL)
    },
    openPhotoPreview(state){
      state.blogPhotoPreview = !state.blogPhotoPreview
    },
    toggleEditPost(state,payload){
      state.editPost = payload;
    },
    filterBlogPost(state, payload){
      state.blogPosts = state.blogPosts.filter(post =>{
        post.blogID !== payload;
      })
    },
    updateUser(state, payload){
      state.user= payload;
    },
    setProfileAdmin(state, payload){
      state.profileAdmin = payload;
    },
    setProfileInfo(state,doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().username;
    }, 
    setProfileInitials(state){
      state.profileInitials = 
      state.profileFirstName.match(/(\b\S)?/g).join("") +
      state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload){
      state.profileFirstName= payload;
    },   
    changeLastName(state, payload){
      state.profileLastName= payload;
    },    
    changeUserName(state, payload){
      state.profileUserName= payload;
    },  
  },
  actions: {
    async getCurrentUser({commit}, user){
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get();
      commit('setProfileInfo',dbResults);
      commit("setProfileInitials")
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin)
    },
    async updateUserSettings({commit, state}){
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials")
    },
    async getPost({state}){
      const dataBase = await db.collection('blogPosts').orderBy('date', 'desc');
      const dbResults = await dataBase.get();
      dbResults.forEach(doc => {
        if(!state.blogPosts.some(post => post.blogID === doc.id)){
          const data = {
            blogID: doc.data().blogID,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogHTML: doc.data().blogHTML,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date
          };
          state.blogPosts.push(data)
        }
      });
      state.postLoaded = true;
    },
    async deletePost({commit}, payload){
      const getPost = await db.collection('blogPosts').doc(payload)
      await getPost.delete();
      commit("filterBlogPost", payload)
    },
  },
  modules: {
  }
})
