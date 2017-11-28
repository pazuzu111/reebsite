export default class Likes extends Component {
    constructor(){
    super()
        this.state = {
            likes: null,
            likesLoaded: false,
        }
    }


    componentDidMount(){

        //get all beer stlyes
        getLikes(){
            fetch('')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    likes: res,
                    likesLoaded: true
                })
            })
        }
    }
    render(){
      return(

          {this.state.likesLoaded ?
              props.likes.map((x, i) {
                  <h1 key={i}> {x.number} </h1>
              })
          }
      )
    }

  }
