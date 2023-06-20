import axios from 'axios'

export function setAuthHeader(token) {
  localStorage.setItem('token', token ? token : '');
  console.log("set")
}