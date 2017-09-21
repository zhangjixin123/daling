var imgUrl = require('../../images/14238003939765.png');
class MyorderComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){

        return (
            <div className="myorder">
                <header>
                    <div>
                        <img src={imgUrl}/>
                         <a href="javascript:;">达令_7754864310</a>
                    </div>

                </header>
                <section>
                    <div className="top">
                        <h5>我的订单</h5>
                        <h6>全部订单</h6>
                    </div>
                    <ul>
                        <li><a href="#"><i></i><span>待付款</span></a></li>
                        <li><a href="#"><i></i><span>待收货</span></a></li>
                        <li><a href="#"><i></i><span>待评价</span></a></li>
                        <li><a href="#"><i></i><span>退货</span></a></li>
                    </ul>
                    <div className="purse">
                        <h6>我的钱包</h6>
                        <ol>
                            <li className="active"><a href="#"><i>0</i><span>领取优惠价</span></a></li>
                            <li><a href="#"><i>0</i><span>余额</span></a></li>
                            <li><a href="#"><i>0</i><span>达令币</span></a></li>
                        </ol>
                    </div>
                    <dl>
                       <dt>
                           <a href="#"><i></i><span>我的优惠券</span></a>
                           <a href="#"><span>领取优惠劵</span><em></em></a>
                       </dt>
                       <dd><a href="#"><i></i><span>我的收藏</span></a></dd>
                       <dd><a href="#"><i></i><span>我的地址</span></a></dd>
                       <dd><a href="#"><i></i><span>浏览记录</span></a></dd>
                    </dl>
                    <div className="last">
                    </div>
                </section>
            </div>
        )
    }
}
//定义默认属性
MyorderComponent.defaultProps={

}



export default MyorderComponent