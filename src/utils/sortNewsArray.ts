export default function sortByBirthDateDescending(data) {
  const monthShortNames = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  return data.sort((a, b) => {
    const dateA = new Date(
      a.date.replace(
        /(\w{3}) (\d{2}), (\d{4})/,
        (match, p1, p2, p3) => `${p3}-${monthShortNames[p1]}-${p2}`
      )
    );
    const dateB = new Date(
      b.date.replace(
        /(\w{3}) (\d{2}), (\d{4})/,
        (match, p1, p2, p3) => `${p3}-${monthShortNames[p1]}-${p2}`
      )
    );
    return dateB - dateA;
  });
}
