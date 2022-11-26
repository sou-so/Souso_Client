import dayjs from 'dayjs';

export const monthDivider = meets => {
  const sections = {};
  meets.forEach(meet => {
    const date = dayjs(meet.date).format('MM월');
    if (Array.isArray(sections[date])) {
      sections[date].push(meet);
    } else {
      sections[date] = [meet];
    }
  });
  return Object.entries(sections);
};
