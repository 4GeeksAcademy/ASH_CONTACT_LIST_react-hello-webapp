const urlAPI4geeks = 'https://playground.4geeks.com/contact/agendas/agenda_agu' //incluye endpoint agendas + slug

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerContactos: () => {
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
		
			crearContacto: (name, phone, email, address) => {
				fetch(urlAPI4geeks+'/contacts', {
					method:'POST',
					body: JSON.stringify(
						{"name": name,
						"phone": phone,
						"email": email,
						"address": address}),
					headers:{"Content-Type": "application/json"}
				})
				.then(response => {
					if (response.status === 201) {
						return response.json();
					}
					return false; 
				})
				.then((data)=> {
					if (data) {
						const store = getStore();
						setStore({agenda: [...store.agenda, data]});
						return null;
					}
					alert("no hubo respuesta");
				})
				.catch((error)=> console.log(error))

			},

			editarContacto: (id, name, phone, email, address) => {
				fetch(urlAPI4geeks+'/contacts/'+id, {
					method:'PUT',
					body: JSON.stringify(
						{"name": name,
						"phone": phone,
						"email": email,
						"address": address}),
					headers:{"Content-Type": "application/json"}
				})
				.then(response => {
					if (response.status === 200) {
						return response.json();
					}
					return false; 
				})
				.then((data)=> {
					if (data) {
						const store = getStore();
						setStore({
							agenda: store.agenda.map(item => 
								item.id === id ? { ...item, name, email, phone, address } : item)});
						console.log(data); 
						return null;
					}
					alert("no hubo nada");
				})
				.catch((error)=> console.log(error))
			},
		
			borrarContacto: (id) => {
				if (window.confirm("Si eliminas el contacto podrias generar un vacio en el espacio tiempo, estas seguro de seguir adelante con esto?")) {
				fetch(urlAPI4geeks+'/contacts/'+id, {
					method:'DELETE',
					headers:{"Content-Type": "application/json"}
				})
				.then(response => {
					console.log(response);
					if (response.status === 204) {
						return response;
					}
					return false;
				})
				.then((data)=>{
					if (data) {      
						const store = getStore();
						setStore({
							agenda: store.agenda.filter(item => item.id !== id)});
						console.log(data); 

						// setList(list.filter(item => item.id !== id)); 
						return null;
					}
					alert("no hubo DATO");
				})
				.catch((error)=> console.log(error))
			}},
		



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