export function splitArray(array) {

  const week = [];
  const day = [];

  for (let index = 8; index < array.length; index += 8) {
    week.push({ id: uuidv4(), items: [array[index]] });
  }

  !getHour() && week.push({ id: uuidv4(), items: [array[array.length - 1]] });

  day.push({ id: uuidv4(), items: [array[0]] });

  return { week, day };
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getDay(date){
  const days=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

  const year = date.substr(0,4)
  const month = date.substr(5,2)
  const day = date.substr(8, 2)

  var dt = new Date(month+' '+day+', '+year+' 12:00:00');
  const dayOfTheWeek = days[dt.getUTCDay()];
  
  return { dayOfTheWeek };
};

export function getHour(){
  const date = new Date();
  const hour = date.getHours()

  if(hour >= 18 && hour <= 20) {
    return true;
  }

  return false;
}