const EmailForm = React.createClass({
handleClick() {
	if (this.inputRef.checkValidity()) {
	console.log(`Email Ok. Saving Email as ${this.inputRef.value}`);
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
<EmailForm />, 
document.getElementById("root"));