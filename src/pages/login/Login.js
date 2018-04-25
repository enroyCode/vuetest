import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseApi from '../../api/BaseApi';

@Component({
  name: 'Login',
})

export default class Login extends Vue {
  username = '';
  password = '';

  handleClick() {
    let entity = {username: this.username, password: this.password};
    BaseApi.plat().post('login.zc', entity).then((res) => {
      console.log(111)
    }).catch((error) => {
      console.log(222)
    });
  }
}
