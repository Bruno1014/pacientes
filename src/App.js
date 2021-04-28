import React, {Component} from 'react';


class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      items:[],
      isLoaded : false,
    }
  }

  componentDidMount_old(){
    fetch('http://localhost:8080/paciente')
    .then(res => res.json())
    .then(json => {
        this.setState({
            items: json,
            isLoaded: true, 
            
        })
    }).catch((err) => {
        console.log(err);
    });

  }
  componentDidMount() {
    // GET request using fetch with set headers
    const headers = {Accept: 'application/json','Content-Type': 'application/x-www-form-urlencoded'
    ,Authorization:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2FtcG9zQGJjYW1wb3MuY29tIiwiZXhwIjoxNTkxNjIyMDUxfQ.Xv1GVXNbXCoY9n3Y3Og0o9sPjCck2IAHCLx0I9mR1Wq3EcuS5Byhme19NfUBFja34bVpujzbboTYK0V6_HFQkQ'}
    fetch('http://localhost:8080/paciente', { headers })
        .then(res =>  res.json())
        .then(json => {
          this.setState({
              items: json,
              isLoaded: true, 
          })
      }).catch((err) => {
        console.log(err);
    });
  }

      render(){
        
        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                           Name: {item.username }  Login:{item.password}
                        </li>
                    ))}
                </ul>
            </div>
        );
}
}

export default App;