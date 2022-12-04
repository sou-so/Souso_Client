import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const now = new Date();

// ex) ~일/시간/분 전
export const fromNow = date => dayjs(date).fromNow();

// ex) 22.11.03
export const getDate = date => dayjs(date).format('YY. MM. DD');

// 일주일까지는 ~일 전, 그 후는 yy.mm.dd
export const dateFormat = created_at => {
  return dayjs(new Date()).diff(created_at, 'day') < 8
    ? fromNow(created_at)
    : getDate(created_at);
};

// ex) n학년 n반
export const getAge = date => {
  const age = dayjs(now).diff(date, 'year') + 1;
  return age
    ? `${String(~~(age / 10))}학년 ${String(age % 10)}반`
    : '- 학년 - 반';
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

// 날짜가 과거면 true, 미래면 false
export const isPast = date => dayjs(date).diff(now) <= 0;
