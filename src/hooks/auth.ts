import { writable } from 'svelte/store';
import axios from 'axios';

import { browser } from '$app/env'
import type { string } from 'yup';

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

export const registerUser = async (username: string, firstname: string, lastname: string, email: string, password: string) => {
	let headersList = {
		"Accept": "*/*",
		"Content-Type": "application/api.vnd+json"
	}

	let bodyContent = JSON.stringify({
		"username": username,
		"first_name": firstname,
		"last_name": lastname,
		"email": email,
		"password": password
	});

	return fetch("http://127.0.0.1:8000/signup/", {
		method: "POST",
		body: bodyContent,
		headers: headersList
	}).then(function (response) {
		if (response.status != 201) {
			return 'error'
		} else {
			return response.text();
		}
	}).then(function (data) {
		return data;
	})

}

export const getUserDetails = async (user: string, pass: string) => {
	//let data = JSON.stringify({username: user, password: pass});
	//console.log(user + ' ' + pass);

	let headersList = {
		"Accept": "*/*",
		"Content-Type": "application/api.vnd+json"
	}

	let bodyContent = JSON.stringify({
		"username": user,
		"password": pass
	});

	return fetch("http://127.0.0.1:8000/login/", {
		method: "POST",
		body: bodyContent,
		headers: headersList
	}).then(function (response) {
		if (response.status != 201) {
			return 'error'
		} else {
			return response.text();
		}
	}).then(function (data) {
		return data;
	})
}