import useInput from "hooks/useInput";
import React from "react";
import Signup from "components/Signup";
import useSignup from "hooks/useSignup";

function SignupPage() {
  const {
    email,
    onChangeEmail,
    isEmptyEmail,
    password,
    onChangePassword,
    isEmptyPassword,
    validatePassword,
    onChangeValidatePassword,
    isEmptyValidatePassword,
  } = useSignup();

  return (
    <div>
      <Signup
        title="이메일"
        inputType="email"
        value={email}
        onChange={onChangeEmail}
        isEmpty={isEmptyEmail}
      />
      <Signup
        title="비밀번호"
        inputType="password"
        value={password}
        onChange={onChangePassword}
        isEmpty={isEmptyPassword}
      />
      <Signup
        title="확인"
        inputType="password"
        value={validatePassword}
        onChange={onChangeValidatePassword}
        isEmpty={isEmptyValidatePassword}
      />
      <button
        disabled={isEmptyEmail || isEmptyPassword || isEmptyValidatePassword}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignupPage;
