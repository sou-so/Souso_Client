export const validate = values => {
  let errors = {};

  // name
  if (!values.name) {
    errors.name = '이름을 입력하세요.';
  } else if (values.name.length > 10) {
    errors.name = '10자 이하의 이름을 입력하세요.';
  }

  // nickname
  if (!values.nickname) {
    errors.nickname = '닉네임을 입력하세요.';
  } else if (values.nickname.length > 20) {
    errors.nickname = '20자 이하의 닉네임을 입력하세요.';
  }

  // phone_number
  if (!values.phone_number) {
    errors.phone_number = '휴대폰번호를 입력하세요.';
  } else if (values.phone_number.length !== 11) {
    errors.phone_number = '공백, 특수문자를 제외한 11자리 번호를 입력해주세요';
  }

  // password
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (values.password.length < 6) {
    errors.password = '6자 이상의 비밀번호를 입력하세요.';
  } else if (
    !/(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]$/.test(
      values.password
    )
  ) {
    errors.password =
      '비밀번호는 대문자, 소문자, 숫자, 특수문자가 포함되어야 합니다.';
  }

  // confirm password
  if (!values.password2) {
    errors.password2 = '비밀번호를 한번 더 입력해주세요.';
  } else if (values.password2 !== values.password) {
    errors.password2 = '비밀번호가 일치하지 않습니다.';
  }

  // email
  if (!values.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효한 이메일주소를 입력하세요.';
  }

  return errors;
};
