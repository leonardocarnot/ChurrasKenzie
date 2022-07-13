import { Container, InputContainer } from "./style";

export const ThemeSelect = ({
  children,
  label,
  name,
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
        <select {...register(name)} {...rest}>
          {children}
        </select>
      </InputContainer>
    </Container>
  );
};
