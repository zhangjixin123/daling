import FooterComponent from './FooterComponent'
class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
       
    }
    render(){
        console.log(this)
        return (
            <div>
                {this.props.children}
                <FooterComponent pathname={this.props.location.pathname}/>
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent