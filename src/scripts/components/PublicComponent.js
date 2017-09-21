
import {Link} from 'react-router'

class PublicComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    render(){
        
        return (
            <div className="goods">
            <div className="picture">
                <img src={this.props.item.pc_default_image}/>
                <p>热销</p>
            </div>
            <h1> {this.props.item.goods_show_name}</h1>
            <h2>  {this.props.item.goods_show_desc}</h2>
            <div className="bottom">
                <div><span> 约惠 还剩26分钟</span><p><em>￥{this.props.item.price}</em><i>￥{this.props.item.old_price}</i></p></div>
                <a><p><span>{this.props.item.total_sales_num}人</span><i>加入购物车</i></p><em></em></a>
            </div>
        </div>
        )
    }
}
//定义默认属性
PublicComponent.defaultProps={

}



export default PublicComponent