import Select, { type SelectProps } from "@mui/material/Select";

export interface DropdownProps<T = unknown> {
  value: SelectProps<T>["value"];
  onChange?: SelectProps<T>["onChange"];
  disabled?: boolean;
  error?: boolean;
  id?: string;
  native?: boolean;
  children?: React.ReactNode;
  dataTestid?: string;
}

export const Dropdown = <T,>({
  value,
  onChange,
  disabled,
  error,
  id,
  native = false,
  children,
  dataTestid
}: DropdownProps<T>) => {
  return (
    <Select
      id={id}
      data-testid={dataTestid}
      variant="outlined"
      disabled={disabled}
      native={native}
      value={value}
      onChange={onChange}
      error={error}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      }}
    >
      {children}
    </Select>
  );
};
