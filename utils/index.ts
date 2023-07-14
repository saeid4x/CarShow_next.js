 
import { CarProps, FilterProps } from '@/types';
import { manufacturers } from './../constants/index'; 

export async function fetchCars(filters:FilterProps){  //
 const {manufacturer, year, model, limit, fuel} = filters;
 
const default_url ="https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const full_url= `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
const my_url =`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}}`;

    const headers = {
        'X-RapidAPI-Key': 'qVjutzBW3OmshGRtP7FsPfksy6xVp1xLKaxjsn44puOVzYv573',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    try{
       
        const response = await fetch(default_url, {headers:headers});
        const result = await response.json();
        console.log('result',result)
        return  result 
       
    } catch(error){
        console.log(error)
    }
   
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


   
export const generateCarImageUrl = (car:CarProps,angle?:string) =>{
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;

    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(" ")[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);


    // console.log("img_url",url)

    return `${url}`


}