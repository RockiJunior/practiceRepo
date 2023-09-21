import './App.css';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const App = () => {
	const [socket, setSocket] = useState(null);

	// useEffect(() => {
	// 	const socket = io('http://localhost:9001');
	// 	console.log('se conecto el primer useEffect');
	// 	socket.emit('message', 'Hola desde el cliente');
	// }, []);

	// useEffect(() => {
	// 	const socket = io('http://localhost:9001');
	// 	console.log('se conecto el segundo useEffect');
	// 	socket.on('chat_message', (msg) => {
	// 		console.log(msg);
	// 	});
	// }, []);

	useEffect(() => {
		// Crea una instancia de socket solo una vez
		const newSocket = io('http://localhost:9001');
		setSocket(newSocket);

		console.log('se conecto el primer useEffect');

		// Limpia la conexión al desmontar el componente
		return () => {
			newSocket.disconnect();
		};
	}, []);

	useEffect(() => {
		if (socket) {
			console.log('se conecto el segundo useEffect');
			socket.on('chat_message', (msg) => {
				console.log(msg);
			});
		}
	}, [socket]);

	const sendMessage = () => {
		if (socket) {
			socket.emit('message', 'Hola desde el cliente');
		}
	};

	return (
		<div className="App">
			<button onClick={sendMessage}>Enviar Mensaje</button>
			HOLA
		</div>
	);
};
