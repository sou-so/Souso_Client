import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

// ex) ~일/시간/분 전
export const fromNow = date => dayjs(date).fromNow();

// ex) 22.11.03
export const getDate = date => dayjs(date).format('YY. MM. DD');

// ex) 나이 계산
export const getAge = date => {
  const age = dayjs(new Date()).diff(date, 'year') + 1;
  return [~~(age / 10), age % 10];
};

// ex) 9일(금)
export const getDay = date => {
  return (
    <>
      <b>{dayjs(date).format('D일')}</b>
      {dayjs(date).format('(dd)')}
    </>
  );
};
