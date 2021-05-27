import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import {FormattedMessage} from 'react-intl';
import {FormattedDate} from 'react-intl';
const axios = require('axios');

const urls = {
  'en': "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json",
  'es': "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json"
}

const language = navigator.language.split("-")[0];

const getSeries = () => {
  return axios.get(urls[language])
    .then(response => {
      return response.data;
    })
    .then(data => {
      return data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

class SeriesTable extends Component {

  state = {
    all: [],
    current: {}
  };

  setCurrentSeries = currentSeries => {
    this.setState({current: currentSeries});
  };

  setAllSeries = allSeries => {
    this.setState({all: allSeries});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.all !== this.state.all;
  }

  series = getSeries().then(data => {this.setAllSeries(data)});

  render() {

    return (
      <div>
        <Table striped bordered>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Name"/></th>
              <th scope="col"><FormattedMessage id="Channel"/></th>
              <th scope="col"><FormattedMessage id="Seasons"/></th>
              <th scope="col"><FormattedMessage id="Episodes"/></th>
              <th scope="col"><FormattedMessage id="Release Date"/></th>
            </tr>
          </thead>
          <tbody>
            {this.state.all.map(s => (
              <tr key={s.id}
              onMouseEnter={
                () => this.setCurrentSeries(this.state.all.find(x => x.id === s.id))
                }
              onClick={
                () => this.props.onUpdateSeries(this.state.current)
              }>
                <th scope="row">{s.id}</th>
                <td>{s.name}</td>
                <td>{s.channel}</td>
                <td>{s.seasons}</td>
                <td>{s.episodes}</td>
                <td>
                <FormattedDate
                  value={new Date(s.release.split("/")[2],
                                  parseInt(s.release.split("/")[1])-1,
                                  s.release.split("/")[0])}
                  year='numeric'
                  month='numeric'
                  day='numeric'
                />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default SeriesTable;