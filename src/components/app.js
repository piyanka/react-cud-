import React from 'react';
import TodosList from './todos-list';

const todos = [
{
	task : 'make react tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

export default class App extends React.Component {
	render(){
		return (
			<div><h1>React todos App</h1>
			< TodosList />
			</div>
		);
	}
}