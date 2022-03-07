import { css, useTheme } from "@emotion/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "./ui";
import Snackbar from "./ui/Snackbar";
import { useState } from "react";

export interface FormInputs {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required(),
    company: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp, {
      excludeEmptyString: true,
      message: "Not a valid phone number",
    }),
    message: yup.string().required(),
  })
  .required();

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"error" | "success">("success");
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.status === "FAIL") throw new Error();

      setSeverity("success");
      setMessage("Message was send successfully");
    } catch (error) {
      setSeverity("error");
      setMessage("Message was not sent");
    }
    setOpen(true);

    reset();
  };

  // css styles
  const theme = useTheme();
  const inputStyles = css`
    border: solid ${theme.colors.neutral} 2px;
    border-radius: 0.4rem;
    padding: ${theme.space[1]}rem;
    font-size: ${theme.fontSizes.normal}rem;
    &:focus {
      outline-style: auto;
      outline-color: ${theme.colors.primary};
      outline-width: initial;
      outline-offset: 0px;
    }
  `;
  const textareaStyles = css`
    ${inputStyles}
    height: 250px;
    ${theme.mq()[1]} {
      grid-column: 1 / -1;
    }
  `;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            display: grid;
            grid-gap: ${theme.space[2]}rem;
            ${theme.mq()[1]} {
              grid-template-columns: repeat(2, 1fr);
            }
          `}
        >
          <input
            css={css`
              ${inputStyles}
              &:focus {
                ${errors.name?.message && `outline-color: red;`}
              }
            `}
            type="text"
            {...register("name")}
            placeholder="Name *"
          />
          <input
            css={css`
              ${inputStyles}
              &:focus {
                ${errors.company?.message && `outline-color: red;`}
              }
            `}
            type="text"
            {...register("company")}
            placeholder="Company *"
          />
          <input
            css={css`
              ${inputStyles}
              &:focus {
                ${errors.email?.message && `outline-color: red;`}
              }
            `}
            type="email"
            {...register("email")}
            placeholder="Email *"
          />
          <input
            css={css`
              ${inputStyles}
              &:focus {
                ${errors.phone?.message && `outline-color: red;`}
              }
            `}
            type="tel"
            {...register("phone")}
            placeholder="Phone (optional)"
          />
          <textarea
            css={css`
              ${textareaStyles}
              &:focus {
                ${errors.message?.message && `outline-color: red;`}
              }
            `}
            {...register("message")}
            placeholder="Message *"
          ></textarea>
        </div>
        <Button type="submit">Say Hello</Button>
      </form>
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={5000}
        severity={severity}
        handleClose={handleClose}
      />
    </>
  );
};

export default ContactForm;
