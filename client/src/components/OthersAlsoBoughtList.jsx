import React from 'react';
import style from '../style/OthersAlsoBoughtList.scss';
import OthersAlsoBoughtListEntry from './OthersAlsoBoughtListEntry.jsx';


class OthersAlsoBoughtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx:0,
      relatedProdcuts: [],
      currentImg: [],
      li0: [true, 0],
      li1: [false, 1],
      li2: [false, 2],
      li3: [false, 3]
    }
    this.handleSlideRight = this.handleSlideRight.bind(this);
    this.handleSlideleft = this.handleSlideleft.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  handleSlideRight(e) {
    e.preventDefault();
    let target = 'li' + (this.state.currentIdx+1)
    this.setState({
      currentIdx: this.state.currentIdx+1,
      li0: [false, 0],
      li1: [false, 1],
      li2: [false, 2],
      li3: [false, 3],
      [target]: [true, this.state.currentIdx+1],
    }, () => {
      console.log(this.state);
    })
  }

  handleSlideleft(e) {
    console.log('hi');
    e.preventDefault();
    let target = 'li' + (this.state.currentIdx-1)
    this.setState({
      currentIdx: this.state.currentIdx-1,
      li0: [false, 0],
      li1: [false, 1],
      li2: [false, 2],
      li3: [false, 3],
      [target]: [true, this.state.currentIdx-1],
    })
  }

  handleLiClick(e) {
    let { id } = e.target
    let num = id[2];
    this.setState({
      li0: [false],
      li1: [false],
      li2: [false],
      li3: [false],
      [id]: [true, num],
      currentIdx: num
    });
  }
  render() {

    let moveWithArrow = {
      'display': 'flex',
      'position': 'relative',
      'maxWidth': '1366px',
      'width': '100%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'transform': `translatex(-${this.state.currentIdx*100}%)`,
      'transition': 'transform ease-out 0.2s'
    }


    return(
      <div className={style.list_row}>
        <div className={style.col}>


          <div className={style.list_wrapper}>
            <div className={style.right_arrow}>
                <svg onClick={(e) => {this.handleSlideRight(e)}} className={style.arrow_icon} viewBox="0 0 10 24" width="5%" height="5%"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M2 5.5L8.5 12 2 18.5"></path></svg>
            </div>
            <div className={style.left_arrow}>
              <svg onClick={(e) => {this.handleSlideleft(e)}} className={style.arrow_icon}id="arrow-left" viewBox="0 0 10 24" width="100%" height="100%"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M8 5.5L1.5 12 8 18.5"></path></svg>
            </div>
            <div style={moveWithArrow}>
              {this.props.items.map((item, index) => {
                return <OthersAlsoBoughtListEntry className={style.test} item={item} key={index}/>
              })}
            </div>
          </div>
          <div>
              <ul className={style.li_indicator_wrapper}>
                <li className={style.li_indicator_item}>
                  <span id='li0'
                  value='0'
                  onClick={(e) => {this.handleLiClick(e)}}
                  className={this.state.li0[0] === true ? style.li_indicator_dot_selected : style.li_indicator_dot}></span>
                </li>
                <li className={style.li_indicator_item}>
                  <span id='li1'
                    onClick={(e) => {this.handleLiClick(e)}}
                    className={this.state.li1[0] === true ? style.li_indicator_dot_selected : style.li_indicator_dot}></span>
                </li>
                <li className={style.li_indicator_item}>
                  <span id='li2'
                    onClick={(e) => {this.handleLiClick(e)}}
                    className={this.state.li2[0] === true ? style.li_indicator_dot_selected : style.li_indicator_dot}></span>
                </li>
                <li className={style.li_indicator_item}>
                  <span id='li3'
                    onClick={(e) => {this.handleLiClick(e)}}
                    className={this.state.li3[0] === true ? style.li_indicator_dot_selected : style.li_indicator_dot}></span>
                </li>
              </ul>
            </div>
        </div>

      </div>
    )
  }
}

export default OthersAlsoBoughtList