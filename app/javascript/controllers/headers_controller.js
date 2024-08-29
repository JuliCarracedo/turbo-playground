import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static get targets() {
    return [
      'home',
      'friends',
      'posts'
    ]
  }

  connect(){
    const ROUTES = {
      posts: /\/posts/,
      friends: /\/friends/
    }

    const currentPath = window.location.pathname;
    console.log('current path', currentPath)
    if(currentPath.match(ROUTES.posts)){
      this.postsTarget.classList.add('underline');
    } else if(currentPath.match(ROUTES.clients)){
      this.friendsTarget.classList.add('underline');
    } else{
      this.homeTarget.classList.add('underline');
    }
  }

  chooseLink(e){
    const elements = document.querySelectorAll('.navlink.underline');

    elements.forEach(element => {
      element.classList.remove('underline');
    });

    e.target.classList.add('underline');
  }

}
