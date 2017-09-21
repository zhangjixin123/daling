
import {Link} from 'react-router'

class FooterComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    getActive(hash){
        //    /   /main   /collect
        //   /main   /collect
        let active = this.props.pathname=='/'?'/main':this.props.pathname       
        return hash==active?'tab-item external active':'tab-item external'
    }
    
    render(){
        
        return (


            <nav className="footer">
                <Link className={this.getActive('/main')} to="/main">
                    <span className="">首页</span>
                </Link>
                {/* <a   href="#/main">
                    
                </a> */}
                <Link className={this.getActive('myOrder')} to="/myOrder">
                    <span className="">分类</span>
                </Link>
                <Link className={this.getActive('myOrder')} to="/sale">
                    <span className="">约惠</span>
                </Link>
                <Link className={this.getActive('myOrder')} to="/myOrder">
                    <span className="">购物车</span>
                </Link>
                <Link className={this.getActive('myOrder')} to="/myOrder">
                    <span className="">我的</span>
                </Link>
            </nav>

        )
    }
}
//定义默认属性
FooterComponent.defaultProps={

}
export default FooterComponent