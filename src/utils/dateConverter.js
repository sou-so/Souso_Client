import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

// ex) 22.11.03
export const getDate = date => dayjs(date).format('YY.MM.DD');

// ex) 9일(금)
export const getDay = date => {
  return (
    <>
      <b>{dayjs(date).format('D일')}</b>
      {dayjs(date).format('(dd)')}
    </>
  );
};
