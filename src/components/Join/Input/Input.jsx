import React from 'react';
import * as S from './styles';

export const Input = ({
  name,
  values,
  placeholder,
  onChange,
  errors,
  children
}) => {
  return (
    <S.InputContainer>
      <S.Input
        type={name.includes('password') ? 'password' : 'text'}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={onChange}
        className={errors[name] ? 'error' : ''}
      />
      {children}
      {errors[name] && <S.Error>{errors[name]}</S.Error>}
    </S.InputContainer>
  );
};
