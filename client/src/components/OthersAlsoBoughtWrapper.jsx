import React from 'react';
import OthersAlsoBoughtList from './OthersAlsoBoughtList.jsx';
import axios from 'axios';
import style from '../style/OthersAlsoBoughtWrapper.scss';

class OthersAlsoBoughtWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData() {
    axios
    .get('/api/othersAlsoBought')
    .then(({data}) => {
      let pick = [];
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * Math.floor(max - min) + min);
      };
      for (let i = 0; i < 16; i++) {
        pick.push(data[getRandomInt(0, data.length-1)]);
      }
      this.setState({
        data: pick
      });
    })
    .catch(err => console.log(err))
  };

  render() {
    return(
      <div className={style.container_OAB}>
        <div className={style.row}>
          <div className={style.col}>
            <h3>others also bought</h3>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <OthersAlsoBoughtList items={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default OthersAlsoBoughtWrapper;