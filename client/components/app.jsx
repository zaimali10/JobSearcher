import React from 'react';
import $ from 'jquery';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: 'lol'
        }
    }


    componentDidMount() {
        serverCommunicator.getJobs()
            .done(data => {
                this.setState({
                    jobs: data
                })
            });
        }

    render() {
        return(
            <div>
                {this.state.jobs}
            </div>
        )
    }

};

var serverCommunicator = {
    getJobs: () => {
      console.log('getJobs was invoked...');
      return $.ajax({
        url: `http://localhost:3050/jobs/retrieve`,
        method: 'GET',
        success: (data) => {
          console.log('We got the jobs', data);   
          return data;
        },
        error: (err) => {
          console.log('Failed to GET from server', err);
        }
      });
    }
  };

export default App;