import React from 'react';
import style from '../style/OthersAlsoBoughtListEntry.scss';

class OthersAlsoBoughtListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false
    }
    this.handleLikeStatus = this.handleLikeStatus.bind(this);
  }

  handleLikeStatus(e) {
    e.preventDefault;
    this.setState({
      likeStatus: !this.state.likeStatus
    })
  }

  render() {
    return(
      <div className={style.item_wrapper}>
        <div className={style.card_container}>
            <div className={style.image_wrap}>
              <img className={style.product_img} src={this.props.item.imageUrl[0]} alt="prodcut image"/>
                {!this.state.likeStatus ? 
                  <svg className={style.img_heart} onClick={(e) => this.handleLikeStatus(e)} id="wishlist-inactive" viewBox="0 0 20 24" width="7%" height="100%"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg> :
                  <svg className={style.img_heart} onClick={(e) => this.handleLikeStatus(e)} id="wishlist-active" viewBox="0 0 20 24" width="7%" height="100%"><path fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
                }
            </div>

          <div className={style.prodcut_card_detail_container}>

              <div className={style.product_detail_wrapper}>
                <div className={style.product_detail_top}>
                  {this.props.item.subClasses}
                </div>

                <div className={style.product_detail_bottom}>
                  <div className={style.product_name}>
                    {this.props.item.productName}
                  </div>
                  <div className={style.product_price}>
                    ${this.props.item.price}
                  </div>
                </div>

                <div className={style.stars}>
                  <div className={style.emptyStars}></div>
                  <div className={style.fullStars}></div>
                </div>

              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default OthersAlsoBoughtListEntry;