import React from "react";

export default class FetchUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    this.setState({ people: data.data, loading: false });
  }

  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }


    return (
      <div>
        {this.state.people.map(person => (
          <div style={{backgroundColor: "lightblue", width: "200px", margin: "30px"}} key={person.first_name + person.last_name}>
            <div>{person.email}</div>
            <div>{person.first_name}</div>
            <div>{person.last_name}</div>
            <img src={person.avatar} />
          </div>
        ))}
      </div>
    );
  }
}
