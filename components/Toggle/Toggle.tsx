import React, {Component} from "react";
import OpenIcon from "../Icons/OpenIcon"
import CollapsedIcon from "../Icons/CollapsedIcon"

export interface Props {
  collapsed: boolean;
}

class Toggle extends React.Component<Props> {
	
	render() {
		return (
			<>
				{this.props.collapsed ? (
					<CollapsedIcon className="" />
				) : (
					<OpenIcon className="" />
				)}
				
				
				
			</>
		);
	}
}

// TODO: Aria
/*
<aria-hidden
	className={`${
		this.props.collapsed
			? "fas fa-caret-right fa-xs"
			: "fas fa-caret-down fa-xs"
	}`}
/>
*/

export default Toggle;
