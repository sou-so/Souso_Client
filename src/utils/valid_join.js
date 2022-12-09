export const validate = values => {
  let errors = {};

  const phoneNumberRegex = /^[0-9]{11}$/i.test(values.phone_number);
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(
    values.password
  );
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    values.email
  );

  // name
  if (!values.name) {
    errors.name = '이름을 입력하세요.';
  } else if (values.name.length > 10) {
    errors.name = '10자 이하의 이름을 입력하세요.';
  }

  // nickname
  if (!values.nickname) {
    errors.nickname = '닉네임을 입력하세요.';
  } else if (values.nickname.length > 5 || values.nickname.length < 2) {
    errors.nickname = '2글자 이상 5글자 이하의 닉네임을 입력하세요.';
  }

  // phone_number
  if (!values.phone_number) {
    errors.phone_number = '휴대폰번호를 입력하세요.';
  } else if (!phoneNumberRegex) {
    errors.phone_number = '공백, 문자를 제외한 11자리 번호를 입력하세요.';
  }

  // verified_code
  if (!values.verified_code) {
    errors.verified_code = '휴대폰을 인증해주세요.';
  }

  // password
  if (!values.password) {
    errors.password = '비밀번호를 입력하세요.';
  } else if (!passwordRegex) {
    errors.password = '8~20자리의 영어+숫자 조합의 비밀번호를 입력하세요.';
  }

  // confirm password
  if (!values.password2) {
    errors.password2 = '비밀번호를 한번 더 입력하세요.';
  } else if (values.password2 !== values.password) {
    errors.password2 = '비밀번호가 일치하지 않습니다.';
  }

  // email
  if (!values.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!emailRegex) {
    errors.email = '올바른 이메일주소를 입력하세요.';
  }

  // birth
  if (values.birth.length !== 8) {
    errors.birth = '올바른 생년월일을 선택해주세요.';
  }

  return errors;
};
