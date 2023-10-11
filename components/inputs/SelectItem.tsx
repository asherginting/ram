import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";


type Props = {
  value: string | number;
  // onChange: (value: string | number) => void;
  onChange: any;
  options: { value: string | number; label: string }[];
  defaultValue?: string | number
  // handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // options: Option[]
  // children: ReactNode;
};

export default function SelectItem({ value, onChange, options, defaultValue }: Props) {
  const handleChange = (event: any) => {
    const selectedValue = event.target.value as string | number;
    onChange(selectedValue);
  };

  return (
    <div>
      <FormControl variant="standard">
        <Select value={value} onChange={handleChange} displayEmpty>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
