
var imgUrl = require('../../images/sale2.jpg');
import $ from 'jquery'
import Fetch from '../fetch'
import PublicComponent from './PublicComponent.js';

class SaleComponent extends React.Component { 
    constructor(props,context){
        super(props,context)

        this.state={
            flash_list:[]
        }
    }
    getSale(){
        let that = this;
        //方法一用Fetch方法获取数据。
        Fetch.Get('http://localhost:9000/api/promotion/todayFlashGoods?page=1&_='+Date.now(),{
        }).then(res=>{return res.json()}).then(json=>{
            console.log(json.data.flash_list[0].list);
            this.setState({flash_list:json.data.flash_list[0].list});
        })
        // https://restapi.ele.me/shopping/v3/hot_search_words?latitude=40.11722&longitude=116.25003/
       /* console.log(1222);
       //方法二用jqerty方法获取数据。
       $.ajax({
           //http://touch.daling.com/api/promotion/todayFlashGoods?page=1&_=1505912519357
            url:'http://localhost:9000/api/promotion/todayFlashGoods?page=1&_='+Date.now(),
            success(results){
                console.log(33);
                console.log(results);
                //that.setState({news:results.data})
            },
            error:function (err) {
                console.log('error:')
                console.log(err)
            }
        })*/
    }
    componentWillMount(){
       this.getSale();
    }
    showFlashGoods(){
        let that = this
        let arr = []
        this.state.flash_list.forEach((item,i)=>{
           /* arr.push(<div className="goods">
                <div className="picture">
                    <img src={item.pc_default_image}/>
                    <p>热销</p>
                </div>
                <h1> {item.goods_show_name}</h1>
                <h2>  {item.goods_show_desc}</h2>
                <div className="bottom">
                    <div><span> 约惠 还剩26分钟</span><p><em>￥{item.price}</em><i>￥{item.old_price}</i></p></div>
                    <a><p><span>{item.total_sales_num}人</span><i>加入购物车</i></p><em></em></a>
                </div>
            </div>);*/
            arr.push(
                <PublicComponent item={item}/>
            );
        })
        return arr;
    }
    render(){
        return (
            
        <div className="sale">
            <h6 className="title">
                <span className="active">今日特惠</span>
                <span>约会预告</span>
            </h6>
            <div className="today">
                <div className="start">
                    <p>
                        <i></i>
                        <span>闪购专场 已经开抢</span>
                    </p>
                </div>
                <div className="goodList">
                {this.showFlashGoods()}
                   {/* <div className="goods">
                        <div className="picture">
                            <img src={imgUrl}/>
                            <p>热销</p>
                        </div>
                        <h1> 国货精选·保护我的芊芊玉手</h1>
                        <h2>  [SweetPink]牛油果深层滋润护手霜</h2>
                        <div className="bottom">
                            <div><span> 约惠 还剩26分钟</span><p><em>￥20.00</em><i>￥30.00</i></p></div>
                            <a><p><span>2193人</span><i>加入购物车</i></p><em></em></a>
                        </div>
                    </div>
                    */}
                    <div className="last">
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}


//定义默认属性
SaleComponent.defaultProps={
    
    }
    
    
    
 export default SaleComponent