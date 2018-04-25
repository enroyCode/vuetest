import { Component, Vue } from 'vue-property-decorator'
import BaseApi from '../api/BaseApi';

@Component({
  name: 'HelloWorld',
})

export default class HelloWorld extends Vue {

  handleClick() {
    BaseApi.plat().get('test/load.zc').then((res) => {
      console.log(111)
    }).catch((error) => {
      console.log(222)
    });
  }
}
