import { useState } from "react";

export const useForm = () => {

  const [formState, setFormState] = useState({
    title: '',
    description: ''
  });

  const onInputChange = e => {
    setFormState({
      ...formState,
      [ e.target.name ] : e.target.value
    });
  } 

  const onResetForm = () => {
    setFormState({
      title: '',
      description: ''
    });
  }

  return {
    formState,
    setFormState,
    onInputChange,
    onResetForm
  }
}
