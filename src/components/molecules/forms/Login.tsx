import Input from "../../atoms/inputs/Input";
import Button from "../../atoms/buttons/Button";
import React, { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<{email: string, password: string}>({email: '', password: ''})
  const [showErrors, setShowErrors] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>)=>{
    e.preventDefault()
    if(!formData.email || !formData.password){
      setShowErrors(true)
      return
    }
    setShowErrors(false)
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Email" type="email" placeholder="Enter email" onChange={handleChange} name="email" error={showErrors && !formData.email ? 'Email is required': ''}/>
      <Input label="Password" type="password" placeholder="Enter password" onChange={handleChange} name="password" error={showErrors && !formData.password ? 'Password is required': ''}/>
      <Button title="Login" type="submit" loading={loading} variant="primary" loadingText="Loging in..."/>
    </form>
  );
}