const urlAPI4geeks = 'https://playground.4geeks.com/contact/agendas/agenda_agu' //incluye endpoint agendas + slug

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerAgenda: () => {
				fetch(urlAPI4geeks+'/contacts', {
					method:'GET',
					headers:{"Content-Type": "application/json"}
				})
				.then((response)=> { 
					if (response.status === 422) {
						getActions().crearAgenda();
					}
					return response.json()})
				.then((data)=> setStore({agenda: data.contacts}))
				.catch((error)=> console.log(error))
			},
		
			crearAgenda: () => {
				fetch(urlAPI4geeks, {
					method:'POST',
					headers:{"Content-Type": "application/json"}
				})
				.then((response)=> response.json())
				.catch((error)=> console.log(error))
			},
		




			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
