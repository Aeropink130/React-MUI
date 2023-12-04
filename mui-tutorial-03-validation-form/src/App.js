import { useForm } from "react-hook-form"
import Test from "./Test";
import { Button, TextField, Typography } from "@mui/material";

function App() {

  const { register,
    handleSubmit,
    formState: { errors } } = useForm();
  return (
    <div >
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "300px",
        margin: "100px auto"
      }}
        onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? (
              <Typography>Invalid email</Typography>
            ) : null
          }
          type="email" {...register("email", {
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
          })} />
        <TextField
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password) ? (
              <Typography>Minimum length should be 5</Typography>
            ) : null
          }
          type="password" {...register("password", { minLength: 6, required: true })} />
        <Button disabled={Boolean(errors.email) || Boolean(errors.password)} variant="contained" type="submit">Submit</Button>
      </form>
    </div >
  );
}

export default App;
