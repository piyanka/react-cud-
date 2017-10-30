import from 'lodash';
import TodosListHeader from './todos-list-header';


export default class TodosList extends React.Component {
	render() {
		return (
			<table>
				<TodosListHeader />
				<tr>
					{this.renderItems()}
				</tr>

				</table>

		);
	}
}