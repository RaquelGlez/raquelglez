"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "../../styles/contact.module.css";
import { contactSchema } from "@/utils/validations/contactSchema";
import { sendEmail } from "@/utils/resend";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendEmail(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", subject: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <div className={`w-3/4 md:w-3/5 md:m-8 m-16 ${styles.formContainer}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col gap-x-4 md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col mt-4">
            <label
              htmlFor="name"
              className={`mb-2 ${styles.labelInput} ${
                watch().name !== undefined && watch().name?.length !== 0
                  ? styles.labelInput_visible
                  : styles.labelInput_hidde
              }`}
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              {...register("name")}
              className={`${styles.input} ${styles.space}`}
            />
            {errors.name?.message && (
              <span
                className={`${styles.labelError} ${
                  errors.name?.message && styles.labelError_visible
                } `}
              >
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col mt-4">
            <label
              htmlFor="email"
              className={`mb-2 ${styles.labelInput} ${
                watch().email !== undefined && watch().email?.length !== 0
                  ? styles.labelInput_visible
                  : styles.labelInput_hidde
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
              className={`${styles.input} ${styles.space}`}
            />
            {errors.email?.message && (
              <span
                className={`${styles.labelError} ${
                  errors.email?.message && styles.labelError_visible
                } `}
              >
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>
        <label
          htmlFor="subject"
          className={`mb-2 mt-4 ${styles.labelInput} ${
            watch().subject !== undefined && watch().subject?.length !== 0
              ? styles.labelInput_visible
              : styles.labelInput_hidde
          }`}
        >
          Asunto
        </label>
        <input
          type="subject"
          id="subject"
          placeholder="Asunto"
          {...register("subject")}
          className={`${styles.input} ${styles.space}`}
        />
        {errors.subject?.message && (
          <span
            className={`${styles.labelError} ${
              errors.subject?.message && styles.labelError_visible
            } `}
          >
            {errors.subject?.message}
          </span>
        )}
        <label
          htmlFor="message"
          className={`mb-2 mt-4 ${styles.labelInput} ${
            watch().message !== undefined && watch().message?.length !== 0
              ? styles.labelInput_visible
              : styles.labelInput_hidde
          }`}
        >
          Mensaje
        </label>
        <textarea
          id="message"
          placeholder="Mensaje"
          {...register("message")}
          className={`${styles.textArea} ${styles.space}`}
        />
        {errors.message?.message && (
          <span
            className={`${styles.labelError} ${
              errors.message?.message && styles.labelError_visible
            } `}
          >
            {errors.message?.message}
          </span>
        )}
        <div className="mx-auto mt-10 mb-6">
          <button type="submit" className={styles.button_form}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
