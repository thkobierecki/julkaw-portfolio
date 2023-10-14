import theme from "@/styles/theme";
import SectionHeading from "../SectionHeading";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { nunito } from "@/app/fonts";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  width: 100%;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  background-color: ${({theme}) => theme.colors.white}
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  background-color: ${({theme}) => theme.colors.white}
`;

const FormButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ color }) => color};
  color: #fff;
  border: 2px solid ${({ color }) => color};
  border-radius: 6px;
  cursor: pointer;
  min-width: 80px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
    transition: all 2s ease-in;
  }
`;

const Kontakt = ({color}: any) => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    // Send email using your preferred method (e.g., fetch, Axios, etc.)

    // Reset the form after submission
    reset();
  };
  return (
    <Container id="kontakt">
      <SectionHeading color={color}>
        Kontakt
      </SectionHeading>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormLabel className={nunito.className}>Imię</FormLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <FormInput {...field} type="text" required />
            )}
          />
        </div>
        <div>
          <FormLabel className={nunito.className}>E-mail</FormLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormInput {...field} type="email" required />
            )}
          />
        </div>
        <div>
          <FormLabel className={nunito.className}>Wiadomość</FormLabel>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <FormTextarea {...field} rows={5} required />
            )}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <FormButton type="submit" color={color}>Wyslij</FormButton>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Kontakt;
