type Data = {
  name: string,
  position: {lat: number, lng: number},
  climate: string,
  temp: number,
  fiveDays: number[]
}


interface WeaderDataProps {
  A: Data,
  B: Data,
  C: Data,
}

export const weatherData: WeaderDataProps = {
  A: {
   name: "Toronto",
   position: {lat: 43.66293, lng: -79.39314},
   climate: "Raining",
   temp: 20,
   fiveDays: [15, 18, 12, 22, 20] 
  },
  B: {
   name: "Guelph",
   position: {lat: 43.544811, lng: -80.248108},
   climate: "Cloudy",
   temp: 20,
   fiveDays: [15, 18, 12, 22, 20] 
  },
  C: {
   name: "Orangeville",
   position: {lat: 43.919239, lng: -80.097412},
   climate: "Sunny",
   temp: 20,
   fiveDays: [15, 18, 12, 22, 20] 
  }
}