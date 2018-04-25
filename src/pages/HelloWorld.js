import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'HelloWorld',
})

export default class HelloWorld extends Vue {

  handleClick() {
    this.$router.push('/login');
  }
}
