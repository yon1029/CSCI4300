"use client";
import { useState } from 'react';
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 

interface SignupProps {
  onAddUser: (newUser: any) => void;
}

export default function Signup( {onAddUser} : SignupProps) {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Username and password are required!');
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      password,
      imageUrl: imageUrl || 'https://via.placeholder.com/100',
    };

    onAddUser(newUser);
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageUrl('');
  };

  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
       <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form>
         <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <label htmlFor="imageLink">Image Link</label>
          <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="imageLink"
            type="url"
            placeholder="Enter image URL"
          />
  
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
      </div>
    );
  }
  