import { Container, InputContainer } from "./style";

export const ThemeInput = ({
  label,
  name,
  placeholder,
  error,
  register,
  
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <input placeholder={placeholder}  {...register(name)} {...rest}></input>
      </InputContainer>
    </Container>
  );
};
