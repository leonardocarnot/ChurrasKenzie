import { Container, InputContainer } from "./styles";


export const ThemeTextArea = ({
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
        <textarea placeholder={placeholder} {...register(name)} {...rest}></textarea>
      </InputContainer>
    </Container>
  );
};
