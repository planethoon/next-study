import React from "react";
import useInput from "./useInput";

export default function useSignup() {
  const [email, onChangeEmail, isEmptyEmail] = useInput();
  const [password, onChangePassword, isEmptyPassword] = useInput();
  const [validatePassword, onChangeValidatePassword, isEmptyValidatePassword] =
    useInput();

  return {
    email,
    onChangeEmail,
    isEmptyEmail,
    password,
    onChangePassword,
    isEmptyPassword,
    validatePassword,
    onChangeValidatePassword,
    isEmptyValidatePassword,
  };
}
