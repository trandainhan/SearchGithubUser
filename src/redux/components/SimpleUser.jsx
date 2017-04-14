import React from 'react'
import { withHandlers } from 'recompose'

var SimpleUser = ({user, onSelect}) => (
	<div className="simple-user" onClick={onSelect} >
	  <img role="presentation" src={user.avatar_url} />
		<p>{user.login}</p>
	</div>
)

SimpleUser.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func
}

const enhancer = withHandlers({
	onSelect: props => () => {
		props.onSelect(props.user)
	}
})

export default enhancer(SimpleUser)
