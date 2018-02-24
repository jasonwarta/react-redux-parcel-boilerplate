import React, { Component } from 'react';

import styles from './App.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentWillMount() {}

	render() {
		console.log(styles);
		return (
			<div className={styles.App}>
			<p className={styles.AppMsg}>
				Hello World
			</p>
			</div>
		);
	}

	componentDidMount() {}

	componentWillReceiveProps() {}

	shouldComponentUpdate() { return true; }

	componentWillUpdate() {}

	componentDidUpdate() {}

	componentWillUnmount() {}

	componentDidCatch() {}
}

App.defaultProps = {
	
};

App.displayName = 'App';

export default App;