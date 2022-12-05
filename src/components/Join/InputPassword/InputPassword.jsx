import React, { useEffect, useState } from 'react';
import { Input } from 'components/Join';
import { ReactComponent as EyeOn } from 'assets/icons/eye_on.svg';
import { ReactComponent as EyeOff } from 'assets/icons/eye_off.svg';
import { Icon } from 'components/Common';
import { validate } from 'utils/valid_join';

export const InputPassword = ({ name, values, onChange, errors }) => {
  const [render, setRender] = useState(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const checkPassword = async () => {
      const errorMessage = await validate(values);

      if (values.password) errors.password = errorMessage.password || '';
      if (values.password2) errors.password2 = errorMessage.password2 || '';

      setRender(values);
    };

    checkPassword();
  }, [errors, values, render]);

  return (
    <Input
      type={isShown ? 'text' : 'password'}
      name={name}
      placeholder={name === 'password' ? '비밀번호' : '비밀번호 확인'}
      onChange={onChange}
      values={values}
      errors={errors}
    >
      <Icon
        size={20}
        Icon={isShown ? EyeOn : EyeOff}
        onClick={() => setIsShown(prev => !prev)}
      />
    </Input>
  );
};
