//import results from "../reducers/results";

const url = 'https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2019-09-30&catalog=ALL&api_key=1qKDxv55zICsKKnsPKcTHW35m6dROjKl3lYdyxal'



const dataFetch = ()=> {return (fetch(url)
                .then((response) =>{
                    return response.json();
                })
                .then((myJson) =>{
                    return(myJson) ;
                })
                .catch(err=>{
                    return(err)
                }))}
         
           

const dataA = async () => {
    var dataSet = await dataFetch();
    console.log(dataSet);
    return dataSet
}

export const data = Promise.all([dataA()]).then(value=>{return value})






