  function MyApp(props){
        return (
            <div>
            	 <h1>{props.title}</h1>
                <h2>Good Morning: {props.name}</h2>
            </div>

        ) 
    }
    













    ReactDOM.render(
        <MyApp title = "Welcome to World Of ReactJs" name = "John"/>,
        document.getElementById("root")
    )