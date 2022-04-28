import { writable } from 'svelte/store';
import axios from 'axios';

const user = '';
const pass = '';

export const store = writable(null);

let sessions = []

export const getUserDetails = async ( user: string, pass: string ) => {
	//let data = JSON.stringify({username: user, password: pass});
	console.log(user + ' ' + pass);
	/*const response = await fetch('http://127.0.0.1:8000/login/', {method: 'POST',  credentials: 'same-origin',
	headers: {
	  'Authorization': 'false',
	  'Access-Control-Request-Method': 'POST',
	  'Content-Type': 'application/vnd.api+json'
	}, body: data });*/
	let headersList = {
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.com)",
		"Content-Type": "application/vnd.api+json" 
	   }
	   
	   let bodyContent = JSON.stringify({
		   "username": "trhod17",
		   "password": "W3terh0rse"
	   });
	   
	   let reqOptions = {
		 url: "http://127.0.0.1:8000/login/",
		 method: "POST",
		 headers: headersList,
		 body: bodyContent,
	   }
	   
	   axios.request(reqOptions).then(function (response) {
		 console.log(response.data);
	   })
}