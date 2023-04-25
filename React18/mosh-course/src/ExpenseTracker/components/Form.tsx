import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "./categories"

const schema = z.object({
  description: z.string().min(3, "Description should be at least 3 characters"),
  amount: z.number({
    required_error: "Amount is required.",
    invalid_type_error: "Amount is required",
  }),
  category: z.enum(categories, {errorMap: () => ({ message: "Category is required" })}),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const Form = ({ onSubmit }: Props) => {
  // Input Fields
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const preSubmit = (data: FieldValues) => {
    resetField("description");
    resetField("amount");
    resetField("category");
    onSubmit(data);
  };

  return (
    <>
      <form id="expense-form" onSubmit={handleSubmit(preSubmit)}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="form-control"
              {...register("description")}
            />
          </div>
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              className="form-control"
              {...register("amount", { valueAsNumber: true })}
            />
          </div>
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              defaultValue={""}
              id="category"
              className="form-select mb-3"
              {...register("category")}
            >
              {categories.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}

          <div className="mb3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="mb-3"></div>
    </>
  );
};

export default Form;
