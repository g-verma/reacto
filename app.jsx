const EventPass = React.createClass({
handleClick() {
	if (this.inputRef.checkValidity()) {
	console.log(`now passing ${this.inputRef.value}`);
	}
	},
render() {
		return (
			<div>
			<input type="email" ref={inputRef => this.inputRef = inputRef} />
			<button onClick={this.handleClick}>Save</button>
			</div>
			);
			}
})


ReactDOM.render(
<EventPass />, 
document.getElementById("root"));