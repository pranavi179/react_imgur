import React, { Component } from "react";



class ImageCard extends Component{
	constructor(props){
		super(props);
		this.displayTitle=this.displayTitle.bind(this);
	};
	
	
displayTitle(props){

	return <div>hi, {this.props.title}
</div>

}


render(){
 
return(

<div>
	<div>
		
				
		{
	
		}
		<div>{
			<div>
				<div width="300px">
					<div height="300px">
					<img src={this.props.src} width="240px" height="240px"/>

					<div>
					{this.props.title}
					</div>
					<div>
					<button name="Upvotes">	{this.props.upvotes}
					</button>
					<button name ="comments"> {this.props.comments}
					</button>
					<button name="views"> {this.props.views}
					</button>
					</div>

				</div>	
				</div>	
				</div>
		}</div>

	</div>
	</div>






);
}
}

export default ImageCard;