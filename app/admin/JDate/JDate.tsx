import moment from "jalali-moment";

export  function JDate(date:string)
{
    moment.locale('fa', { useGregorianParser: true });
    const jDate=moment(date).format('HH:mm:ss YYYY-M-D');
    return jDate;
}
