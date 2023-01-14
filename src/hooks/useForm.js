import { useState } from "react";

export const useForm = () => {

const [formState, setFormState] = useState({});

  const onInputChange = e => {
    setFormState({
      ...formState,
      [ e.target.name ] : e.target.value
    });
  } 

  return {
    formState,
    setFormState,
    onInputChange
  }
}
