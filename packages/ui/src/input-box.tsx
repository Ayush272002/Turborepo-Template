import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputBoxProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ placeholder, onChange }: InputBoxProps) => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        type="text"
        onChange={onChange}
      />
    </Box>
  );
};
