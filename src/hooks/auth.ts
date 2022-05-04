import { writable } from 'svelte/store';
import axios from 'axios';

import { browser } from '$app/env'

let sessions = []
let _user;
if (browser) {
	_user = localStorage.getItem('store');
}
export const store = writable(_user ? JSON.parse(_user) : null);
if (browser) {
	store.subscribe((value) => {
		if (value) localStorage.setItem('store', JSON.stringify(value));
		else localStorage.removeItem('store'); // for logout
	});
}

export let username;

export const getUserDetails = async (user: string, pass: string) => {
	//let data = JSON.stringify({username: user, password: pass});
	//console.log(user + ' ' + pass);

	let headersList = {
		"Accept": "*/*",
		"Content-Type": "application/api.vnd+json"
	}

	username = user;

	let bodyContent = JSON.stringify({
		"username": user,
		"password": pass
	});

	return fetch("http://127.0.0.1:8000/login/", {
		method: "POST",
		body: bodyContent,
		headers: headersList
	}).then(function (response) {
		return response.text();
	}).then(function (data) {
		return data;
	})
}