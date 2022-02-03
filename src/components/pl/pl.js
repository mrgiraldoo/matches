import React from 'react';
import axios from 'axios';
import Env from '../env';
import Date from '../date';


export default class PlMatchList extends React.Component {
  state = {
    matches: []
  }
  
  componentDidMount() {
    const key = Env()
    const date = Date()
    const toDate = date.toDate
    const fromDate = date.fromDate

    console.log(fromDate)
    console.log(toDate)

    const headers = {
        'X-Auth-Token': key
    }
    axios.get('https://api.football-data.org/v2/competitions/PL/matches?dateFrom='+fromDate+'&dateTo='+toDate, {headers})
      .then(res => {
        console.log(res.data)
        const matches = res.data.matches;
        this.setState({ matches });
        
      })
  }

  render() {
    return (
      <div>
        <table>
        <tr>
          <th>Match Date</th>
          <th>Home Team - Visitor</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
        {this.state.matches.map(match => {
          return (
            <tr>
              <td>{match.utcDate}</td>
              <td>{match.homeTeam.name} - {match.awayTeam.name}</td>
              <td>{match.score.fullTime.homeTeam}:{match.score.fullTime.awayTeam}</td>
              <td>{match.status}</td>
            </tr>
          )
        })}
      </table>
      </div>
    )
  }
}
