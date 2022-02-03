import dayjs from 'dayjs';

function Date(){

    const toDate = dayjs().add(7,'day').format('YYYY-MM-DD');
    const fromDate = dayjs().subtract(2,'day').format('YYYY-MM-DD');

    
        return {toDate: toDate, fromDate: fromDate}

}

export default Date;


