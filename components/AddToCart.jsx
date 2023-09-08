"use client"
export default function AddToCart () {
  const token = JSON.parse(sessionStorage.getItem('user_token')).key;
  fetch('http://localhost:8888')
}