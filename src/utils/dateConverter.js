import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

// ex) ~일/시간/분 전
export const fromNow = date => dayjs(date).fromNow();

// ex) 22.11.03
export const getDate = date => dayjs(date).format('YY. MM. DD');

// ex) 9일(금)
export const getDay = date => {
  return (
    <>
      <b>{dayjs(date).format('D일')}</b>
      {dayjs(date).format('(dd)')}
    </>
  );
};
