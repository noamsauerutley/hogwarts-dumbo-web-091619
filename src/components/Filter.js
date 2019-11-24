import React from 'react'

const Filter = (props) => {
    
	return (
		<div className="filterWrapper">
			<div className="ui menu">
					<button onClick={props.toggleFilter}>
				            GREASY BOYS ONLY?!
                    </button>
                    <label>Current Grease Status: {`${props.greaseFilter}`}</label>
                    <select onChange={props.handleSelectChange} value={props.sortBy}>
                        <option value="Select">Select: </option>
                        <option value="name">Sort the Boys by Name?</option>
                        <option value="weight">Sort the Boys by Weight?</option>
                    </select>
			</div>
		</div>
	)
}

export default Filter