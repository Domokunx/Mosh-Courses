import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18)
})

// To allow autocompletion for error handling
type FormData = z.infer<typeof schema>;

const Form = () => {
      // For accessing input fields, set ref attribute in input
      const nameRef = useRef<HTMLInputElement>(null); 
      const ageRef = useRef<HTMLInputElement>(null);
      const person = {
        name: '',
        age: 0
      }

      // You can also use state hook to access input field
      // But set the input field value to itself to avoid out of sync update
      const [person2, setPerson] = useState({
        name: '',
        age: 0
      })

      // Can also use react-hook-form library + Zod
      const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver : zodResolver(schema)}); // Kinda of like a class or factory function
      const name = register('name') // Register function returns and object with HTML attributes
      const age = register('age', { valueAsNumber: true })

      const onSubmit = (data: FieldValues) => {
          console.log(data)
      }
  return (
    //div.mb-3>label.form-label+input.form-control
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {" "}
          Name{" "}
        </label>
        <input className="form-control" type="text" id="name" {...name} />
      </div>
      {errors.name && <p className="text-danger">{errors.name.message}</p>}

      <div className="mb-3">
        <label htmlFor="h" className="form-label">
          {" "}
          Age{" "}
        </label>
        <input id="age" type="number" className="form-control" {...age} />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
